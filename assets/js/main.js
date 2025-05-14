// ハンバーガー

var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function () {
  // console.log('click');
  $(this).toggleClass('hamburger-button-open');
  hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize scroll', function () {
  
  hamburger.removeClass('hamburger-menu-active');
  $('.hamburger-button').removeClass('hamburger-button-open');
});



//フェードイン
$('.fade-in').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('fade-in-show');
    }
  },
  offset: '70%',
});
