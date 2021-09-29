<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?= get_theme_file_uri('assets/app.css') ?>">
  <?php wp_head(); ?>
</head>
<body class="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
<?php wp_body_open(); ?>
<?php $menuItems = wp_get_nav_menu_items('menu-bar'); ?>
<header>
    <nav class="bg-white flex items-center justify-between flex-wrap p-6">
        <!-- Rudolf Steiner logo. with link wrapped to Home page. -->
        <a href="<?= get_home_url(); ?>"
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Rudolf Steinerskolan</span>
  </div>
</a>
<!-- Hamburger icon. -->
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-black">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <!-- Menu items. -->
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    <?php foreach ($menuItems as $menuItem) : ?>
      <a href="<?= $menuItem->url; ?>" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-pink-500 mr-4">
        <?= $menuItem->title; ?>
      </a>
    <?php endforeach; ?>
    </div>
  </div>
</nav>
</header>
