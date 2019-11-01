$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('#header').outerHeight() - 400) {
            $('.go-top').addClass('show');
        } else {
            $('.go-top').removeClass('show');
        }
    });

    $('.anchor').on('click', function () {
        if ($(window).width() <= 768) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'data-href')).offset().top - 60
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'data-href')).offset().top - 100
            }, 800);
        }
    })

    // nav 按鈕
    $('.btn-menu').on('click', function () {
        if (!$(this).hasClass('opened')) {
            $('.menu-list').addClass('opened');
            $(this).addClass('opened');
        } else {
            $('.menu-list').removeClass('opened');
            $(this).removeClass('opened');
        }
    });

    $('.menu-list').on('click', function () {
        $('.menu-list').removeClass('opened');
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
                $('.menu-list').removeClass('opened');
                $('.btn-menu').removeClass('opened');
            } else {
                $('.menu-list').addClass('opened');
            }
            //== resize function END====

        }, 300);
    });


});