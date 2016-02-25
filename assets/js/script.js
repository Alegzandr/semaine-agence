$(function () {
    /* Start sidr plugin */
    $('#right-menu').sidr({
        name: 'sidr-right',
        side: 'right'
    });

    /* Click to close menu */
    $(document).mouseup(function (e) {
        var container = $("#sidr");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $.sidr('close', 'sidr-right');
        }
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
