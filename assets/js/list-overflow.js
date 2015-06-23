(function(){
  $('.list-overflow a.show-all').on('click', function(e){
    e.preventDefault();
    $(this).prev().toggleClass('show-all');

    if(!this.getAttribute('data-text')) {
      this.setAttribute('data-text', this.textContent);
      this.textContent =  'Show Less';
    } else {
      this.textContent = this.getAttribute('data-text');
      this.setAttribute('data-text', '');
    }
  });
})();
