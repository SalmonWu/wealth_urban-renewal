$(function () {
    $('.anchor').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 200
        }, 800);
    })
});