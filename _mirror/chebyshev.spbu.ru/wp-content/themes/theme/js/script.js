(function($){
    $(document).ready(function(){
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        $(window).resize(function(){
            w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        });
        $('ul.dropdown-hover [data-toggle=dropdown1]').parent().on('hover', function (event) {
            if (w > 991) {
                event.preventDefault();
                event.stopPropagation();
                $(this).siblings().removeClass('open');
                $(this).toggleClass('open');
            }
        });
        $('ul.dropdown-hover [data-toggle=dropdown1]').on('click', function (event) {
            if (w <= 991) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass('open');
                $(this).parent().toggleClass('open');
            }
        });
        $('#council_carousel').slick({
            dots: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<div class="slick__prev slick__arrow"></div>',
            nextArrow: '<div class="slick__next slick__arrow"></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 124) {
            $('.bachelor .primary-menu').addClass('fixed-header');
        }
        else {
            $('.bachelor .primary-menu').removeClass('fixed-header');
        }
        if ($(window).scrollTop() >= 101) {
            $('.laboratory .primary-menu').addClass('fixed-header');
        }
        else {
            $('.laboratory .primary-menu').removeClass('fixed-header');
        }
    });
})(jQuery);