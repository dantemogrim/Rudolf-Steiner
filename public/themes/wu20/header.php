<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/dist/app.css') ?>">
    <link rel="icon" href="<?= get_template_directory_uri(); ?>/images/favicon.png" type="image/gif">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php $menuItems = get_menu('header-menu'); ?>
    <div class="mobileMenuOverlay">

        <nav>

            <a class="brandHomeLink" href="<?= get_home_url(); ?>">
                <img class="brand" src="<?= get_template_directory_uri(); ?>/icons/logoAndText.svg" />
            </a>

            <button class="applyButtonBrand" type="button">
                Ansök
            </button>

            <div class="fullMenuContainer">


                <?php foreach ($menuItems as $menuItem) : ?>
                    <?php if (sizeof($menuItem->children) === 0) : ?>
                        <!-- Single buttons. -->
                        <a class="primaryLinks" href="<?= $menuItem->url; ?>">
                            <?= $menuItem->title; ?>
                        </a>
                    <?php else : ?>
                        <!-- Parent links. -->
                        <div class="primaryAndSubWrapper">
                            <a class="primaryLinks" href="<?= $menuItem->url; ?>">
                                <div class="caretLinkWrapper">
                                    <img class="caretBlue" src="<?= get_template_directory_uri(); ?>/icons/caret-down-blue.svg" />
                                    <img class="caretWhite" src="<?= get_template_directory_uri(); ?>/icons/caret-down-white.svg" />
                                    <?= $menuItem->title; ?>
                                </div>
                            </a>
                            <ul class="subMenuBox">
                                <?php foreach ($menuItem->children as $child) : ?>
                                    <!-- Children links. -->
                                    <li class="singleSubLinkContainer">
                                        <a class="subLink" href="<?= $child->url ?>">
                                            <?= $child->title; ?>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>



                <div class="intranetApplyWrapper">
                    <a class="intranetLinkHeader">
                        Idunsoft
                    </a>
                    <button class="applyButton" type="button">
                        Ansök
                    </button>
                </div>


            </div>

            <div class="burgerWrapper">
                <button class="hamburgerOpenButton">
                    <img class="hamburgerOpenIcon" alt="Open mobile navigation." src="<?= get_template_directory_uri(); ?>/icons/list.svg" />
                </button>

                <button class="hamburgerCloseButton">
                    <img class="hamburgerCloseIcon" alt="Close mobile navigation." src="<?= get_template_directory_uri(); ?>/icons/x.svg" />
                </button>
            </div>


    </div>
    </nav>
    <main>
