<?php

declare(strict_types=1);

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_theme_file_uri('dist.css'));
});
