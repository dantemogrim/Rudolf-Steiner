<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('arskurs', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Lägg Till Ny Årskurs'),
            'edit_item' => __('Redigera Existerande Årskurs'),
            'name' => __('Årskurser'),
            'search_items' => __('Sök Årskurs'),
            'singular_name' => __('Årskurs'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-groups',
        'menu-position' => 20,
        'public' => true,
        'show_in_rest' => true,
    ]);
});
