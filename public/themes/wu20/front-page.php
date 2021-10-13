<!-- Startsida/home page. -->
<?php get_header(); ?>

<?php the_content(); ?>

<?php
$args = [
    'numberposts' => 1,
    'order' => 'desc',
];

$latestPosts = get_posts($args);
?>

<?php foreach ($latestPosts as $post) : setup_postdata($post); ?>


<?php endforeach; ?>



<?php get_footer(); ?>
