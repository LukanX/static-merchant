(function( $ ){

  $('.coupon-horizontal-details').on('click', function(){
    $(this).parent().toggleClass('is-open');
  });

  $(document).on('click', '.js-favorite-button', function(e){
    e.stopPropagation;

    // Give the user instant satifaction by immediately setting the state.
    // Untoggle the state and flash message if failed.
    $(this).toggleClass('is-active');
    // AJAX call out goes here.
  });

})( jQuery );
