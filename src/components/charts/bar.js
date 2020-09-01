import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;
    console.log(this.props.data)

    const w = this.props.width;
    const h = this.props.height;

    const svg = d3.select("#Bar1")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);

      svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green")

      svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - (10 * d) - 3)
  }

  render(){
    return <div id ="Bar1"></div>
  }
}

export default BarChart;
