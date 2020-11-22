$(document).ready(function(){
    $('.mobile').click(function () {
        $('.mobile').addClass('open');
        $('.home').addClass('hidden');
        $('.mobile-menu').addClass('open-menu');
        $('.mobile-open').addClass('visible');
    });
    $('.mobile-menu__btn').click(function () {
        $('.mobile').removeClass('open');
        $('.home').removeClass('hidden');
        $('.mobile-menu').removeClass('open-menu');
        $('.mobile-open').removeClass('visible');
    });

    $('.arrow').click(function(){
        $(this).parents('li').find('.mobile-menu__submenu').slideToggle();
    });
    
    $('.slider').on('init', function(event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        dots: false
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
    });
});