$(function () {
    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= $('#header').outerHeight() - 400) {
            $('.go-top').addClass('show');
        } else {
            $('.go-top').removeClass('show');
        }
    });

    $('.anchor').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'data-href')).offset().top - 100
        }, 800);
    })
});