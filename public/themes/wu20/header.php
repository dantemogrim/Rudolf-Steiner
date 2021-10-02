<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/dist/app.css') ?>">
    <?php wp_head(); ?>
</head>

<body <?php body_class('body'); ?>>
    <?php wp_body_open(); ?>
    <?php $menuItems = get_menu('header-menu'); ?>


    <nav class="w-100 sticky-top">
        <div class="home">
            <a class="link" href="<?= get_home_url(); ?>">
                <img class="logo" src="<?= get_template_directory_uri(); ?>/icons/school.svg" />
            </a>
            <h1 class="link"> Rudolf Steinerskolan</h1>
        </div>
        <?php foreach ($menuItems as $menuItem) : ?>
            <?php if (sizeof($menuItem->children) === 0) : ?>
                <!-- Single links. -->
                <a class="visibleLinks" href="<?= $menuItem->url; ?>">
                    <?= $menuItem->title; ?>
                </a>
            <?php else : ?>
                <!-- Parent links. -->
                <div class="listWrapper">
                    <a class="visibleLinks" href="<?= $menuItem->url; ?>">
                        <?= $menuItem->title; ?>
                    </a>
                    <ul class="childrenWrapper">
                        <?php foreach ($menuItem->children as $child) : ?>
                            <!-- Children links. -->
                            <li>
                                <a href="<?= $child->url ?>">
                                    <?= $child->title; ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>
        <?php endforeach; ?>
    </nav>
