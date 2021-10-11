<!-- Aktuellt. -->
<?php get_header(); ?>

<?php if (have_posts()) : ?>

    <?php while (have_posts()) : the_post(); ?>


        <div class="rounded card p-5 m-5">
            <a href="<?php the_permalink(); ?>">
                <div>
                    <?php if (has_post_thumbnail()) {
                        the_post_thumbnail('medium');
                    } ?>
                </div>

                <div class="flex flex-col items-start mt-4">
                    <h1 class="text-xl font-bold"><?php the_title(); ?></h1>
            </a>
            <p><?php the_excerpt(); ?></p>

            <p class="text-blue-700"><?php the_date(); ?></p>

            <?php $blogPageUrl = get_permalink(get_option('page_for_posts')); ?>

            <a href="<?php the_permalink(); ?>">Läs mer</a>

        </div>
        </div>

    <?php endwhile;
else : ?>
    <article>
        <p>Ingenting att visa i nuläget.</p>
    </article>
<?php endif; ?>

<?php get_footer(); ?>
