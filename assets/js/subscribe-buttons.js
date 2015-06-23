(function( $ ){
  $('.subscribe-store-button').on('click', function(){
    // Set active state immediate for user's perceived speed.
    $(this).toggleClass('is-active');

    // Send out ajax call. Untoggle state if failed.
  });
})( jQuery );
