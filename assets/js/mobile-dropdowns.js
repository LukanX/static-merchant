(function( $ ){
  $('.mobile-dropdown-label').on('click', function(e){
    e.stopPropagation();
    $(this).parent().toggleClass('is-open');
  });
})( jQuery );
