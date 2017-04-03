var Header = React.createClass({
    render: function () {
        return (
            <div className="header-div" style={{width: '99%' , height: '200px' , backgroundColor: '#3e8f3e'}}>
                <p>分布式可再生能源 version 1.0</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Header/>,
    document.getElementById("header")
);

$('#right-chart1').highcharts({
    chart: {
        type: 'bar'
    },
    title: {
        text: '',
        floating: true
    },
    xAxis: {
        categories: ['预期认购能源比例', '实际使用能源比例']
    },
    yAxis: {
        min: 0,
        title: {
            text: '千瓦百分比'
        }
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f} %</b>',
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    textShadow: '0 0 3px black'
                }
            }
        }
    },
    series: [{
        name: '风电',
        data: [0.3, 0.2]
    }, {
        name: '光伏',
        data: [0.2, 0.1]
    }, {
        name: '水电',
        data: [0.1, 0.4]
    }, {
        name: '不可再生',
        data: [0.4, 0.3]
    }]
});

$('#right-chart2').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: '能源最终结算负荷'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '电量 (千瓦)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '电量: <b>{point.y:.1f} 千瓦</b>'
    },
    series: [{
        name: '总人口',
        data: [
            ['水电', 62],
            ['光伏', 55],
            ['不可再生', 35],
            ['风电', 61]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});