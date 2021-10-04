<?php /* Template Name: Årskurser */ ?>

<?php get_header(); ?>

<div>
    <?php if (have_posts()) : ?>

        <?php while (have_posts()) : the_post(); ?>

            <h2><?php the_title(); ?></h2>

            <?php the_content(); ?>

        <?php endwhile; ?>

    <?php endif; ?>
</div>


<?php
$arskurser = get_posts(['post_type' => 'arskurs']);
?>

<?php if (count($arskurser)) : ?>
    <div>
        <h3>Läs mer om dessa här:</h3>

        <ul>
            <?php foreach ($arskurser as $post) : setup_postdata($post); ?>
                <li>
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>

                    <?php $tools = get_the_terms($post, 'tool'); ?>
                    <?php if ($tools) : ?>
                        <p>
                            Tag:
                            <?php foreach ($tools as $tool) : ?>
                                <a href="<?php echo get_term_link($tool) ?>"><?php echo $tool->name; ?></a>
                            <?php endforeach; ?>
                        </p>
                    <?php endif; ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
<?php endif; ?>

<?php get_footer(); ?>
