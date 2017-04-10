var MyHighChart = React.createClass({
    componentDidMount: function () {
        var changedOptions = this.props.options;
        this.props.change(changedOptions,this.props.item);
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            changedOptions
        );
    },
    componentWillUnmount: function () {
        this.chart.destroy();
    },
    render: function () {
        var changedOptions = this.props.options;
        this.props.change(changedOptions,this.props.item);
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            changedOptions
        );
        return React.createElement('div', { id: this.props.container });
    }
});