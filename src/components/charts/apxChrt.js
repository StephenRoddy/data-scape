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
          id: "Line-Chart"
        },
        xaxis: {
          categories: this.props.date_series

        },
        yaxis:{
          forceNiceScale: true
        }
      },
      series: [
        {
          name: this.props.name,
          data: this.props.dataIn
        }
      ]
    };
  }


  render() {

  //  console.log(this.state.dataIn);

    return (
      <div class="opacity-5 shadow-sm">
        <div class="card-body">
          <h5 classs="card-title">{this.props.name}</h5>
          <h6 class="card-subtitle text-muted">Past 7 Days</h6>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApxChrt;
