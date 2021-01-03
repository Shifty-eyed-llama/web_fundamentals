$(document).ready(function(){
    $('#container img').click(function(){
        $(this).fadeOut();
    })
    $('#reset button').click(function(){
        $('#container img').fadeIn();
    })
});