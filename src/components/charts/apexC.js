//apexC
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApxChrt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIn: this.props.dataIn,
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday']
        }
      },
      series: [
        {
          name: "series-1",
          data: this.props.dataIn
        }
      ]
    };
  }


  render() {

    console.log(this.state.dataIn);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApxChrt;
