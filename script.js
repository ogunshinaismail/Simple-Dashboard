window.onload = function () {

    CanvasJS.addColorSet("datatype",
                ["#3751FF", "#C5C7CD"]
            );

    var chart = new CanvasJS.Chart("chartContainer", {
        colorSet: "datatype",
        animationEnabled: true,  
        // title:{
        //     text: "Today's trend"
        // },
        axisY: {
            // title: "Units Sold",
            valueFormatString: "#0",
            // suffix: "mn",
            stripLines: [{
                value: 60.5,
                label: "Average"
            }]
        },
        data: [{
            type: "spline",
            yValueFormatString: "#,###",
            xValueFormatString: "Today",
            dataPoints: [
                {x: 40, y: 30},
                {x: 50, y: 90},
                {x: 80, y: 40},
                {x: 100, y: 78},
                {x: 110, y: 90},
                {x: 121, y: 79},
            ]
        },
        {
            type: "spline",
            yValueFormatString: "#,###",
            xValueFormatString: "Yesterday",
            dataPoints: [
                {x: 46, y: 34},
                {x: 52, y: 98},
                {x: 89, y: 49},
                {x: 107, y: 87},
                {x: 119, y: 99},
                {x: 129, y: 71},
            ]
        },
    ]
    });
    chart.render();
    
    }