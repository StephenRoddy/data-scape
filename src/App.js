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

// Data Ticker Imports
import Ticker from './components/ticker.js';

//  Chart Imports
//import BarChart from './components/charts/bar.js';
import ApxChrt from './components/charts/apxChrt.js';
import ApxHeat from './components/charts/apxHeat.js';
import ApxRadar from './components/charts/apxRadar.js';
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

      date_series: [], // Dates

      total_death_series: [], //total death series
      total_cases_series: [], //total case series

      confirmed_deaths_series: [], //confirmed deaths series
      confirmed_cases_series: [], //confirmed cases series

      today_tot_deaths:0, //today's total deaths
      today_tot_cases:0,  //today's total cases
      today_con_deaths:0, //today's confirmed deaths
      today_con_cases:0,  //today's confirmed deaths
    }
  }

  componentDidMount(){

    // Get COVID-19 Total Deaths, Total Confirmed Cases and Dates
  fetch('https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=Date,TotalConfirmedCovidCases,ConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths&returnGeometry=false&outSR=4326&f=json') // use a header for the api keey value pair
    .then(res => res.json())
    .then(
      (result) => {
//Process data on result
        let tot_d = []; // total deaths
        let tot_c = []; // total cases

        let con_d = []; // confirmed deaths
        let con_c = []; // confirmed cases

        let date = []; //date

        let i;
        for (i=0; i < 7;i++){
          tot_d[i] = result.features[result.features.length-(1+i)].attributes.TotalCovidDeaths;

          tot_c[i]  = result.features[result.features.length-(1+i)].attributes.TotalConfirmedCovidCases;

          con_d[i] = result.features[result.features.length-(1+i)].attributes.ConfirmedCovidDeaths;
          con_c[i] = result.features[result.features.length-(1+i)].attributes.ConfirmedCovidCases;

          date[i] = result.features[result.features.length-(1+i)].attributes.Date;
        }


        // NB. Need to reverse these array as we filled them backwards from the end of the original data
        // I just reverse the arrays below when we set state. Be careful to account for todays data when doing This
        // don't accidentally pull the figures from a week ago for today

      this.setState({
        isLoaded: true,
        data: result,
        total_deaths_series: tot_d.reverse(),
        total_case_series:  tot_c.reverse(),
        confirmed_deaths_series: con_d.reverse(),
        confirmed_cases_series: con_c.reverse(),
        today_tot_deaths: tot_d[tot_d.length -1],
        today_tot_cases:  tot_c[tot_c.length -1],
        today_con_deaths: con_d[con_d.length -1],
        today_con_cases: con_c[con_c.length -1],
        date_series: date,
        width:400,
        height:200
      }, () => console.log("Confirmed Deaths: " +con_d+" Confirmed Cases: "+con_c+ " Total deaths: " + this.state.today_tot_deaths +" Total cases: "+ this.state.today_tot_cases +" Today's deaths: "+ this.state.today_con_deaths +" Today's cases:  "+ this.state.today_con_cases ));

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
          <div class="col-sm mt-3 mb-3">
                 <ApxChrt
                 dataIn={this.state.total_case_series}
                 date={this.state.date_series}
                 name= {"Total Confirmed Cases"}
                 />
          </div>

          <div class="col-sm  mt-3 mb-3">
          {<Ticker data={this.state.today_con_cases} name ={"New Cases"} />}
          {<Ticker data={this.state.today_con_deaths} name ={"New Deaths"} />}

          </div>

          <div class="col-sm  mt-3 mb-3">
          {<Ticker data={this.state.today_tot_cases} name ={"Total Cases"} />}
          {<Ticker data={this.state.today_tot_deaths} name ={"Total Deaths"} />}

          </div>

          </div>

          <div class="row">
            <div class="col-sm  mt-3 mb-3">


               <ApxChrt
               dataIn={this.state.total_deaths_series}
               date={this.state.date_series}
               name= {"Total Confirmed Deaths"}/>

           {<PlaySound />}
            </div>

            <div class="col-sm mt-3 mb-3">
            <ApxRadar type= "radar" name ={"New COVID-19 Cases"} data={this.state.confirmed_cases_series} date={this.state.date_series}/>

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
//            <ApxHeat type= "heatmap" name ={"Covid Heatmap"}/>
