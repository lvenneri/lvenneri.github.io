$(function() {

$('.wrapper').find('a[href="#"]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.wrapper').find('.small').toggleClass('small big');
});
  $(window).scroll(function() {
      $("#canadaland_w").css("opacity", 0 + $(window).scrollTop()/500);


  });
});
