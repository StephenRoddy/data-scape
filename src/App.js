/* //Original Imports
import React from 'react';
import logo from './logo.svg';
import './App.css';
*/
// Import React
import React, { Component } from 'react';
import { render } from 'react-dom';

// Import p5
//import P5Wrapper from 'react-p5-wrapper';
//import boxMap from './components/p5skt/boxMap';
//import ballMap from './components/p5skt/ballMap';

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

//Import sonification components
// SonifyOne and sonifyTwo represent 2 different mapping strategies
//import SonifyOne from './components/sonify1.js';
import SonifyTwo from './components/sonify2.js';
import SonifyThree from './components/sonify3.js';
import SonifyFourNoise from './components/sonify4_noise_lfo.js';
import SonifyFiveFilter from './components/sonify5_noise_cutoff.js';

// Data Ticker Imports
import Ticker from './components/ticker.js';

//  Chart Imports
//import BarChart from './components/charts/bar.js';
import ApxChrt from './components/charts/apxChrt.js';
//import ApxHeat from './components/charts/apxHeat.js';
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

      date_series: [], // Dates for 7 day week
      full_date_series: [], //Dates for full series
      total_death_series: [], //total death series
      total_cases_series: [], //total case series

      confirmed_deaths_series: [], //confirmed deaths series
      confirmed_cases_series: [], //confirmed cases series

      full_death_series:[],
      full_case_series:[],

      full_months: [],
      seven_days:[],

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
// 7 day data
        let tot_d = []; // total deaths
        let tot_c = []; // total cases

        let con_d = []; // confirmed deaths
        let con_c = []; // confirmed cases

        let date = []; //date
        let seven_days =[];

// 7 day data parsing and organisation
        let i;
        for (i=0; i < 7;i++){
          tot_d[i] = result.features[result.features.length-(1+i)].attributes.TotalCovidDeaths;

          tot_c[i]  = result.features[result.features.length-(1+i)].attributes.TotalConfirmedCovidCases;

          con_d[i] = result.features[result.features.length-(1+i)].attributes.ConfirmedCovidDeaths;
          con_c[i] = result.features[result.features.length-(1+i)].attributes.ConfirmedCovidCases;

          date[i] = result.features[result.features.length-(1+i)].attributes.Date;
        }

// 7 day data Date Conversion from Unix Timestamp arrays to to arrays of JS ddate/time objects.
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // needed for parsing month data apparently....

      let k; // there a lott going on here. I'm converting from Unix time to date/time objects , extractng the day number and indexing into an array of day lables with that number
      for(k=0; k< date.length; k++){
        date[k] = new Date(date[k]);
        seven_days[k] = days.[date[k].getDay()];
      }

/*      let n;
      for(n=0; n< date.length; n++){
        seven_days[n] = date[n].getDay();

      }
*/

// All time data
        let full_d =[]; // All time total deaths
        let full_c =[]; // All time total cases

        let full_date =[];
        let full_months =[];

// All time data parsing and organisation
        let j;
        let data_length = result.features.length;
        for (j=0; j < data_length; j++){

          full_d[j] = result.features[result.features.length-(1+j)].attributes.TotalCovidDeaths;
          full_c[j]  = result.features[result.features.length-(1+j)].attributes.TotalConfirmedCovidCases;
          full_date[j] = result.features[result.features.length-(1+j)].attributes.Date;

        }
// All time  data Date Conversion from Unix Timestamp arrays to to arrays of JS ddate/time objects.
// there a lott going on here. I'm converting from Unix time to date/time objects , extractng the month number and indexing into an array of month lables with that number
        let months = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ]; // needed for parsing month data apparently....
        let l;
        for(l=0; l< full_date.length; l++){
          full_date[l] = new Date(full_date[l]);
          full_months[l] = months[full_date[l].getMonth()];
        }

// Remove repeated labels. Need to do this here as the option for showing repeated labels in apx charts breaks the render
        let z;
        let new_ar =[];

        for(z=1; z < full_months.length; z++){

          if (full_months[z] == full_months[z-1]){
            new_ar[z] = full_months[z];
            new_ar[z-1] = '';
          } else{
            new_ar[z] = '';
            new_ar[z-1] = full_months[z-1];

          }
        }
        full_months = new_ar;


        // NB. Need to reverse these array as we filled them backwards from the end of the original data
        // I just reverse the arrays below when we set state.
        // So I'm reversing these as I load them into state.
        //Be careful to account for todays data when doing This
        // don't accidentally pull the figures from a week ago for today
        //also, should probably change that don't remembe the reasoning behind this.
        // And another thing!. Should really just do one big data process then just take the 1st 7 places of the larger
        // arrays for the 7 day values.


      this.setState({
        isLoaded: true,
        data: result,
        total_deaths_series: tot_d.reverse(),
        total_case_series:  tot_c.reverse(),
        full_death_series: full_d.reverse(),
        full_case_series: full_c.reverse(),
        confirmed_deaths_series: con_d.reverse(),
        confirmed_cases_series: con_c.reverse(),
        today_tot_deaths: tot_d[tot_d.length -1],
        today_tot_cases:  tot_c[tot_c.length -1],
        today_con_deaths: con_d[con_d.length -1],
        today_con_cases: con_c[con_c.length -1],
        date_series: date.reverse(),
        full_date_series: full_date.reverse(),
        full_months: full_months.reverse(),
        seven_days: seven_days.reverse(),
        width:400,
        height:200,

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
// Start the audio:
Tone.start(); // no audio will play at all until we initiate tone.
Tone.Transport.stop();
Tone.Transport.start();

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
                 {<ApxChrt
                 data={this.state.total_case_series}
                 date={this.state.date_series}
                 time_labels= {this.state.seven_days}
                 time_series = {"Past 7 Days"}
                 name= {"Total Confirmed Cases"}
                 />}
          {<SonifyTwo title = {"Sonify Data"} data={this.state.total_case_series}/>}

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
               data={this.state.total_deaths_series}
               date={this.state.date_series}
               time_labels= {this.state.seven_days}
               time_series = {"Past 7 Days"}
               name= {"Total Confirmed Deaths"}/>
               {<SonifyThree title = {"Sonify Data"} data={this.state.total_deaths_series}/>}

            </div>

            <div class="col-sm mt-3 mb-3">
            <ApxRadar
            type= "radar"
            name ={"New COVID-19 Cases"}
            data={this.state.confirmed_cases_series}
            time_labels= {this.state.seven_days}
            time_series = {"Past 7 Days"}
            date={this.state.date_series}/>
            {<SonifyTwo title = {"Sonify Data"} data={this.state.confirmed_cases_series} />}
            </div>
        </div>

        <div class="row">
        <div class="col-sm mt-3 mb-3">
        <ApxChrt
        data={this.state.full_case_series}
        date={this.state.full_date_series}
        time_labels= {this.state.full_months}
        time_series = {"Since Start of Pandemic"}
        name= {"All Confirmed Cases"} />

          <div class="opacity-5 shadow-lg">
            <div class="card-body">
              <h5 classs="card-title">Sonification of all Cases to Date</h5>
              <h6 class="card-subtitle text-muted">Ireland</h6>
              <div className="mixed-chart">
              {<SonifyFourNoise title = {"Sonify Data"} data={this.state.full_case_series}/>}
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm mt-3 mb-3">
    <ApxChrt
    data={this.state.full_death_series}
    date={this.state.full_date_series}
    time_labels= {this.state.full_months}
    time_series = {"Since Start of Pandemic"}
    name= {"All Confirmed Deaths"}/>

      <div class="opacity-5 shadow-lg">
        <div class="card-body">
          <h5 classs="card-title">Sonification of all Deaths to Date</h5>
          <h6 class="card-subtitle text-muted">Ireland</h6>
          <div className="mixed-chart">
          {<SonifyFiveFilter title = {"Sonify Data"} data={this.state.full_death_series}/>}
      </div>
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
//  <ApxChrt data={total_deaths} width={this.state.width} height={this.state.height} />
// <BarChart data={total_deaths} width={this.state.width} height={this.state.height} />
//            <ApxHeat type= "heatmap" name ={"Covid Heatmap"}/>
