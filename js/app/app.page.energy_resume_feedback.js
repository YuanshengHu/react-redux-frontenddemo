/**
 * Created by huyuansheng on 2017/3/31.
 */
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

$(function () {
    $('#left-up-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            height:200,
            plotShadow: false
        },
        title: {
            text: '',
            floating: true
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                },
                showInLegend: true
            }
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'middle',
        },
        series: [{
            type: 'pie',
            name: '实时能源渗透率占比',
            data: [
                ['风电',   40.0],
                ['水电',       20.0],
                ['光伏',    15],
                ['太阳能',     25]
            ]
        }]
    });
});

$('#left-down-chart').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: 200
    },
    title: {
        text: '',
        floating: true
    },
    tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f} %</b>',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }

            },
            showInLegend: true
        }
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
    },
    series: [{
        type: 'pie',
        innerSize: '50%',
        name: '市场份额',
        data: [
            ['风电',   40.0],
            ['水电',       20.0],
            ['光伏',    15],
            ['太阳能',     25]
        ]
    }]
})

$('#right-up-chart21').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: '',
        floating: true
    },
    xAxis: {
        categories: [''],
        visible: false
    },
    yAxis: {
        min: 0,
        title: {
            enabled:false
        },
        endOnTick:false,
        visible: false
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总量: ' + this.point.stackTotal;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{series.name}</b>'+'{point.percentage:.0f} %</b>',
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    textShadow: '0 0 3px black'
                }
            },
            showInLegend: false
        }
    },
    series: [{
        name: '风电',
        data: [5]
    }, {
        name: '水电',
        data: [2]
    }, {
        name: '光伏',
        data: [3]
    }]
});

$('#right-up-chart22').highcharts({
    chart: {
        type: 'column'
    },
    colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
        '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
    title: {
        text: '',
        floating: true
    },
    xAxis: {
        categories: [''],
        visible: false
    },
    yAxis: {
        min: 0,
        title: {
            enabled:false
        },
        endOnTick:false,
        visible: false
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总量: ' + this.point.stackTotal;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{series.name}</b>'+'{point.percentage:.0f} %</b>',
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    textShadow: '0 0 3px black'
                }
            },
            showInLegend: false
        }
    },
    series: [{
        name: '可再生能源',
        data: [7]
    }, {
        name: '不可再生能源',
        data: [4]
    }]
});


$('#right-down-chart21').highcharts({
    chart: {
        type: 'column'
    },
    colors: ['#3D96AE',
        '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
    title: {
        text: '',
        floating: true
    },
    xAxis: {
        categories: [''],
        visible: false
    },
    yAxis: {
        min: 0,
        title: {
            enabled:false
        },
        endOnTick:false,
        visible: false
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总量: ' + this.point.stackTotal;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{series.name}</b>'+'{point.percentage:.0f} %</b>',
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    textShadow: '0 0 3px black'
                }
            },
            showInLegend: false
        }
    },
    series: [{
        name: '风电',
        data: [3]
    }, {
        name: '水电',
        data: [6]
    }, {
        name: '光伏',
        data: [2]
    }]
});

$('#right-down-chart22').highcharts({
    chart: {
        type: 'column'
    },
    colors: ['#89A54E', '#80699B', '#3D96AE',
        '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
    title: {
        text: '',
        floating: true
    },
    xAxis: {
        categories: [''],
        visible: false
    },
    yAxis: {
        min: 0,
        title: {
            enabled:false
        },
        endOnTick:false,
        visible: false
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总量: ' + this.point.stackTotal;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{series.name}</b>'+'{point.percentage:.0f} %</b>',
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    textShadow: '0 0 3px black'
                }
            },
            showInLegend: false
        }
    },
    series: [{
        name: '可再生能源',
        data: [5]
    }, {
        name: '不可再生能源',
        data: [4]
    }]
});