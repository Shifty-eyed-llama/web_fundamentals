$(document).ready(function(){
    var today = new Date();//stole this bit of code
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var tm1 = yyyy + mm + (dd-1)//yesterday start and 48hr range
    var tp1 = yyyy + mm + (dd+1)
        console.log(tm1)
    $.get("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=" + tm1 + "&range=48&station=9447130&product=water_level&datum=MLLW&units=english&time_zone=gmt&application=Tides_and_Currents&interval=h&format=json", function(rtndata){
        console.log(rtndata.metadata.lat);
        console.log(rtndata.metadata.lon)
        console.log(rtndata)
        var data = [];
        var dataSeries = {type:"line"};
        var dataPoints = [];
        for(var i = 0; i < rtndata.length; i++){
            var height = rtndata[i].v
            var time = rtndata[i].t
            dataPoints.push({
                x: time,
                y: height
            })

        }
        dataSeries.dataPoints = dataPoints;
        data.push(dataSeries);

        var options = {
            title: "Height from Mean Lower Low Water",
            data: data
        }
        var chart = new CanvasJS.Chart("chartContainer", options);
        var startTime = tm1;
        chart.render();
        

    }, 'json')
})