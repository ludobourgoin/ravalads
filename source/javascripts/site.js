// This is where it all goes :)

$(document).ready(function($) {

  $('.tab-container').hide();
  $('.tab-container:first').show();
  $('#tab1').addClass('active');

  $('.tab_content').click(function(event) {
    $('.tab_content').removeClass('active');
    $(this).addClass('active');
    $('.tab_container').hide();

  });
});
