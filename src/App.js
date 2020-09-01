/* //Original Imports
import React from 'react';
import logo from './logo.svg';
import './App.css';
*/

// Import React
import React, { Component } from 'react';
import { render } from 'react-dom';

// Import d3
/*
import * as d3 from "d3";
import { scaleLinear, scaleBand } from 'd3-scale';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
*/

// Import Tone
import * as Tone from 'tone';

// Import Components
//import XYAxis from './components/axis/xy-axis.js';
//import Line from './components/line/line.js';
import Navbar from './components/navBar.js';
import PlaySound from './components/playSound.js';

// Data Imports
import TodayDeaths from './components/todayDeaths.js';
import TodayCases from './components/todayCases.js';

// d3 Chart Imports
import BarChart from './components/charts/bar.js';
import ApxChrt from './components/charts/apexC.js';

// Import Audio  to play
import AudioPlay from './scripts/audioPlay.js';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Impiort Css and Images
import logo from './logo.svg';
import './App.css';

//Time = Date.now() //epoch

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      width: 0,
      height: 0,
      data: [],
      total_deaths:0,
      total_cases:0,
      today_deaths:0,
      today_cases:0,
    }
  }

  componentDidMount(){

    // Get COVID-19 Total Deaths, Total Confirmed Cases and Dates
  fetch('https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=TotalConfirmedCovidCases,TotalCovidDeaths,HospitalisedAged25to34,Date&outSR=4326&f=json') // use a header for the api keey value pair
    .then(res => res.json())
    .then(
      (result) => {
//Process data on result
        let tot_d = [];
        let tot_c = [];

        let i;
        for (i=0; i < 7;i++){
          tot_d[i] = result.features[result.features.length-(1+i)].attributes.TotalCovidDeaths;
          tot_c[i]  = result.features[result.features.length-(1+i)].attributes.TotalConfirmedCovidCases;
        }

      this.setState({
        isLoaded: true,
        data: result,
        total_deaths: tot_d,
        total_cases:  tot_c,
        today_deaths: tot_d[0],
        today_cases:  tot_c[0],
        width:400,
        height:200
      }, () => console.log("Total deaths: " + this.state.total_deaths +" Total cases: "+ this.state.total_cases +" Today's deaths: "+ this.state.today_deaths +" Today's cases:  "+ this.state.today_cases ));

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }


  render() {

  let total_deaths = this.state.total_deaths;
  let total_cases = this.state.total_cases;

  const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
   return (
      <div class="container-fluid">
      {<Navbar />}

        <div class="row">

          <div class="col-sm  mt-3 mb-3">
          <div class="opacity-5 shadow-lg">
            <div class="card-body">
              <h5 classs="card-title">Confirmed Cases</h5>
              <h6 class="card-subtitle text-muted">Past 7 Days</h6>
              <div>
               <ApxChrt dataIn={total_cases} width={this.state.width} height={this.state.height} />
                </div>

                </div>
            </div>
          </div>

          {<TodayDeaths today_deaths={this.state.today_deaths} />}
          {<TodayCases today_cases={this.state.today_cases} />}
          </div>
          {<PlaySound />}

          <div class="row">
          <div class="opacity-5 shadow-lg">
            <div class="card-body">
              <h5 classs="card-title">Confirmed Deaths</h5>
              <h6 class="card-subtitle text-muted">Past 7 Days</h6>
              <div>
               <ApxChrt dataIn={total_cases} width={this.state.width} height={this.state.height} />
                </div>
              </div>
            </div>
          </div>
        </div>

        );
    }
  }
}
export default App;
//
//  <ApxChrt dataIn={total_deaths} width={this.state.width} height={this.state.height} />
// <BarChart data={total_deaths} width={this.state.width} height={this.state.height} />
