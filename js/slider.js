jQuery(document).ready(function($) {
    "use strict";
    $('#customers-testimonials').owlCarousel( {
            loop: true,
            center: false,
            items: 1,
            margin: 30,
            autoplay: false,
            dots: false,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    });
