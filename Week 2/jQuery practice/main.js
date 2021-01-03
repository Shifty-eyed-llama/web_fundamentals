$(document).ready(function(){
    $('#click-me').click(function(){
        alert("You clicked the button!");
    })
    $('#hover').hover(function(){
        $(this).fadeOut();
    })
    $("#class_example h1").click(function(){
        $('#class_example p').addClass("class_example2");
    })
    $('.oh_no').click(function(){
        $('#hover').fadeIn();
    })
    $('#fadeToggle').click(function(){
        $('#sample').fadeToggle();
    })
    $('#append').click(function(){
        $(this).append(' What have you done!?');
    })
    $('#text').click(function(){
        $(this).text('Why would you do that?')
    })
    $('em').click(function(){
        var title = $(this).attr('title');
        $('p').text(title);
    })
    $('button').click(function(){
        var value = $(this).text();
        $('input').val(value);
    })
})