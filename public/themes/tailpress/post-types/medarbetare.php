<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('medarbetare', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Lägg Till Medarbetare'),
            'edit_item' => __('Redigera Medarbetare'),
            'name' => __('Medarbetare'),
            'search_items' => __('Sök Medarbetare'),
            'singular_name' => __('Medarbetare'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-portfolio',
        'menu-position' => 20,
        'public' => true,
        'show_in_rest' => true,
    ]);
});
