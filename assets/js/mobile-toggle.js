(function($){

  $('.js-mobile-toggle').on('click', function(e){
    e.preventDefault();

    if($(this).hasClass('toggle-menu')) {
      // toggle the Off Canvas menu
      $('body').toggleClass('show-offcanvas');
    } else {
      // Toggle the search
      var target = $(this).attr('href');
      $(target).slideToggle(200);
    }
  });

  $('.has-popup-menu > a').on('click',function(e){
    e.preventDefault();

    $(this).parent().toggleClass('is-open');

  });


})(jQuery);
