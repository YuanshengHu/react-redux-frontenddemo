/**
 * Created by huyuansheng on 2017/3/29.
 */
var Header = React.createClass({
    render: function () {
        return (
            <div className="header-div" style={{width: '99%' , height: '200px' , backgroundImage:"url(../images/tu1.jpg)"}}>
                <p>分布式可再生能源 version 1.0</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Header/>,
    document.getElementById("header")
);

$('#chart1').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '光伏',
        align: 'center',
        verticalAlign: 'middle',
        y: 50
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0px 1px 2px black'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: '能源占比',
        innerSize: '50%',
        data: [
            ['',   45.0],
            ['',       55.0],
            {
                name: '其他',
                y: 0.7,
                dataLabels: {
                    // 数据比较少，没有空间显示数据标签，所以将其关闭
                    enabled: false
                }
            }
        ]
    }]
});

$('#chart2').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '风电',
        align: 'center',
        verticalAlign: 'middle',
        y: 50
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0px 1px 2px black'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: '能源占比',
        innerSize: '50%',
        data: [
            ['', 26.8],
            ['', 73.2],
            {
                name: '其他',
                y: 0.7,
                dataLabels: {
                    // 数据比较少，没有空间显示数据标签，所以将其关闭
                    enabled: false
                }
            }
        ]
    }]
});

$('#chart3').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '水电',
        align: 'center',
        verticalAlign: 'middle',
        y: 50
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0px 1px 2px black'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: '能源占比',
        innerSize: '50%',
        data: [
            ['', 12.8],
            ['', 87.3],
            {
                name: '其他',
                y: 0.7,
                dataLabels: {
                    // 数据比较少，没有空间显示数据标签，所以将其关闭
                    enabled: false
                }
            }
        ]
    }]
});

$('#chart4').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '不可<br>再生',
        align: 'center',
        verticalAlign: 'middle',
        y: 50
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0px 1px 2px black'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: '能源占比',
        innerSize: '50%',
        data: [
            ['',    14.7],
            ['',     85.3],
            {
                name: '其他',
                y: 0.7,
                dataLabels: {
                    // 数据比较少，没有空间显示数据标签，所以将其关闭
                    enabled: false
                }
            }
        ]
    }]
});

