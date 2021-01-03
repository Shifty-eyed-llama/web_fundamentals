$(document).ready(function(){
    var today = new Date();//stole this bit of code
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var tm1 = yyyy + mm + (dd-1)//yesterday start and 48hr range
    var points = []
   
    $.get("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=" + tm1 + "&range=48&station=9447130&product=water_level&datum=MLLW&units=english&time_zone=gmt&application=Tides_and_Currents&interval=h&format=json", function(rtndata){

        console.log(rtndata)
        for(var i = 0; i < rtndata.data.length; i++){
            
            var height = rtndata.data[i].v
            var time = rtndata.data[i].t
            points.push({
                x: time,
                y: height
            })
        }
    })
    // console.log(dataPoints)


var options =  {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Tide from MLLW"
	},
	axisX: {
		valueFormatString: "dd",
	},
	axisY: {
		title: "Height",
		titleFontSize: 24,
		includeZero: true
	},
	data: {
		type: "spline", 
		yValueFormatString: "Height",
		dataPoints: points
	}
};
console.log(options.data.dataPoints)

    // })
	$("#chartContainer").CanvasJSChart(options);


$.getJSON("https://canvasjs.com/data/gallery/jquery/daily-sales-data.json", points);

})
