var MyHighChart = React.createClass({
    componentDidMount: function () {
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            this.props.options
        );
    },
    componentWillUnmount: function () {
        this.chart.destroy();
    },
    render: function () {
        return React.createElement('div', { id: this.props.container });
    }
});