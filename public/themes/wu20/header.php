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


    <nav class="sticky-top">
        <a href="<?= get_home_url(); ?>">
            <img class="logo" src="<?= get_template_directory_uri(); ?>/icons/logoAndText.svg" />
        </a>

        <img class="hamburgerIcon" src="<?= get_template_directory_uri(); ?>/icons/list.svg" />

        <?php foreach ($menuItems as $menuItem) : ?>
            <?php if (sizeof($menuItem->children) === 0) : ?>
                <!-- Single links. -->
                <a class="menuLinks" href="<?= $menuItem->url; ?>">
                    <?= $menuItem->title; ?>
                </a>
            <?php else : ?>
                <!-- Parent links. -->
                <div class="parentAndChildrenWrapper">
                    <a class="menuLinks" href="<?= $menuItem->url; ?>">
                        <?= $menuItem->title; ?>
                    </a>
                    <ul class="subMenuBox">
                        <?php foreach ($menuItem->children as $child) : ?>
                            <!-- Children links. -->
                            <li>
                                <a class="childLinks" href="<?= $child->url ?>">
                                    <?= $child->title; ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>
        <?php endforeach; ?>

        <img class="hamburgerIcon" src="<?= get_template_directory_uri(); ?>/icons/list.svg" />
    </nav>
