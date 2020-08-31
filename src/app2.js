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
import XYAxis from './components/axis/xy-axis.js';
import Line from './components/line/line.js';
import Navbar from './components/navBar.js';
import PlaySound from './components/playSound.js';

// Data Imports
import TotalDeaths from './components/totalDeaths.js';
import TotalCases from './components/totalCases.js';


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
      data: [

        { name: 'Thursday', value: 27499 },
        { name: 'Friday', value: 27676 },
        { name: 'Saturday', value: 27755 },
        { name: 'Sunday', value: 27908 },
        { name: 'Monday', value: 27969 },
        { name: 'Tuesday', value: 28116 },
        { name: 'Wednesday', value: 28201 },
      ],
    }
  }

  componentDidMount(){

    // Get COVID-19 Total Deaths
  fetch('https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=TotalCovidDeaths&returnGeometry=false&outSR=4326&f=json') // use a header for the api keey value pair
    .then(res => res.json())
    .then((deaths) => {
      this.setState({ total_death_data: deaths })
      this.setState({ total_deaths: this.state.total_death_data.features[this.state.total_death_data.features.length-1].attributes.TotalCovidDeaths });
    //  console.log(this.state.total_deaths);


    })
    .catch(console.log)

    // Get COVID-19 Total Confirmed Cases
    fetch('https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=TotalConfirmedCovidCases&returnGeometry=false&outSR=4326&f=json') // use a header for the api keey value pair
      .then(res => res.json())
      .then((cases) => {
        this.setState({ total_cases_data: cases })
        this.setState({ total_cases: this.state.total_cases_data.features[this.state.total_cases_data.features.length-1].attributes.TotalConfirmedCovidCases});

    //    console.log(this.state.total_cases);
      //  this.setState({ dogGif: this.state.imgData[0].url }) // Extract out dog imageUrl and pass as prop to dog componenbt
        //console.log('Here is the dog image: ' + this.state.dog);
      })
      .catch(console.log)

  }




  render() {
// Define the data to be sent to the components as props
    const total_deaths = this.state.total_deaths;
    const total_cases = this.state.total_cases;

    console.log(total_deaths);

    const { data } = this.state; // data for d3

// create graph
    const parentWidth = 500;

    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
      .domain(extent(data, d => d.value))
      .range([height, 0])
      .nice();

    const lineGenerator = line()
      .x(d => xScale(d.name))
      .y(d => yScale(d.value))
      .curve(curveMonotoneX);

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
            <svg
              className="lineChartSvg"
              width={width + margins.left + margins.right}
              height={height + margins.top + margins.bottom}
            >
              <g transform={`translate(${margins.left}, ${margins.top})`}>
                <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
              </g>
            </svg>

          </div>
          </div>
          </div>

          {<TotalDeaths total_deaths={total_deaths} />}
          {<TotalCases total_cases={total_cases} />}
          </div>
          {<PlaySound />}

          </div>
    );
  }
}

export default App;
