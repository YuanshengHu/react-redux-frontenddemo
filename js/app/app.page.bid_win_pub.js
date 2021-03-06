/**
 * Created by huyuansheng on 2017/3/29.
 */
function page(json) {
    var data_page = json;
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
                ['', data_page.pv],
                ['', 100 - data_page.pv],
                {
                    name: '其他',
                    y: 0.7,
                    dataLabels: {
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
                ['', data_page.wp],
                ['', 100 - data_page.wp],
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
                ['', data_page.hp],
                ['', 100 - data_page.hp],
                {
                    name: '其他',
                    y: 0.7,
                    dataLabels: {
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
                ['', data_page.nr],
                ['', 100 - data_page.nr],
                {
                    name: '其他',
                    y: 0.7,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
}
fetch("../json/bid_win_pub.json").then(response => response.json()).then(json=>page(json));
