<!-- Shows a single post as a page. Works in "Aktuellt". -->
<?php get_header(); ?>
<?php if(have_posts()): ?>

<?php while (have_posts()): the_post(); ?>


<div class="flex flex-col bg-white rounded-lg p-5 m-5">

            <div class="">
            <?php if (has_post_thumbnail()) {
        the_post_thumbnail('medium');
                 } ?>
            </div>

        <div class="flex flex-col items-start mt-4">
        <h1 class="text-xl font-bold"><?php the_title(); ?></h1>
        </a>
            <p class=""><?php the_content(); ?></p>

            <p class="text-blue-700"><?php the_date(); ?></p>

            <!-- Link to all posts in Aktuellt/index.php. -->
            <?php $blogPageUrl = get_permalink(get_option('page_for_posts')); ?>
            <a href="<?= $blogPageUrl; ?>" class="p-2 leading-none rounded font-medium mt-3 bg-green-200 text-xs uppercase">Se fler inlägg</a>
        </div>
    </div>
    <?php endwhile;
else : ?>
    <article>
        <p>Inga inlägg att visa i nuläget.</p>
    </article>
<?php endif; ?>

<?php get_footer(); ?>
