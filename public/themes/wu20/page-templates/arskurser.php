<?php /* Template Name: Årskurser */ ?>

<?php get_header(); ?>


<div class="blobAndHeadingWrapper">
    <img class="greenBlobDesktop" src="<?= get_template_directory_uri(); ?>/images/blobBannerGreenDesktop.svg">
    <img class="greenBlobMobile" src="<?= get_template_directory_uri(); ?>/images/blobBannerGreenMobile.svg">
    <h2 class="arskurser"><?php the_title(); ?></h2>
    <p class="underrubrik">I waldorfskolan finns en tydlig rytm, en dags-, vecko- och årsrytm. Ett exempel är de återkommande månadsfesterna där eleverna visar upp för varandra vad de arbetat med i sina respektive klasser.</p>
</div>

<div class="cardContainer">
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

                <a href="<?php the_permalink(); ?>">

                    <?php if (has_post_thumbnail()) {
                        the_post_thumbnail('medium', array('class' => 'cardThumbnail'));
                    } ?>
                    <div class="textWrapper">
                        <h4><?php the_title(); ?></h4>
                    </div>
                </a>
                <div class="excerpt">
                    <?php the_excerpt(); ?>
                </div>
                <div class="arrowTextWrapper">
                    <img class="gradeArrow" src="<?= get_template_directory_uri(); ?>/icons/arrow.svg" />
                    <p>Läs mer här</p>
                </div>

            </div>

        <?php endforeach; ?>

    <?php endif; ?>
</div>

<?php get_footer(); ?>
