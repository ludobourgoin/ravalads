// Based on Codepen below :
// https://codepen.io/vosidiy/pen/JXVMBY

$(document).ready(function(){

    $('.tab-btn').click(function(e) {
        e.preventDefault();
        $('.info').hide();
        $('.info').eq($(this).index()).show();
        $('.tab-btn').removeClass('current');
        $(this).addClass('current');

    });
});
