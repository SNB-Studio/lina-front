function indextop_switch(){
    if (window.matchMedia('screen and (max-width: 920px)').matches) {
        $('.top-photo').appendTo($('.top-content'));
    } else{
        $('.top-photo').appendTo($('.top-grid'));
    };
}

var result_slider = new Swiper('.result-slider', {
    init: false,
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true
});
var vendors_slider = new Swiper('.vendors-slider', {
    init: false,
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1160: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    loop: false
});
var reviews_slider = new Swiper('.reviews-slider', {
    init: false,
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true
});
var workers_slider = new Swiper('.workers-slider', {
    init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    loop: true
});

function swiper_params(sl){
    if (window.matchMedia('screen and (max-width: 767px)').matches) {
        sl.params.effect = 'coverflow';
        sl.params.centeredSlides = true;
        sl.params.slidesPerView = 'auto';
        sl.params.spaceBetween = -10;
        sl.params.loop = false;
        sl.params.breakpoints = false;
        sl.init();
    } else{
        sl.init();
    };
};
function swiper_vendors(){
    if (window.matchMedia('screen and (max-width: 767px)').matches) {
        vendors_slider.params.effect = 'slide';
        vendors_slider.params.centeredSlides = true;
        vendors_slider.params.slidesPerView = 'auto';
        vendors_slider.params.spaceBetween = 20;
        vendors_slider.params.loop = false;
        vendors_slider.params.breakpoints = false;
        vendors_slider.init();
    } else{
        vendors_slider.init();
    };
};

$(document).ready(function() {
    $('.type-selector-buttons .selector-button').on( 'click', function() {
        var filter = $(this).attr('data-type');

        $('.type-block').hide();
        $(filter).css('display', 'block');
        $('.type-selector-buttons .selector-button' ).removeClass( 'active');
        $(this).addClass('active');
    });

    $('.vendor-selector-buttons .selector-button').on( 'click', function() {
        var filter = $(this).attr('data-vendor');

        if ($(this).hasClass('active')) {
            $('.vendors-slider .swiper-slide').css('display', '');
            $(this).removeClass('active');
        } else{
            $('.vendors-slider .swiper-slide').hide();
            $(filter).show();
            $('.vendor-selector-buttons .selector-button' ).removeClass( 'active');
            $(this).addClass('active');
        };
    });
    $('.faq-item').on('click', function(){
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('p.answer').slideUp(300);
        } else{
            $('.faq-item p.answer').slideUp(300);
            $('.faq-item').removeClass('open');
            $(this).find('p.answer').slideToggle(300);
            $(this).toggleClass('open');
        };
    });

    indextop_switch();

    swiper_params(workers_slider);
    swiper_params(reviews_slider);
    swiper_params(result_slider);
    swiper_vendors();

    $('#nav-toggle').on( 'click', function() {
        $('.header').toggleClass('open');
        $('.header .menu').slideToggle(300);
    });
});
$(window).resize(function() {
    indextop_switch()
});