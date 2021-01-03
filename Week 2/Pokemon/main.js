$(document).ready(function(){

    $.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=152", function(data){
        for(var i = 0; i <= 150; i++){
            // console.log(data.results[i].name)
            // console.log(data.results[i].url)
            $.get(data.results[i].url, function(pokeData){
                //console.log(pokeData)
                $('#container').append('<img class= "pokeImg" src="' + pokeData.sprites.front_default + '" data-alt-src="'+ pokeData.species.url + '" alt="'+pokeData.id + '"/>')
                //console.log(pokeData)
            })
        }
    
    }, 'json')

    $('#container').attr('id')

    $(document).on('click', '.pokeImg', function(){
        // var imgSrc = $(this).attr('data-alt-src')
        // console.log(imgSrc)
        var id = $(this).attr('alt')
        //console.log(id)
        $.get("https://pokeapi.co/api/v2/pokemon/" + id, function(rtn){
            console.log(rtn)
            $('#height').text('Height: ' + rtn.height + ' ft');
            $('#name').text(rtn.species.name);
            $('#weight').text('Weight: ' + rtn.weight + ' lbs');
            $('#num').text('ID# ' + id)
            var types = "";
            for(var j = 0; j < rtn.types.length;j++){
                types += "<li>" + rtn.types[j].type.name + "</li>";
            }
            $('#types').html(types)
            $('#sideBar img').attr('src', rtn.sprites.front_default)

        }, 'json')
    })

});