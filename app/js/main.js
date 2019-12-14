$(function () {

  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
    $('html, body').toggleClass('lock');
  });


  $('.slider__menu').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev">Previous offer</button>',
    nextArrow: '<button type="button" class="slick-next">Next offer</button>',
  });

  $('.daily-menu__vegetarian span').on('click',function () {
    $(this).toggleClass('active');
    if ($('span').hasClass('active')) {
      // $('.daily-menu__content.meat').toggleClass('turn-off');
    }
  });

});