<?php /* Template Name: Årskurser */ ?>

<?php get_header(); ?>


<div class="blobAndHeadingWrapper">
    <img class="greenBlobDesktop" src="<?= get_template_directory_uri(); ?>/images/blobBannerGreenDesktop.svg">
    <img class="greenBlobMobile" src="<?= get_template_directory_uri(); ?>/images/blobBannerGreenMobile.svg">
    <h2 class="arskurser"><?php the_title(); ?></h2>
    <p class="underrubrik">I waldorfskolan finns en tydlig rytm, en dags-, vecko- och årsrytm. Ett exempel är de återkommande månadsfesterna där eleverna visar upp för varandra vad de arbetat med i sina respektive klasser.</p>
</div>

<div class="container">
    <?php

    $args = [
        'numberposts' => -1,
        'post_type' => 'arskurs',
        'order' => 'asc',
    ];

    $argumenten = get_posts($args);

    ?>

    <?php if (count($argumenten)) : ?>

        <?php foreach ($argumenten as $post) : setup_postdata($post); ?>

            <div class="singleCard">
                <div class="desktopCard">
                    <a href="<?php the_permalink(); ?>">

                        <?php if (has_post_thumbnail()) {
                            the_post_thumbnail('medium');
                        } ?>
                        <div class="textWrapper">
                            <h4><?php the_title(); ?></h4>
                            <p>Läs mer</p>
                        </div>
                    </a>
                    <div class="excerpt">
                        <?php the_excerpt(); ?>
                    </div>
                </div>
            </div>

        <?php endforeach; ?>

    <?php endif; ?>
</div>

<?php get_footer(); ?>
