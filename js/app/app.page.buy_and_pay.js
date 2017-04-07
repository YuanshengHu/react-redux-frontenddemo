var data_page = {
    "user":
        [
            {"id":"用户10001"},
            {"id":"用户10002"},
            {"id":"用户10003"},
            {"id":"用户10004"},
            {"id":"用户10005"},
            {"id":"用户10006"},
            {"id":"用户10007"},
            {"id":"用户10008"},
            {"id":"用户10009"},
            {"id":"用户10010"},
            {"id":"用户10011"},
            {"id":"用户10012"},
            {"id":"用户10013"},
            {"id":"用户10014"},
            {"id":"用户10015"},
            {"id":"用户10016"},
            {"id":"用户10017"},
            {"id":"用户10018"},
            {"id":"用户10019"},
            {"id":"用户10020"},
            {"id":"用户10021"},
            {"id":"用户10022"},
            {"id":"用户10023"},
            {"id":"用户10024"},
        ],
    "userdetail":
    {
        "用户10001":{"sum":"100","php":0.3,"ppv":0.3,"pwp":0.3,"ahp":0.3,"apv":0.3,"awp":0.3},
        "用户10002":{"sum":"100","php":0.3,"ppv":0.3,"pwp":0.3,"ahp":0.3,"apv":0.3,"awp":0.3},
        "用户10003":{"sum":"100","php":0.3,"ppv":0.3,"pwp":0.3,"ahp":0.3,"apv":0.3,"awp":0.3}
    }
}

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
/*
    this part is the components of the app
 */
var Userlist = React.createClass({
    getInitialState: function() {
        return {
            item:"用户10001"
        };
    },
    handleItemClicked: function(event) {
        this.setState({item:event.target.innerHTML});
    },
    render: function() {
        return (
            <table style={{width: '100%', border:"1px solid #444"}} className = 'mytable'>
                <tbody>
                {
                    this.props.data_detail.user.map((each,index) =>
                        <tr
                            key={index}
                            style={(each.id===this.state.item)?{backgroundColor: '#d43f3a',cursor:"default"}:{cursor:"default"}}
                            onClick={this.handleItemClicked}
                            ><td>{each.id}</td></tr>)
                }
                </tbody>
            </table>
        )
    }
})

var UserPanel = React.createClass({
    render: function() {
        return (
            <div>
                <p>当前用户</p>
                <p style={{fontSize: "xx-large"}}>用户10002</p>
                <p>用户总负荷量</p>
                <p style={{fontSize: "xx-large"}}>100kw</p>
            </div>
        )
    }
})
/*
    this part is the action of the redux
 */
const CHANGE_USER = 'CHANGE_USER';
function changeUser(id) {
    return {type:CHANGE_USER, id};
}
/*
    this part is the reducer of the redux
 */
const initialState = {
    currentId:"用户10001",
    currentInformation:data_page.userdetail["用户10001"]

}
function userId(state = initialState, action = []) {
    switch (action.type) {
        case CHANGE_USER:
            return Object.assign({},state,{
                currentId:action.id,
                currentInformation:data_page.userdetail[action.id]
            })
        default :
            return state
    }
}
let store = Redux.createStore(userId);
/*
    this part is the render function of the app
 */
ReactDOM.render(React.createElement(MyHighChart, {container: 'right-chart1', options: options1 }), document.getElementById('right-chart1'));
ReactDOM.render(React.createElement(MyHighChart, {container: 'right-chart2', options: options2 }), document.getElementById('right-chart2'));
ReactDOM.render(
    <ReactRedux.Provider store={store}>
    <Userlist data_detail={data_page}/>
    </ReactRedux.Provider>,
    document.getElementById('tablediv')
)
ReactDOM.render(
    <UserPanel/>,
    document.getElementById("paneldiv")
)