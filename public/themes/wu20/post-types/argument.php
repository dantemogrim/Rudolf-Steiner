<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('argument', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Lägg Till Nytt Argument'),
            'edit_item' => __('Redigera Existerande Argument'),
            'name' => __('Argumenten'),
            'search_items' => __('Sök Argument'),
            'singular_name' => __('Argument'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-editor-ul',
        'menu-position' => 20,
        'public' => true,
        'show_in_rest' => true,
    ]);
});
