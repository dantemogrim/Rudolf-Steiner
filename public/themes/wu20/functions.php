<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support('automatic-feed-links');

    register_nav_menus([
        'header-menu' => __('Header Menu'),
        'footer-menu' => __('Footer Menu'),
    ]);
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js', '', '', true);
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css');
    wp_enqueue_style('style', get_stylesheet_uri('./assets/dist/app.css'));
    wp_enqueue_style('style', get_stylesheet_uri());
});


// Register Staff as a custom post type.
require get_template_directory() . '/post-types/argument.php';
require get_template_directory() . '/post-types/arskurs.php';
require get_template_directory() . '/taxonomies/tool.php';

function get_menu(string $location)
{
    $menu = [];
    $items = wp_get_nav_menu_items($location) ?: [];

    foreach ($items as $item) {
        $parentId = (int) $item->menu_item_parent;

        if ($parentId === 0) {
            $item->children = [];
            $menu[$item->ID] = $item;

            continue;
        }

        $menu[$parentId]->children[] = $item;
    }

    return $menu;
}
