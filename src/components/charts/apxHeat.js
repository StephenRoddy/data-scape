//ApxHeat
import React, { Component } from "react";
import Chart from "react-apexcharts";



class ApxHeat extends React.Component {
        constructor(props) {
          super(props);

          this.state = {

            series: [{
              name: 'Metric1',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric2',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric3',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric4',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric5',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric6',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric7',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric8',
              data:  this.generateData(18, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric9',
              data: this.generateData(18, {
                min: 0,
                max: 90
              })
            }
            ],
            options: {
              chart: {
                height: 200,
                type: 'heatmap',
              },
              dataLabels: {
                enabled: false
              },
              colors: ["#008FFB"],
            //  title: {
          //      text: 'HeatMap Chart (Single color)'
            //  },
            },


          };
        }

        generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = 'w' + (i + 1).toString();
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

          series.push({
            x: x,
            y: y
          });
          i++;
        }
        return series;
        }

        render() {
          return (
            <div class="opacity-5 shadow">
              <div class="card-body">
                <h5 classs="card-title">{this.props.name}</h5>
                <h6 class="card-subtitle text-muted">2020</h6>
              <div id="chart">
              <Chart options={this.state.options} series={this.state.series} type= "heatmap" height={this.state.height} />
              </div>
            </div>
            </div>
          );
        }
      }

  export default ApxHeat
