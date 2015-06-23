// DO NOT USE. There's already a module in production.

(function($){
  $('.popular-title:has(.js-status)').on('click', function(){

    $(this).children('.js-status').toggleClass('is-closed');
    $(this).parents('.js-popular').children('.js-popular-content').toggleClass('is-closed');

  });

  $('.js-showmoreless').on('click', function(){

    $(this).parents('.js-popular').children('.js-popular-other-content').toggleClass('is-closed');

  });
})( jQuery );
