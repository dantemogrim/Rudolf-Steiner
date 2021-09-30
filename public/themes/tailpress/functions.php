<?php

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('menus');

    register_nav_menus([
        'navigation' => __('Navigation'),
    ]);
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_stylesheet_uri());
});

// Register Staff as a custom post type.
require get_template_directory().'/post-types/medarbetare.php';
require get_template_directory().'/taxonomies/tool.php';
