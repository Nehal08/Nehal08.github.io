import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
    type: 'Pie2D',
    width: 950,
    height: 550,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Coronavirus Cases",
            "plottooltext": "<b>$percentValue</b> of Coronavirus Cases are $label",
            "showPercentValues": "1",
            "useDataPlotColorForLabels": "1",
            "enableMultiSlicing": "0",
            "theme": "fusion"
        },
        "data": [{
            "label": "Recovered",
            "value": "32512727"
        }, {
            "label": "Deaths",
            "value": "1173848"
        }, {
            "label": "in Mild Condition",
            "value": "10594705"
        }, {
            "label": "Serious or Critical",
            "value": "80400"
        }]
    }
};

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chart: {},
            currentVal: 'none'
        }
        this.renderComplete = this.renderComplete.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.sliceClicked = this.sliceClicked.bind(this);
    }

    renderComplete(chart) {
        this.setState({
            chart
        });
    }

    // Handler for radio buttons to slice data plot.
    radioHandler(e) {
        if (e.currentTarget.value === 'none') {
            this.state.chart.options.dataSource.data.map((data, index) => {
                this.state.chart.slicePlotItem(index, false);
            });
        } else {
            this.state.chart.slicePlotItem(e.currentTarget.value, true);
        }
        this.setState({
            currentVal: e.currentTarget.value
        });
    }

    // Event callback for 'dataplotClick'.
    // Makes the relevant radio active when a plot is clicked.
    sliceClicked(eventObj, dataObj) {
        this.setState({
            currentVal: eventObj.data.isSliced ? 'none' : eventObj.data.dataIndex
        });
    }

    render() {
        return (
            <div>
              <center>
                <ReactFC
                {...chartConfigs}
                onRender={this.renderComplete}
                fcEvent-dataplotClick={this.sliceClicked}
                />
                <br />
              </center>
            </div>
        )
    }
}

export default Chart;