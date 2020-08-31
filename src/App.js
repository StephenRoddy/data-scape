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
      data2: [1, 2, 3, 4, 5, 6],
  //    total_cases: [1, 2, 3, 4, 5, 6], // for some reason this needs to be defined here before being reset.. prob helps defined the props or something should check that
  //    total_deaths: [1, 2, 3, 4, 5, 6],
      width: 400,
      height: 200,

    }

  }

  componentDidMount(){
    // Get COVID-19 Total Deaths, Total Confirmed Cases and Dates
  fetch('https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=TotalConfirmedCovidCases,TotalCovidDeaths,HospitalisedAged25to34,Date&outSR=4326&f=json') // use a header for the api keey value pair
    .then(res => res.json())
    .then((data) => {
      this.setState({ data: data }) // load in all the data as json
      this.setState({ total_deaths: [6, 5, 3, 4, 5, 6] }) // create array to store deaths
      this.setState({ total_cases: [6, 5, 3, 4, 5, 6] }) // create array to store cases
      // Create 2 new arrays containing the confrimed cases and death numbers for ireland for the past 7 days.

      this.setState({t_c: this.state.data.features[this.state.data.features.length-(1+0)].attributes.TotalConfirmedCovidCases});
      this.setState({y1_c: this.state.data.features[this.state.data.features.length-(1+1)].attributes.TotalConfirmedCovidCases});
      this.setState({y2_c: this.state.data.features[this.state.data.features.length-(1+2)].attributes.TotalConfirmedCovidCases})
      this.setState({y3_c: this.state.data.features[this.state.data.features.length-(1+3)].attributes.TotalConfirmedCovidCases})
      this.setState({y4_c: this.state.data.features[this.state.data.features.length-(1+4)].attributes.TotalConfirmedCovidCases})
      this.setState({y5_c: this.state.data.features[this.state.data.features.length-(1+5)].attributes.TotalConfirmedCovidCases})
      this.setState({y6_c: this.state.data.features[this.state.data.features.length-(1+6)].attributes.TotalConfirmedCovidCases})

      this.setState({t_d: this.state.data.features[this.state.data.features.length-(1+0)].attributes.TotalCovidDeaths});
      this.setState({y1_d: this.state.data.features[this.state.data.features.length-(1+1)].attributes.TotalCovidDeaths});
      this.setState({y2_d: this.state.data.features[this.state.data.features.length-(1+2)].attributes.TotalCovidDeaths})
      this.setState({y3_d: this.state.data.features[this.state.data.features.length-(1+3)].attributes.TotalCovidDeaths})
      this.setState({y4_d: this.state.data.features[this.state.data.features.length-(1+4)].attributes.TotalCovidDeaths})
      this.setState({y5_d: this.state.data.features[this.state.data.features.length-(1+5)].attributes.TotalCovidDeaths})
      this.setState({y6_d: this.state.data.features[this.state.data.features.length-(1+6)].attributes.TotalCovidDeaths})


/* Need to restructure this for loop to do this for us. Up there is far too unweildy*/
/*
let i;
for (i=0; i < 6;i++){
  this.state.total_deaths[i] = this.state.data.features[this.state.data.features.length-(1+i)].attributes.TotalCovidDeaths;
  this.state.total_cases[i]  = this.state.data.features[this.state.data.features.length-(1+i)].attributes.TotalConfirmedCovidCases;

}*/


      this.setState({dth_r: this.state.total_deaths[0] });
      this.setState({cse_r: this.state.total_cases[0] });

//      console.log( this.state.total_deaths);
//      console.log( this.state.total_cases);
//      console.log( this.state.dth_r);
//      console.log( this.state.cse_r);

    })
    .catch(console.log)
  }


  render() {
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
                <BarChart data={this.state.data2} width={this.state.width} height={this.state.height} />
                </div>

          </div>
          </div>
          </div>

          {<TotalDeaths total_deaths={this.state.t_d} />}
          {<TotalCases total_cases={this.state.t_c} />}
          </div>
          {<PlaySound />}

          </div>
    );
  }
}

export default App;
