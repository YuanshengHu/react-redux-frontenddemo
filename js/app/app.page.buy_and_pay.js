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

var options1 = {
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
}
var options2 = {
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
}

ReactDOM.render(React.createElement(MyHighChart, {container: 'right-chart1', options: options1 }), document.getElementById('right-chart1'));
ReactDOM.render(React.createElement(MyHighChart, {container: 'right-chart2', options: options2 }), document.getElementById('right-chart2'));
var Userlist = React.createClass({
    handleItemClicked: function(event) {
        //var tableRowNode = event.target;
        //console.log(tableRowNode.innerHTML);
        //var tableDataNode = tableRowNode.getElementsByTagName("td");
        //var id = tableDataNode.innerHTML;
        console.log(event.target.innerHTML);
    },
    render: function() {
        return (
            <table style={{width: '100%', border:"1px solid #444"}} className = 'mytable'>
                <tbody>
                <tr><td>用户10001</td></tr>
                <tr style={{backgroundColor: '#d43f3a'}} onClick={this.handleItemClicked}><td>用户10002</td></tr>
                <tr style={{backgroundColor: '#d43f3a'}} onClick={this.handleItemClicked}><td>用户10003</td></tr>
                <tr><td>用户10004</td></tr>
                <tr><td>用户10005</td></tr>
                <tr><td>用户10006</td></tr>
                <tr><td>用户10007</td></tr>
                <tr><td>用户10008</td></tr>
                <tr><td>用户10009</td></tr>
                <tr><td>用户10010</td></tr>
                <tr><td>用户10011</td></tr>
                <tr><td>用户10012</td></tr>
                <tr><td>用户10013</td></tr>
                <tr><td>用户10014</td></tr>
                <tr><td>用户10015</td></tr>
                <tr><td>用户10016</td></tr>
                <tr><td>用户10017</td></tr>
                <tr><td>用户10018</td></tr>
                <tr><td>用户10019</td></tr>
                <tr><td>用户10020</td></tr>
                <tr><td>用户10021</td></tr>
                <tr><td>用户10022</td></tr>
                </tbody>
            </table>
        )
    }
})
ReactDOM.render(
    <Userlist/>,
    document.getElementById('tablediv')
)
