</div>
</main>
<?php wp_footer(); ?>
<footer>
    <h1 class="footerTextOrange footer-name">RUDOLF STEINERSKOLAN GÖTEBORG</h1>
    <div class="contact">
        <ul class="footer-adress">
            <li class="footerTextOrange"><b>Adress</b></li>
            <li class="white">Rudolf Steinerskolan i Göteborg</li>
            <li class="white">Tallhöjdsgatan 1</li>
            <li class="white">416 74 GÖTEBORG</li>
        </ul>
        <ul class="footer-email">
            <li class="footerTextOrange"><b>E-post</b></li>
            <li class="white">rudolf@steinerskolan.se</li>
        </ul>
        <ul class="footer-phone">
            <li class="footerTextOrange"><b>Telefon</b></li>
            <li class="white">031-21 46 32</li>
        </ul>
    </div>
    <div class="bottom">
        <h2 class="idun-login">Gå vidare till Idunsoft Portal</h2>
        <div class="icons">

            <img class="social" src="<?= get_template_directory_uri(); ?>/icons/instagram.svg" />

            <img class="social" src="<?= get_template_directory_uri(); ?>/icons/facebook.svg" />

            <img class="social" src="<?= get_template_directory_uri(); ?>/icons/youtube.svg" />

        </div>
    </div>

</footer>
<script src="<?= get_theme_file_uri('assets/dist/app.js') ?>" async></script>
<script src="<?= get_theme_file_uri('assets/dist/nav.js') ?>" async></script>
</body>

</html>
