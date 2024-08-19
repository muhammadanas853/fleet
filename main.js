// Owl Carousel
$(document).ready(function() {
    $("#Property").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
});
//   Image grids 01 Load More Button
$(document).ready(function() {
    const $cm2 = $('#row2');
    const $cm3 = $('#row3');
    const $btn = $('#loadmore');
    $cm2.hide();
    $cm3.hide();
    let count = 0;

    function loadmore() {
        count++;
        if (count === 1) {
            $cm2.show();
            $btn.html('Load More');
        } else if (count === 2) {
            $btn.html('Load Less');
            $cm3.show();
        } else if (count === 3) {
            $cm3.hide();
            $btn.html('Load Less');
        } else if (count === 4) {
            $cm2.hide();
            $btn.html('Load More');
            count = 0;
        }
    }
    $btn.on('click', loadmore);
});


$(document).ready(function() {
    const $cm2 = $('#p3');
    const $cm3 = $('#p4');
    const $btn = $('#view');
    $cm2.hide();
    $cm3.hide();

    function view() {
        if ($cm2.is(':hidden')) {
            $cm2.show();
            $btn.html('View All');
        } else if ($cm3.is(':hidden')) {
            $cm3.show();
            $btn.html('View Less');
        } else {
            $cm2.hide();
            $cm3.hide();
            $btn.html('View All');
        }
    }
    $btn.on('click', view);
});





$(document).ready(function() {
    $('#bestHostCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('#categoryCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('#adventureCarousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#aboutCarousel').owlCarousel({
        loop: true,
        margin: 50,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#aboutCarousel2').owlCarousel({
        loop: true,
        margin: 50,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function() {
    $('#product_show_all').click(function() {
        $('.cards-container .cardp').show();
    });

    $('#product_show_3').click(function() {
        $('.cards-container .cardp').hide();
        $('#ProductC1').show();
        $('#ProductC2').show();
        $('#ProductC3').show();
    });

    $('#product_show_4').click(function() {
        $('.cards-container .cardp').hide();
        $('#ProductC1').show();
        $('#ProductC2').show();
        $('#ProductC3').show();
        $('#ProductC4').show();
    });

    $('#product_show_5').click(function() {
        $('.cards-container .cardp').hide();
        $('#ProductC1').show();
        $('#ProductC2').show();
        $('#ProductC3').show();
        $('#ProductC4').show();
        $('#ProductC5').show();
    });

});