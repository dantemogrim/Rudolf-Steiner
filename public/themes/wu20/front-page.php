<!-- Startsida/home page. -->
<?php get_header(); ?>

<main role="main">

    <?php
    $args = [
        'numberposts' => 1,
        'order' => 'desc',
    ];

    $latestPosts = get_posts($args);
    ?>

    <?php foreach ($latestPosts as $post) : setup_postdata($post); ?>

        <div class="rounded card p-5 m-5">
            <div class="">
                <?php if (has_post_thumbnail()) {
                    the_post_thumbnail('medium');
                } ?>
            </div>

            <div class="card-body">
                <a href="<?php the_permalink(); ?>">
                    <h4 class="card-title"><?php the_title(); ?></h4>
                </a>
                <p class="card-text"><?php the_excerpt(); ?></p>

                <p class="card-text"><?php the_date(); ?></p>
                <!-- Link to single post or post.php.-->
                <a class="btn btn-primary" href="<?php the_permalink(); ?>" class="">Läs mer</a>


            </div>
        </div>

    <?php endforeach; ?>


</main <?php get_footer(); ?>
