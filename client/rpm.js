var lastRpm = function(){
    return lastReading() ? parseInt(lastReading().readings.ENGINE_RPM) / 1000 : 0;
}

Template.rpm.helpers({
    lastRpm: function () {
        var chart = $('#rpmChart').highcharts();
        var data = 0;
        if(chart) {
            var point = chart.series[0].points[0];
            if(point) {
                data = lastRpm();
                point.update(data);
            }
        }
        return lastReading();
    }
});

Template.rpm.rendered = function () {
    $('#rpmChart').highcharts({
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: 'RPM'
        },

        pane: {
            startAngle: -150,
            endAngle: 100,
            background: [{
                backgroundColor: {
                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 8,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 50,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 14,
            tickColor: '#666',
            labels: {
                step: 1,
                rotation: 'auto'
            },
            title: {
                text: 'x1000'
            },
            plotBands: [{
                from: 0,
                to: 6,
                color: 'white'
            }, {
                from: 6,
                to: 8,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'RPM',
            data: [lastRpm()],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
}