$(document).ready(function(){
    $('#cat img').hover(function(){
        var temp = $(this).attr('src');
        $(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('data-alt-src', temp)
    })
})