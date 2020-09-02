//ApxHeat
import React, { Component } from "react";
import Chart from "react-apexcharts";



class ApxRadar extends React.Component {
  constructor(props) {
    super(props);

    const dataIn = this.props.data;
    console.log("Here is the series we will use: " + dataIn);
    this.state = {

      series: [{
        name: 'Series 1',
        data: dataIn,
      }],
      options: {
        chart: {
          height: 350,
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
          categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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

  let d = new Date();

    if (d.getDay() == 0){
      this.setState({
        options: {
          xaxis: {
            categories: ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday']
                }
              }
            })
          } else if (d.getDay() == 1){
            this.setState({
              options: {
                  xaxis: {
                      categories: ['Monday','Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday']
                      }
                    }
                  })
                } else if (d.getDay() == 2){
                  this.setState({
                    options: {
                        xaxis: {
                          categories: ['Tuesday','Monday','Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday']
                            }
                          }
                        })
                      } else if (d.getDay() == 3){

                        this.setState({
                        options: {
                            xaxis: {
                              categories: ['Wednesday','Tuesday','Monday','Sunday', 'Saturday', 'Friday', 'Thursday']
                                  }
                                }
                              })
                            } else if (d.getDay() == 4){
                              this.setState({
                                options: {
                                    xaxis: {
                                        categories: ['Thursday','Wednesday','Tuesday','Monday','Sunday', 'Saturday', 'Friday']
                                        }
                                      }
                                    })
                                  } else if (d.getDay() == 5){
                                    this.setState({
                                      options: {
                                          xaxis: {
                                            categories: ['Friday', 'Thursday','Wednesday','Tuesday','Monday','Sunday', 'Saturday']
                                              }
                                            }
                                          })
                                        } else if (d.getDay() == 6){
                                          this.setState({
                                            options: {
                                                xaxis: {
                                                  categories: ['Saturday','Friday', 'Thursday','Wednesday','Tuesday','Monday','Sunday']
                                                    }
                                                  }
                                                })
                                              }
  }

  render() {

    return (
      <div class="opacity-5 shadow">
        <div class="card-body">
          <h5 classs="card-title">{this.props.name}</h5>
          <h6 class="card-subtitle text-muted">Past 7 days</h6>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radar" height={350} />
        </div>
      </div>
    </div>
    );
  }
}

  export default ApxRadar
