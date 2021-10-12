<!-- Shows a single post as a page. Works in "Årskurser" for example. -->
<?php get_header(); ?>

<?php if (have_posts()) : ?>

    <?php while (have_posts()) : the_post(); ?>

        <div class="singleContainer">
            <div class="singlePostCard">
                <div class="thumbnailHeadingWrapper">

                    <?php if (has_post_thumbnail()) {
                        the_post_thumbnail('medium', array('class' => 'singlePostThumbnail'));
                    } ?>

                    <img class="singlePostBlob" src="<?= get_template_directory_uri(); ?>/images/blob.svg" />
                    <h1 class="singlePostHeading"><?php the_title(); ?></h1>

                </div>

                <div class="content"><?php the_content(); ?></div>

                <!-- Link to all posts in Aktuellt/index.php. -->
                <?php $blogPageUrl = get_permalink(get_option('page_for_posts')); ?>
                <a class="" href="<?= $blogPageUrl; ?>"><button>Tillbaka</button></a>

            </div>
        </div>
    <?php endwhile;
else : ?>
    <article>
        <p>Inget innehåll att visa i nuläget.</p>
    </article>
<?php endif; ?>



<?php get_footer(); ?>
