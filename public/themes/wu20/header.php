<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/dist/app.css') ?>">
    <?php wp_head(); ?>
</head>

<body>

    <?php $menuItems = get_menu('header-menu'); ?>
    <div class="mobile-menu">


        <nav>
            <a href="<?= get_home_url(); ?>">
                <img class="logo" src="<?= get_template_directory_uri(); ?>/icons/logoAndText.svg" />
            </a>

            <?php foreach ($menuItems as $menuItem) : ?>
                <?php if (sizeof($menuItem->children) === 0) : ?>
                    <!-- Single links. -->
                    <a class="menuLinks mobileMenu" href="<?= $menuItem->url; ?>">
                        <?= $menuItem->title; ?>
                    </a>
                <?php else : ?>
                    <!-- Parent links. -->
                    <div class="parentAndChildrenWrapper">
                        <div class="caretLinkWrapper">
                            <img class="caret" src="<?= get_template_directory_uri(); ?>/icons/caret-down.svg" />
                            <a class="menuLinks mobileMenu" href="<?= $menuItem->url; ?>">
                                <?= $menuItem->title; ?>
                            </a>
                        </div>
                        <ul class="subMenuBox">
                            <?php foreach ($menuItem->children as $child) : ?>
                                <!-- Children links. -->
                                <li>
                                    <a class="childLinks mobileMenu" href="<?= $child->url ?>">
                                        <?= $child->title; ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>

            <button class="loginButton" type="button">Intranät</button>
            <button class="applyButton" type="button">Ansök</button>

            <button class="hamburgerButton">
                <img class="hamburgerIcon" alt="Open mobile navigation." src="<?= get_template_directory_uri(); ?>/icons/list.svg" />
            </button>

            <a class="closeMenuButton">
                <img class="closeMenuIcon" alt="Close mobile navigation." src="<?= get_template_directory_uri(); ?>/icons/x.svg" />
            </a>

        </nav>
        <main>
