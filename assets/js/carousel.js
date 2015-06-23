(function( $ ){

  var carousel = $('.carousel');
  var carouselOverflow = carousel.find('.carousel-overflow');
  var firstSlide = carousel.find('.carousel-slide').first();
  var buttons = carousel.find('button');
  var buttonNext = carousel.find('.carousel-nav-next');

  buttons.on('click', function(){
    var slideWidth = firstSlide.width();
    var goToPx = carouselOverflow.scrollLeft();

    if( $(this).is( buttonNext) ) {
      goToPx += slideWidth;
    } else {
      goToPx -= slideWidth;
    }

    carouselOverflow.animate( { scrollLeft: goToPx }, 200);
  });

  $(window).on('load resize', function(){
    if(carousel.length) {
      if( firstSlide.position().left > 0 ) {
        buttons.hide();
      } else {
        buttons.show();
      }
    }
  });

})(jQuery );
