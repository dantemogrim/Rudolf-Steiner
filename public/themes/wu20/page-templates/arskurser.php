<?php /* Template Name: Årskurser */ ?>

<?php get_header(); ?>


<div class="blobAndHeadingWrapper">
    <img class="greenBlobDesktop" src="<?= get_template_directory_uri(); ?>/images/blob-banner-green-desktop.svg">
    <img class="greenBlobMobile" src="<?= get_template_directory_uri(); ?>/images/blob-banner-green-mobile.svg">
    <h2 class="arskurser"><?php the_title(); ?></h2>
    <p class="underrubrik">I waldorfskolan finns en tydlig rytm, en dags-, vecko- och årsrytm. Ett exempel är de återkommande månadsfesterna där eleverna visar upp för varandra vad de arbetat med i sina respektive klasser.</p>
</div>

<div class="containerAlignment">
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
                    <a href="<?php the_permalink(); ?>">
                        <div class="arrowTextWrapper">

                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8664 0.43973C13.1008 0.158171 13.4187 0 13.7502 0C14.0816 0 14.3995 0.158171 14.6339 0.43973L19.634 6.44724C19.8684 6.72888 20 7.11082 20 7.50907C20 7.90731 19.8684 8.28925 19.634 8.57089L14.6339 14.5784C14.3982 14.852 14.0824 15.0034 13.7547 14.9999C13.4269 14.9965 13.1134 14.8386 12.8816 14.5601C12.6499 14.2816 12.5184 13.905 12.5156 13.5112C12.5127 13.1174 12.6387 12.738 12.8664 12.4548L15.7327 9.01094H1.25002C0.918492 9.01094 0.600545 8.85271 0.366121 8.57105C0.131698 8.2894 0 7.90739 0 7.50907C0 7.11074 0.131698 6.72874 0.366121 6.44708C0.600545 6.16542 0.918492 6.00719 1.25002 6.00719H15.7327L12.8664 2.56338C12.6321 2.28174 12.5004 1.8998 12.5004 1.50156C12.5004 1.10331 12.6321 0.721373 12.8664 0.43973Z" fill="#04395E" />
                            </svg>

                            <p>Läs mer här</p>
                        </div>
                    </a>

                </div>

            <?php endforeach; ?>

        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
