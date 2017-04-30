$(function() {

  var $subdirectories = $('#subdirectory-template').html();

  $('.top-level').find('li').append($subdirectories);

  $('.file-tree').on('click', 'li', function(e) {
    $(e.target).children('ul').first().toggle();
    $('.selected').removeClass('selected');
    $(e.target).addClass('selected');
    if ( $(e.target).parent().has('ul').length > 0 ) {
      $(e.target).toggleClass('opened-folder');
    }
    return false;
  });

  $('.subfolder').on('click', 'li', function(e) {
    $(e.target).siblings('ul').first().toggle();
  });


  $('.private').on('click', function() {
    passwordPrompt();
  })
  var passwordPrompt = function() {
    $('.private').on('click', prompt("Please enter your password:"));
  }

})