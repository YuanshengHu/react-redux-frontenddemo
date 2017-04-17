/**
 * Created by huyuansheng on 2017/3/31.
 */
var App = React.createClass({
    getInitialState: function() {
        return {
            option1:{
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
            },
            option2:{
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
            },
        }
    },
    componentWillMount: function() {
        fetch("../json/detail."+this.props.match.params.id+".json")
            .then(response => response.json())
            .then(json => {
                this.setState({option1:(Object.assign({},this.state.option1,{series: [{
                    name: '总人口',
                    data: json.price_propose,
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
                }]}))});
                this.setState({option2:(Object.assign({},this.state.option2,{series: [{
                    color: "#FF0000",
                    name: '总人口',
                    data: json.win_power,
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
                }]}))});
            })
    },
    render: function() {
        return (
        <div>
            <div id="upchart">
                <div style={{height: '400px', width: '55%', float: 'left'}} id="area1">
                    <MyHighChart container= 'area1' options= {this.state.option1}/>
                </div>
                <div style={{height: '400px', width: '45%', float: 'right'}} id="area2">
                    <div style={{margin: '0 auto', width: '15%',paddingTop: '10%'}}><p style={{fontSize: 'x-large', color: '#1b6d85'}}>运营商</p></div>
                    <div style={{textAlign: 'center'}}><p style={{fontSize: 'x-large', color: "#761c19"}}>2361975610</p></div>
                    <div className="panel panel-default" style={{margin: '0 auto', width:'35%', height: "30%"}}>
                        <div className="panel-body" style={{textAlign: "center"}}>
                            大唐火电集团<br/>能源类型：风电<br/>装机总容量：234千瓦
                        </div>
                    </div>
                </div>
            </div>
            <div id="downchart" style={{height: '400px',clear: "left"}}>
                <MyHighChart container= 'downchart' options= {this.state.option2}/>
            </div>
        </div>
        )
    },
});
/**
 * react-router
 */
var HashRouter = ReactRouterDOM.HashRouter;
var Route = ReactRouterDOM.Route;
const router = () => (
    <HashRouter>
        <div>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">分布式能源综合系统导航</a>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li><a href="./load_plan_buy.html">公布负荷认购信息</a></li>
                            <li><a href="./bid_win_pub.html">中标电量公示</a></li>
                            <li><a href="./energy_resume_feedback.html">能源消耗反馈</a></li>
                            <li><a href="./buy_and_pay.html">认购缴清信息</a></li>
                            <li><a href="./manage.html">主动送电管理</a></li>
                            <li><a href="./about.html">关于使用</a></li>
                        </ul>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> 胡元晟</a></li>
                        <li><a href="./login.html"><span className="glyphicon glyphicon-log-in"></span> 登出</a></li>
                    </ul>
                </div>
            </nav>
            <div id="header">
                <div className="header-div" style={{width: '99%' , height: '200px' , backgroundImage:"url(../images/tu1.jpg)",textAlign:'center',lineHeight: '200px'}}>
                    <p style={{fontSize:'xx-large',color:'#FFFFFF'}}>分布式可再生能源 version 1.0</p>
                </div>
            </div>
            <Route path="/:id" component={App}/>
            <hr/>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="copyright">Copyright &copy; 2017 上海交通大学电气工程系</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </HashRouter>
)
ReactDOM.render(router(),document.body);
