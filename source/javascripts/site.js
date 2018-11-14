$(document).ready(function(){

    $('.tab-btn').click(function(e) {
        e.preventDefault();
        $('.info').hide();
        $('.info').eq($(this).index()).show();
        $('.tab-btn').removeClass('current');
        $(this).addClass('current');

    });
});
