$(function () {
    $(window).on('scroll', function () {
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

    // nav 按鈕
    $('.btn-menu').on('click', function () {
        if (!$(this).hasClass('opened')) {
            $('.menu-list').css('display', 'block');
            $(this).addClass('opened');
        } else {
            $('.menu-list').css('display', 'none');
            $(this).removeClass('opened');
        }
    });

    $('.menu-list').on('click', function () {
        $('.menu-list').css('display', 'none');
        $('.btn-menu').removeClass('opened');
    });

    // resize 設定計時器處理
    var resizeTimer = null;
    $(window).on('resize', function () {
        if (resizeTimer) {
            clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(function () {

            //== resize function START====
            // console.log($(window).innerWidth());
            if ($(window).innerWidth() < 768) {
                $('.menu-list').css('display', 'none');
                $('.btn-menu').removeClass('opened');
            } else {
                $('.menu-list').css('display', 'block');
            }
            //== resize function END====

        }, 300);
    });


});