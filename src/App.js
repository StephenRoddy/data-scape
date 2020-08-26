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
import TodaysCases from './components/today.js';
import PlaySound from './components/playSound.js';

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

  render() {
    const { data } = this.state;
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

          {<TodaysCases data={data} />}
          </div>
          {<PlaySound />}

          </div>
    );
  }
}

export default App;
