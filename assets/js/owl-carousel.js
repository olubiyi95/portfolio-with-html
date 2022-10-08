$('.owl-hero-slide').owlCarousel({
        loop: true,
        nav: false,
        animateOut: 'fadeOutUp',
        animateIn: 'fadeInUp',
        items: 1,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        loop: true,
        stagePadding: 0,
        smartSpeed: 450,
        dots: false,
        responsiveClass: true,
        responsive:{
                0:{
                    items: 1
                    },
                    
                600:{
                    items: 1
                    },
                }
});


$('.owl-projects').owlCarousel({
        loop: true,
        nav: false,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        items: 1,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        loop: true,
        stagePadding: 0,
        smartSpeed: 450,
        dots: false,

});
