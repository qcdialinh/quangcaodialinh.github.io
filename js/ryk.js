$(function() {
    $(".menu-desktop .nav-sub .nav-sub-child").each(function() {
        let length = $(this).find(".nav-sub-item-child").length;
        if (length) {
            $(this).prev("a").append("<i class='fa fa-angle-right pt_icon_right'></i>");
        }
    })
    $(".menu-mobile .nav-sub").each(function() {
        let length = $(this).find(".nav-sub-item").length;
        if (length) {
            $(this).parent(".nav-item").prepend("<i class='fa fa-chevron-down mm1'></i>");
        }
    })
    $(".menu-mobile .nav-sub .nav-sub-child").each(function() {
        let length = $(this).find(".nav-sub-item-child").length;
        if (length) {
            $(this).parent(".nav-sub-item").prepend("<i class='fa fa-chevron-down mm2'></i>");
        }
    })

    $('.lazy').lazy();

    $('.list-bar').click(function() {
        $('.menu-mobile').slideToggle();
    });

    $('.menu-mobile .mm1').click(function() {
        $(this).parent().find('.nav-sub').slideToggle();
    });

    $('.menu-mobile .mm2').click(function() {
        $(this).parent().find('.nav-sub-child').slideToggle();
    });

    $(".menu-desktop .nav-item .nav-sub").each(function() {
        if ($(this).find(".nav-sub-item").length) {
            $(this).prev("a").append("<i class='fa fa-angle-down' aria-hidden='true'></i>");
        }
    })

    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        if (pos_body > 50) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }

        if (pos_body > 300) {
            $('#back-top').addClass('open');
        } else {
            $('#back-top').removeClass('open');
        }
    });


    // $(window).scroll(function(event) {
    //     var pos_body = $('html').scrollTop();
    //     if(pos_body>100){
    //       $('#menu').addClass('topfix');
    //     }
    //     else {
    //       $('#menu').removeClass('topfix');
    //     }
    //  });

    //  $(window).scroll(function(event) {
    //     var pos_body = $('body').scrollTop();
    //     if(pos_body>100){
    //       $('#menu').addClass('topfix2');
    //     }
    //     else {
    //       $('#menu').removeClass('topfix2');
    //     }
    //  });
});




function myFunction(x) {
    x.classList.toggle("change");
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}