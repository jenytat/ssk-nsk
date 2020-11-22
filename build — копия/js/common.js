'use strict';

$(document).ready(function () {
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

    $('.arrow').click(function () {
        $(this).parents('li').find('.mobile-menu__submenu').slideToggle();
    });

    $('.slider').on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    }).slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        dots: false
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubW9iaWxlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubW9iaWxlJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgJCgnLmhvbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICQoJy5tb2JpbGUtbWVudScpLmFkZENsYXNzKCdvcGVuLW1lbnUnKTtcbiAgICAgICAgJCgnLm1vYmlsZS1vcGVuJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICB9KTtcbiAgICAkKCcubW9iaWxlLW1lbnVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1vYmlsZScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQoJy5ob21lJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAkKCcubW9iaWxlLW1lbnUnKS5yZW1vdmVDbGFzcygnb3Blbi1tZW51Jyk7XG4gICAgICAgICQoJy5tb2JpbGUtb3BlbicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuYXJyb3cnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50cygnbGknKS5maW5kKCcubW9iaWxlLW1lbnVfX3N1Ym1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLnNsaWRlcicpLm9uKCdpbml0JywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaykge1xuICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNsaWNrLWNvdW50ZXJcIj48c3BhbiBjbGFzcz1cImN1cnJlbnRcIj48L3NwYW4+IC8gPHNwYW4gY2xhc3M9XCJ0b3RhbFwiPjwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgJCgnLmN1cnJlbnQnKS50ZXh0KHNsaWNrLmN1cnJlbnRTbGlkZSArIDEpO1xuICAgICAgICAkKCcudG90YWwnKS50ZXh0KHNsaWNrLnNsaWRlQ291bnQpO1xuICAgIH0pLnNsaWNrKHtcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIGRvdHM6IGZhbHNlXG4gICAgfSkub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgICQoJy5jdXJyZW50JykudGV4dChuZXh0U2xpZGUgKyAxKTtcbiAgICB9KTtcbn0pOyJdfQ==
