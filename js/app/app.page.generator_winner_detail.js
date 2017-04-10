/**
 * Created by huyuansheng on 2017/3/31.
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

$('#area1').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: '24小时运营商报价'
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
            text: '电价 (元／千瓦时)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '人口总量: <b>{point.y:.1f} 百万</b>'
    },
    series: [{
        name: '总人口',
        data: [
            ['0h', 24.25],
            ['1h', 23.50],
            ['2h', 21.51],
            ['3h', 16.78],
            ['4h', 16.06],
            ['5h', 15.20],
            ['6h', 14.16],
            ['7h', 13.51],
            ['8h', 13.08],
            ['9h', 12.44],
            ['10h', 12.19],
            ['11h', 12.03],
            ['12h', 10.46],
            ['13h', 10.07],
            ['14h', 10.05],
            ['15h', 9.99],
            ['16h', 9.78],
            ['17h', 9.73],
            ['18h', 9.27],
            ['19h', 8.87],
            ['20h', 9.78],
            ['21h', 9.73],
            ['22h', 9.27],
            ['23h', 8.87],
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

$('#downchart').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: '24小时运营商中标电量'
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
            text: '电量 (千瓦时)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '人口总量: <b>{point.y:.1f} 百万</b>'
    },
    series: [{
        name: '总人口',
        color: "#FF0000",
        data: [
            ['0h', 24.25],
            ['1h', 23.50],
            ['2h', 21.51],
            ['3h', 16.78],
            ['4h', 16.06],
            ['5h', 15.20],
            ['6h', 14.16],
            ['7h', 13.51],
            ['8h', 13.08],
            ['9h', 12.44],
            ['10h', 12.19],
            ['11h', 12.03],
            ['12h', 10.46],
            ['13h', 10.07],
            ['14h', 10.05],
            ['15h', 9.99],
            ['16h', 9.78],
            ['17h', 9.73],
            ['18h', 9.27],
            ['19h', 8.87],
            ['20h', 9.78],
            ['21h', 9.73],
            ['22h', 9.27],
            ['23h', 8.87],
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
