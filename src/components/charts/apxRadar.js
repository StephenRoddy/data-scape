//ApxHeat
import React, { Component } from "react";
import Chart from "react-apexcharts";



class ApxRadar extends React.Component {
  constructor(props) {
    super(props);

    const data = this.props.data;

    this.state = {

      series: [{
        name: 'Series 1',
        data: data,
      }],
      options: {
        chart: {
        //  height: 350,
          type: 'radar',
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },

        colors: ['#FF4560'],
        markers: {
          size: 4,
          colors: ['#fff'],
          strokeColor: '#FF4560',
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val
            }
          }
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val
              } else {
                return ''
              }
            }
          }
        }
      },


    };
  }

  componentDidMount(){
    // When the component mounts make sure that the days of the week reflect the days in teh array

    let dateData  = [];
    let daySeries = [];
    let dateIn = this.props.date;

    let j;

    let dtObj;
    let dtDay;
    let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];

    for(j=0; j<= dateIn.length-1; j++){
      dtObj = new Date(dateIn[j]);
      dtDay = dtObj.getDay();
      dateData[j] = dtDay;
      daySeries[j] = weekDays[dateData[j]];
    }
    console.log(daySeries);

    this.setState({
      options: {
        xaxis: {
          categories: daySeries
              }
            }
          })
  }

  render() {

    return (
      <div class="opacity-5 shadow">
        <div class="card-body">
          <h5 classs="card-title">{this.props.name}</h5>
          <h6 class="card-subtitle text-muted">{this.props.time_series}</h6>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radar" height={350} />
        </div>
      </div>
    </div>
    );
  }
}

  export default ApxRadar
