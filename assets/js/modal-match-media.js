(function($){

  $('.js-modal-match-media').on('click',function(e){

    if(window.matchMedia('(min-width: 700px)').matches) {
      e.preventDefault();
      e.stopPropagation();

      var target = $(this);
      // Only select and store values if matchMedia matches
      var modal = $('#modal');
      var modalTmpl = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div></div></div>';

      // Request the Offer page.
      $.ajax({
        url: target.attr('href'),
        success: function( response ){

          // Stash the response
          var div = $('<div>').html( response );

          // Fill the response with the Site Main > Container > Children
          var html = $(div).find('#site-main').children().children();

          // Populate the Modal
          modal.html(modalTmpl)
               .find('.modal-body')
               .html(html);

          modal.find('.modal-dialog').css('max-width', target.attr('data-modal-width'));

          // Append and show the Modal
          modal.appendTo('body')
               .modal('show');
        }
      })
    }

  });

})(window.jQuery);
