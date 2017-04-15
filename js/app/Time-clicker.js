/**
 * Created by huyuansheng on 2017/4/15.
 */
var TimeClicker = React.createClass({
    getInitialState: function(){return{remaining:300};},
    render:function() {
        return (
            <div style={{height:'100%'}}>
                <span style={{fontSize: 'small'}}>刷新剩余时间</span><span style={{fontSize: 'xx-large'}} id="remaining">{this.showTime()}</span><span style={{fontSize: 'small'}}>秒</span>
                <button style={{height: '95%',fontSize: 'large'}} onClick={this.handleClick.bind(this)}>点击刷新</button>
            </div>
        )
    },
    componentDidMount: function() {
        this.props.dispatch(fetchGet());
        setTimeout(this.clickTime,1000);
    },
    clickTime:function() {
        setTimeout(this.clickTime,1000);
        if(this.state.remaining != 0)this.setState({remaining:this.state.remaining-1});
        else {
            this.props.dispatch(fetchGet());
            this.setState({remaining:300});
        }
    },
    showTime:function() {
        var remain = this.state.remaining;
        return(
            (parseInt(remain/60))+":"+(remain%60)
        )
    },
    handleClick:function() {
        this.props.dispatch(fetchGet());
        this.setState({remaining:300});
    }
});