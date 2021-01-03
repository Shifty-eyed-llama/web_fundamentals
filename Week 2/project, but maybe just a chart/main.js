$(document).ready(function(){
    var today = new Date();//stole this bit of code
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var tm1 = yyyy + mm + (dd-1)//yesterday start and 48hr range
    $.get("https://tidesandcurrents.noaa.gov/api/datagetter?date=today&range=48&station=9447130&product=water_level&datum=MLLW&units=english&time_zone=gmt&application=Tides_and_Currents&format=json", function(rtndata){
        console.log(rtndata)
        var high = Number(rtndata.data[0].v);
        var low = Number(rtndata.data[0].v);
        var timehi = rtndata.data[0].t;
        var timelo = rtndata.data[0].t;

        for(var i = 1; i < rtndata.data.length; i++){

        if(Number(rtndata.data[i].v) > high){
            high = Number(rtndata.data[i].v)
            timehi = rtndata.data[i].t
        }
        if(Number(rtndata.data[i].v) < low){
            low = Number(rtndata.data[i].v)
            timelo = rtndata.data[i].t
        }
    }
    // console.log(high + ' and ' + low)
    // console.log(timehi + ' and ' + timelo)

    function splitTime(time){
        var dateAndTime = time.split(' ')
        return dateAndTime
    }


    $('#date').text(splitTime(timehi)[0])
    $('#timehi').text(splitTime(timehi)[1]);
    $('#feethi').text(high);
    $('#timelo').text(splitTime(timelo)[1]);
    $('#feetlo').text(low);
    $('#stationID').append(rtndata.metadata.id)
    $('#lat').text(rtndata.metadata.lat)
    $('#lon').text(rtndata.metadata.lon)
    })



})