
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: ""
        },
        
        toolTip: {
            contentFormatter: function (e) {
                var content = "";
                for (var i = 0; i < e.entries.length; i++) {
                    content = CanvasJS.formatDate(e.entries[i].dataPoint.x);
                }
                return content;
            }
        },
        axisY: {
            includeZero: false
        },

        data: [{
            type: "spline",
            lineColor: "orange",
            markerColor: "orange",
            dataPoints: [
                
                { label: "10", y: 40 },
                { label: "20", y: 100 },
                { label: "30", y: 20 },
                { label: "50", y: 60 },
                { label: "60", y: 5 },
                { label: "70", y: 100 },
                { label: "80", y: 20 },
                { label: "90", y: 50 },
                { label: "100", y: 10 }
            ]
        }]
    });

    chart.render();

}
