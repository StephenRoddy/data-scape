//apexC
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApxChrt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      options: {
        chart: {
          id: "Line-Chart"
        },
        xaxis: {
          categories: this.props.time_labels,
        },
        yaxis:{
          forceNiceScale: false
        }
      },
      series: [
        {
          name: this.props.name,
          data: this.props.data
        }
      ]
    };

  }

/*
  componentDidMount(){
    // Some code to account for the fact that the 'show duplicates' parameter breaks the graph when turned off.
    // We just want to remove any repeated labels from our array
    let i;
    let label_tags = this.props.time_label;
    console.log("Here is the data" + this.props.time_label);

    for(i =0; i< this.props.time_label; i++){
      if (label_tags[i] == label_tags[i+1]){
        label_tags[i+1] = ' ';
      }
    }

    this.setState({
      categories: label_tags
    })
console.log("Here is the data" + this.props.time_label);
}
*/
  render() {


    return (
      <div class="opacity-5 shadow-sm">
        <div class="card-body">
          <h5 classs="card-title">{this.props.name}</h5>
          <h6 class="card-subtitle text-muted">{this.props.time_series}</h6>
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
