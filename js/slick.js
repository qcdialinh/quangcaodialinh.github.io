$(document).ready(function() {
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 551,
            settings: {
                slidesToShow: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });

    $('.faded').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    });

    $('.autoplay1').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 3000,
    });

    $('.autoplay3').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.autoplay4').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.autoplay5').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });

    $('.adaptive-1').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        asNavFor: '.sss',
        slidesToShow: 1,
        focusOnSelect: true,
        adaptiveHeight: true
    });

    $('.sss').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true
    });

    $('.adaptive1-1').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});