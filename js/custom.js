// loding
  $(window).on("load", function () {
    $(".sk-folding-cube").fadeOut(1500, function () {
        $(".loding").fadeOut(1508)
    })
})


// plgin slider
$(".peoples_all .owl-carousel").owlCarousel({
    items: 2.6,
    margin: 16,
    loop: true,
    // center: true,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 1800,
    // autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1100: {

        }
    }
});


// ------------------------------------------------
// plgin slider
$(".all-house1 .owl-carousel").owlCarousel({
    items: 3.4,
    margin: 40,
    loop: true,
    // center: true,
    nav: true,
    // autoplay: true,
    // autoplayTimeout: 1400,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
            autoplay: false,
        },
        768: {
            items: 2,
            autoplay: false,           
        },
        1000: {
            items: 3,
            autoplay: false,           
        },
        1100: {

        }
    }
});

// plgin slider
$(".all-house2 .owl-carousel").owlCarousel({
    items: 3.4,
    margin: 40,
    loop: true,
    // center: true,
    nav: true,
    // autoplay: true,
    autoplayTimeout: 1400,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
            autoplay: false,
        },
        768: {
            items: 2,
            autoplay: false,           
        },
        1000: {
            items: 3,
            autoplay: false,           
        },
        1100: {

        }
    }
});

// plgin slider
$(".all-house3 .owl-carousel").owlCarousel({
    items: 3.4,
    margin: 40,
    loop: true,
    // center: true,
    nav: true,
    // autoplay: true,
    autoplayTimeout: 1400,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
            autoplay: false,
        },
        768: {
            items: 2,
            autoplay: false,           
        },
        1000: {
            items: 3,
            autoplay: false,           
        },
        1100: {

        }
    }
});
// --------------------------------------------------

// plgin slider says
$(".all-SayAboutUs .owl-carousel").owlCarousel({
    items: 2,
    margin: 56,
    loop: true,
    center: true,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 4400,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1100: {

        }
    }
});

// scroll navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop() >= 140) {
        $("header").addClass("fixedNav");
    } else {
        $("header").removeClass("fixedNav");
    }
})



