jQuery(document).ready(function ($) {

    const gdpr = $('.gdpr');
    const allHeader = $('header');
    const menuToggle = $('.menu-toggle');
    const headerMenu = $('.main-navigation');


    menuToggle.click(function () {
        allHeader.toggleClass('overlay');
        headerMenu.toggleClass('menu-toggle--open');
        menuToggle.toggleClass('menu-visible');
    })


    $('.menu .navigation-items .item a').click(function () {
        allHeader.removeClass('overlay');
        headerMenu.removeClass('menu-toggle--open');
        menuToggle.removeClass('menu-visible');

        console.log('removeClass')
    })


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#!"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 110
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });

    $('.accept-gdpr').click(
        function (){
            gdpr.addClass('accept')
        }
    )

});