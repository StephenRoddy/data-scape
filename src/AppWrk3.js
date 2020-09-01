/* //Original Imports
import React from 'react';
import logo from './logo.svg';
import './App.css';
*/

// Import React
import React, { Component } from 'react';
import { render } from 'react-dom';

// Import d3
import * as d3 from "d3";
import { scaleLinear, scaleBand } from 'd3-scale';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

// Import Tone
import * as Tone from 'tone';

// Import Components
//import XYAxis from './components/axis/xy-axis.js';
//import Line from './components/line/line.js';
import Navbar from './components/navBar.js';
import PlaySound from './components/playSound.js';

// Data Imports
import TotalDeaths from './components/totalDeaths.js';
import TotalCases from './components/totalCases.js';

// d3 Chart Imports
import BarChart from './components/charts/bar.js';

// Import Audio  to play
import AudioPlay from './scripts/audioPlay.js';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Impiort Css and Images
import logo from './logo.svg';
import './App.css';

//Time = Date.now() //epoch

class App extends Component {
  constructor() {
    super();
    this.state = {
      total_cases1: 1, // for some reason this needs to be defined here before being reset.. prob helps defined the props or something should check that
      total_cases2: 2,
      total_cases3: 2,
      total_cases4: 2,
      total_cases5: 2,
      total_cases6: 1,
      total_cases7: 3,

      total_deaths1: 1,
      total_deaths2: 2,
      total_deaths3: 2,
      total_deaths4: 2,
      total_deaths5: 2,
      total_deaths6: 1,
      total_deaths7: 3,

      width: 400,
      height: 200
    }

  }

  componentDidMount(){
    // Get COVID-19 Total Deaths, Total Confirmed Cases and Dates
    fetch('https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=TotalConfirmedCovidCases,TotalCovidDeaths,HospitalisedAged25to34,Date&outSR=4326&f=json') // use a header for the api keey value pair
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data }) // load in all the data as json

        this.setState((prevState) => ({  total_deaths1 : prevState.data.features[prevState.data.features.length-(1+0)].attributes.TotalCovidDeaths }));
        this.setState((prevState) => ({  total_deaths2 : prevState.data.features[prevState.data.features.length-(1+1)].attributes.TotalCovidDeaths }));
        this.setState((prevState) => ({  total_deaths3 : prevState.data.features[prevState.data.features.length-(1+2)].attributes.TotalCovidDeaths }));
        this.setState((prevState) => ({  total_deaths4 : prevState.data.features[prevState.data.features.length-(1+3)].attributes.TotalCovidDeaths }));
        this.setState((prevState) => ({  total_deaths5 : prevState.data.features[prevState.data.features.length-(1+4)].attributes.TotalCovidDeaths }));
        this.setState((prevState) => ({  total_deaths6 : prevState.data.features[prevState.data.features.length-(1+5)].attributes.TotalCovidDeaths }));
        this.setState((prevState) => ({  total_deaths7 : prevState.data.features[prevState.data.features.length-(1+6)].attributes.TotalCovidDeaths }));

        this.setState((prevState) => ({  total_cases1  : prevState.data.features[prevState.data.features.length-(1+0)].attributes.TotalConfirmedCovidCases }));
        this.setState((prevState) => ({  total_cases2  : prevState.data.features[prevState.data.features.length-(1+1)].attributes.TotalConfirmedCovidCases }));
        this.setState((prevState) => ({  total_cases3  : prevState.data.features[prevState.data.features.length-(1+2)].attributes.TotalConfirmedCovidCases }));
        this.setState((prevState) => ({  total_cases4  : prevState.data.features[prevState.data.features.length-(1+3)].attributes.TotalConfirmedCovidCases }));
        this.setState((prevState) => ({  total_cases5  : prevState.data.features[prevState.data.features.length-(1+4)].attributes.TotalConfirmedCovidCases }));
        this.setState((prevState) => ({  total_cases6  : prevState.data.features[prevState.data.features.length-(1+5)].attributes.TotalConfirmedCovidCases }));
        this.setState((prevState) => ({  total_cases7  : prevState.data.features[prevState.data.features.length-(1+6)].attributes.TotalConfirmedCovidCases }));

      //  this.setState({ total_deaths: tot_d })
      //  this.setState({ total_cases: tot_c }) // create array to store cases

      //  this.setState({dth_r: this.state.total_deaths[0] });
      //  this.setState({cse_r: this.state.total_cases[0] });
        //console.log(this.state.total_deaths);
      })
      .catch(console.log)
    //  this.forceUpdate();
  }


  render() {
  //  console.log("Hardcoded : " + tot_d);
  //  console.log("From state: " + this.state.total_deaths);
//COVID-19 Ireland

   return (
      <div class="container-fluid">
      {<Navbar />}

        <div class="row">

          <div class="col-sm  mt-3 mb-3">
          <div class="opacity-5 shadow-lg">
            <div class="card-body">
              <h5 classs="card-title">Past 7 days</h5>
              <h6 class="card-subtitle text-muted">Confirmed Cases</h6>
              <div>
                <BarChart data={[this.state.total_deaths1,this.state.total_deaths2,this.state.total_deaths3,this.state.total_deaths4,this.state.total_deaths5,this.state.total_deaths6,this.state.total_deaths7]} width={this.state.width} height={this.state.height} />
                </div>

                </div>
            </div>
          </div>

          {<TotalDeaths total_deaths={this.state.total_deaths1} />}
          {<TotalCases total_cases={this.state.total_cases1} />}
          </div>
          {<PlaySound />}

          </div>
    );
  }
}

export default App;
