<?php /* Template Name: Pedagogik */ ?>

<?php get_header(); ?>

<?php


$args = [
    'numberposts' => -1,
    'post_type' => 'argument',
    'order' => 'asc',
];

$argumenten = get_posts($args);


?>

<?php if (count($argumenten)) : ?>


    <h2><?php the_title(); ?></h2>


    <div>

        <ul>
            <?php foreach ($argumenten as $post) : setup_postdata($post); ?>

                <div class="card m-3">
                    <div class="card-body">
                        <a href="<?php the_permalink(); ?>">
                            <h4><?php the_title(); ?></h4>
                        </a>
                        <?php the_excerpt(); ?>
                    </div>
                </div>


            <?php endforeach; ?>

    </div>
<?php endif; ?>

<?php get_footer(); ?>
