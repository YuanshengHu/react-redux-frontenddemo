var data_page = {
    "user":
        [
            {"id":"用户10001"},
            {"id":"用户10002"},
            {"id":"用户10003"},
        ],
    "userdetail":
    {
        "用户10001":{"sum":"100","php":0.3,"ppv":0.3,"pwp":0.3,"ahp":0.3,"apv":0.3,"awp":0.3,"x1":53,"x2":59,"x3":30,"x4":44},
        "用户10002":{"sum":"101","php":0.3,"ppv":0.1,"pwp":0.3,"ahp":0.3,"apv":0.1,"awp":0.3,"x1":30,"x2":59,"x3":30,"x4":44},
        "用户10003":{"sum":"102","php":0.4,"ppv":0.3,"pwp":0.3,"ahp":0.4,"apv":0.2,"awp":0.3,"x1":53,"x2":59,"x3":30,"x4":20}
    }
}

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
function changeFunction1(pre,mod){
    pre.series = [{
        name: '风电',
        data: [mod.pwp, mod.awp]
    }, {
        name: '光伏',
        data: [mod.ppv, mod.apv]
    }, {
        name: '水电',
        data: [mod.php, mod.ahp]
    }, {
        name: '不可再生',
        data: [1-mod.pwp-mod.ppv-mod.php+0.00001, 1-mod.awp-mod.apv-mod.ahp+0.00001]
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
function changeFunction2(pre,mod){
    pre.series[0].data= [
        ['水电', mod.x1],
        ['光伏', mod.x2],
        ['不可再生', mod.x3],
        ['风电', mod.x4]
    ]
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
        this.props.dispatch(changeUser(event.target.innerHTML));
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

class UserPanel extends React.Component {
    render() {
        return (
            <div>
                <p>当前用户</p>
                <p style={{fontSize: "xx-large"}}>{this.props.currentId}</p>
                <p>用户总负荷量</p>
                <p style={{fontSize: "xx-large"}}>{this.props.currentInformation.sum}</p>
            </div>
        )
    }
}

function select(state){
    return {
        currentId:state.currentId,
        currentInformation:state.currentInformation
    }
}
function select2(state){
    return {
        item:state.currentInformation
    }
}
Userlist = ReactRedux.connect()(Userlist);
UserPanel = ReactRedux.connect(select)(UserPanel);
MyHighChart = ReactRedux.connect(select2)(MyHighChart);
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
ReactDOM.render(
    <ReactRedux.Provider store={store}>
    <Userlist data_detail={data_page}/>
    </ReactRedux.Provider>,
    document.getElementById('tablediv')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
    <UserPanel/>
    </ReactRedux.Provider>,
    document.getElementById("paneldiv")
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
    <MyHighChart container= 'right-chart1' options= {options1} change={changeFunction1}/>
    </ReactRedux.Provider>,
    document.getElementById('right-chart1')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyHighChart container= 'right-chart2' options= {options2} change={changeFunction2}/>
    </ReactRedux.Provider>,
    document.getElementById('right-chart2')
)