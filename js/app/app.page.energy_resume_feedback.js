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

var data_page = {
    "real_time": {"fd":40,"sd":20,"gf":25,"bk":15},
    "energy_str": {"fd":40,"sd":20,"gf":25,"bk":15},
    "cumulative_effi":{"fd":5,"sd":2,"gf":3,"bk":7,"k":6,"data1":24,"data2":24,"data3":24},
    "pre_effi":{"fd":5,"sd":2,"gf":3,"bk":7,"k":7,"data1":23,"data2":23,"data3":23}
};

var left_up_chart = {
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
            ['不可再生',     25]
        ]
    }]
};
function changeFunction1(pre,mod){
    pre.series[0].data= [
            ['风电',   mod.fd],
            ['水电',   mod.sd],
            ['光伏',   mod.gf],
            ['不可再生',  mod.bk]
        ]
}

var left_down_chart = {
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
            ['不可再生',     25]
        ]
    }]
};
function changeFunction2(pre,mod){
    pre.series[0].data= [
        ['风电',   mod.fd],
        ['水电',   mod.sd],
        ['光伏',   mod.gf],
        ['不可再生',  mod.bk]
    ]
}

var right_up_chart21 = {
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
};
function changeFunction3(pre,mod){
    pre.series = [{
        name: '风电',
        data: [mod.fd]
    }, {
        name: '水电',
        data: [mod.sd]
    }, {
        name: '光伏',
        data: [mod.gf]
    }]
}

var right_up_chart22 = {
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
};
function changeFunction4(pre,mod){
    pre.series = [{
        name: '可再生能源',
        data: [mod.k]
    }, {
        name: '不可再生能源',
        data: [mod.bk]
    }]
}

var right_down_chart21 = {
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
};
function changeFunction5(pre,mod){
    pre.series = [{
        name: '风电',
        data: [mod.fd]
    }, {
        name: '水电',
        data: [mod.sd]
    }, {
        name: '光伏',
        data: [mod.gf]
    }]
}

var right_down_chart22 = {
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
};
function changeFunction6(pre,mod){
    pre.series = [{
        name: '可再生能源',
        data: [mod.k]
    }, {
        name: '不可再生能源',
        data: [mod.bk]
    }]
}
/**
 * begin the redux connect
 */

const initialState = data_page;
const CHANGE_STORE = "CHANGE_STORE";
function fetcher(state = initialState, action = []) {
    switch (action.type) {
        case CHANGE_STORE:
            return Object.assign({},state,action.json)
        default :
            return state
    }
};
var ReduxThunk = window.ReduxThunk.default;
let store = Redux.createStore(
    fetcher,
    Redux.applyMiddleware(ReduxThunk)
);
function changestore(json){
    return {type:CHANGE_STORE,json};
}
function fetchGet(){
    return function(dispatch){
        return fetch("../json/feedback.json")
        .then(response => response.json())
        .then(json=>
            dispatch(changestore(json))
        )
    }
}
function select1(state){
    return {
        item:state.real_time
    }
}
function select2(state){
    return {
        item:state.energy_str
    }
}
function select3(state){
    return {
        item:state.cumulative_effi
    }
}
function select4(state){
    return {
        item:state.pre_effi
    }
}
TimeClicker = ReactRedux.connect()(TimeClicker);
var MyHighChart1 = MyHighChart;
var MyHighChart2 = MyHighChart;
var MyHighChart3 = MyHighChart;
var MyHighChart4 = MyHighChart;
var MyHighChart5 = MyHighChart;
var MyHighChart6 = MyHighChart;
MyHighChart1 = ReactRedux.connect(select1)(MyHighChart1);
MyHighChart2 = ReactRedux.connect(select2)(MyHighChart2);
MyHighChart3 = ReactRedux.connect(select3)(MyHighChart3);
MyHighChart4 = ReactRedux.connect(select3)(MyHighChart4);
MyHighChart5 = ReactRedux.connect(select4)(MyHighChart5);
MyHighChart6 = ReactRedux.connect(select4)(MyHighChart6);

/**
 * begin the render
 */
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyHighChart1 container= 'left-up-chart' options= {left_up_chart} change={changeFunction1}/>
    </ReactRedux.Provider>,
    document.getElementById('left-up-chart')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyHighChart2 container= 'left-down-chart' options= {left_down_chart} change={changeFunction2}/>
    </ReactRedux.Provider>,
    document.getElementById('left-down-chart')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyHighChart3 container= 'right-up-chart21' options= {right_up_chart21} change={changeFunction3}/>
    </ReactRedux.Provider>,
    document.getElementById('right-up-chart21')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyHighChart4 container= 'right-up-chart22' options= {right_up_chart22} change={changeFunction4}/>
    </ReactRedux.Provider>,
    document.getElementById('right-up-chart22')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyHighChart5 container= 'right-down-chart21' options= {right_down_chart21} change={changeFunction5}/>
    </ReactRedux.Provider>,
    document.getElementById('right-down-chart21')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyHighChart6 container= 'right-down-chart22' options= {right_down_chart22} change={changeFunction6}/>
    </ReactRedux.Provider>,
    document.getElementById('right-down-chart22')
)
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <TimeClicker/>
    </ReactRedux.Provider>,
    document.getElementById('time-clicker')
)