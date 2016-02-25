$(function () {
    /* Start sidr plugin */
    $('#right-menu').sidr({
        name: 'sidr-right',
        side: 'right'
    });

    /* Smooth scroll for a tags */

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /* Smooth scroll for on click events */

    function smoothScroll(page) {
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 750);

        event.preventDefault();
    }

    /* On click events */

    document.querySelectorAll('.see-more')[0].onclick = function () {
       smoothScroll('#product');
    };

});
