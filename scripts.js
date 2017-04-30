$(function() {

  var $subdirectories = $('#subdirectory-template').html();

  $('.top-level').find('li').append($subdirectories);

  $('.top-level').on('click', 'li', function(e) {
    $(e.target).children('ul').first().toggle();
  });

  $('.subfolder').on('click', 'li', function(e) {
    $(e.target).siblings('ul').first().toggle();
  });



})