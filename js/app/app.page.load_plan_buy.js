function page(json) {
    var data_page = json;

    var CustomerBuyPredict = React.createClass({
        handleClick: function (item) {
            this.props.dispatch(changCurve(item));
        },
        render: function () {
            return (
                <table id="example" className="display" cellSpacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>用户名</th>
                        <th>分布式光伏</th>
                        <th>小水电</th>
                        <th>分布式风电</th>
                        <th>曲线</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>用户名</th>
                        <th>分布式光伏</th>
                        <th>小水电</th>
                        <th>分布式风电</th>
                        <th>曲线</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    {
                        this.props.tablelist.map((each, index) =>
                                <tr key={index}>
                                    <td>{each.id}</td>
                                    <td>{each.pt}%</td>
                                    <td>{each.hp}%</td>
                                    <td>{each.wp}%</td>
                                    <td>
                                        <button type="button" className="btn btn-success"
                                                onClick={this.handleClick.bind(this,each.id)}>展示
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            );
        }
    })

    function select(state) {
        return {
            item: state.currentCurve
        }
    }

    CustomerBuyPredict = ReactRedux.connect()(CustomerBuyPredict);
    MyHighChart = ReactRedux.connect(select)(MyHighChart);
    function changCurve1(pre, mod) {
        pre.series[0].data = mod;
    }

    var chartOptions = {
        title: {
            text: '全网全天预测负荷量曲线',
            x: -20
        },
        xAxis: {
            categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
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
            data: [304.0012383, 272.2191212, 229.8264655, 224.5144273, 221.2035357, 234.4392191, 215.6022199, 253.6722093, 257.5706724, 281.1235683, 366.7407886, 362.6267218, 246.714386, 174.9255816, 295.220815, 336.6571929, 449.150355, 477.3003489, 437.9178441, 351.5569585, 295.5747874, 585.5270614, 584.5978368, 282.4855321]
        }]
    }
    /*
     this part is the action of the redux
     */
    const CHANGE_CURVE = 'CHANGE_CURVE';

    function changCurve(id) {
        return {type: CHANGE_CURVE, id};
    }

    /*
     this part is the reducer of the redux
     */
    const initialState = {
        currentId: "all",
        currentCurve: data_page.all
    }

    function reduceCurve(state = initialState, action = []) {
        switch (action.type) {
            case CHANGE_CURVE:
                return Object.assign({}, state, {
                    currentId: action.id,
                    currentCurve: data_page.curve[action.id]
                })
            default :
                return state
        }
    }

    let store = Redux.createStore(reduceCurve);
    /*
     this part is the render function of the app
     */

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <CustomerBuyPredict tablelist={data_page.table}/>
        </ReactRedux.Provider>,
        document.getElementById("downchart")
    );
    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <MyHighChart container='LoadForecastCurve' options={chartOptions} change={changCurve1}/>
        </ReactRedux.Provider>,
        document.getElementById('LoadForecastCurve')
    )
    var table = $('#example').DataTable();
}
fetch("../json/load_plan_buy.json").then(response => response.json()).then(json=>page(json));