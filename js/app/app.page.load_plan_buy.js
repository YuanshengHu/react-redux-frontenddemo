var Header = React.createClass({
    render: function () {
        return (
          <div className="header-div" style={{width: '99%' , height: '200px' , backgroundColor: '#3e8f3e'}}>
              <p>分布式可再生能源 version 1.0</p>
          </div>
        );
    }
});

var LoadForecastCurve = React.createClass({
    render: function () {
        return (
            <div id="LoadForecastCurve" style={{width: '80%' , height: '400px'}}></div>
        );
    }
})

var CustomerBuyPredict = React.createClass({
    render: function () {
        return (
            <table id="example" className="display" cellSpacing="0" width="100%">
                <thead>
                <tr>
                    <th>用户名</th>
                    <th>分布式光伏</th>
                    <th>小水电</th>
                    <th>分布式风电</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>用户名</th>
                    <th>分布式光伏</th>
                    <th>小水电</th>
                    <th>分布式风电</th>
                </tr>
                </tfoot>
                <tbody>
                <tr>
                    <td>LD1</td>
                    <td>15%</td>
                    <td>35%</td>
                    <td>50%</td>
                </tr>
                <tr>
                    <td>LD2</td>
                    <td>5%</td>
                    <td>30%</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>LD3</td>
                    <td>10%</td>
                    <td>20%</td>
                    <td>70%</td>
                </tr>
                <tr>
                    <td>LD4</td>
                    <td>10%</td>
                    <td>20%</td>
                    <td>70%</td>
                </tr>
                <tr>
                    <td>LD5</td>
                    <td>30%</td>
                    <td>25%</td>
                    <td>45%</td>
                </tr>
                </tbody>
            </table>
        );
    }
})

ReactDOM.render(
    <Header/>,
    document.getElementById("header")
);

ReactDOM.render(
    <LoadForecastCurve/>,
    document.getElementById("upchart")
);

ReactDOM.render(
    <CustomerBuyPredict/>,
    document.getElementById("downchart")
);

var chart = new Highcharts.Chart('LoadForecastCurve', {
    title: {
        text: '全网全天预测负荷量曲线',
        x: -20
    },
    xAxis: {
        categories: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
    },
    yAxis: {
        title: {
            text: '千瓦 (KW)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: 'KW'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '总区域负荷',
        data: [304.0012383,272.2191212,229.8264655,224.5144273,221.2035357,234.4392191,215.6022199,253.6722093,257.5706724,281.1235683,366.7407886,362.6267218,246.714386,174.9255816,295.220815,336.6571929,449.150355,477.3003489,437.9178441,351.5569585,295.5747874,585.5270614,584.5978368,282.4855321]
    }]
});

var table = $('#example').DataTable();