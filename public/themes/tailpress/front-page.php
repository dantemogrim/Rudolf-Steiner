<!-- Startsida/home page. -->
<?php get_header(); ?>

    <?php
    $args = [
'numberposts' => 1,
'order' => 'desc',
    ];

    $latestPosts = get_posts($args);
    ?>

<?php foreach($latestPosts as $post) : setup_postdata($post); ?>

<div class="flex flex-col bg-white rounded-lg p-5 m-5">
			<div class="">
            <?php if (has_post_thumbnail()) {
        the_post_thumbnail('medium');
    } ?>
            </div>

			<div class="flex flex-col items-start mt-4">
				<a href="<?php the_permalink(); ?>"><h4 class="text-xl font-semibold"><?php the_title(); ?></h4></a>
				<p class="text-sm"><?php the_excerpt(); ?></p>

                <p class="text-blue-700"><?php the_date(); ?></p>
                <!-- Link to single post or post.php.-->
                <a href="<?php the_permalink(); ?>" class="p-2 leading-none rounded font-medium mt-3 bg-green-200 text-xs uppercase">Läs mer</a>


			</div>
		</div>

<?php endforeach; ?>

<?php get_footer(); ?>
