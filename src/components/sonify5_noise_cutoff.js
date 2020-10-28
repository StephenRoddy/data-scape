//toneCheck.js
// SImillar to sonify1 but we do a re-rangeing of the data first here to make sure it is audible.

import React, { Component } from "react";
import * as Tone from 'tone';

class SonifyFiveFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}


render() {

  //rescale the incoming data array to usable frequencies
  const dtaIn = this.props.data;
  const data =[];

 // Rescalling of data on basis of high and low points
  let hiDatPnt = Math.max(...dtaIn); // get highest point in the data
  let dMin = Math.min(...dtaIn); // get lowest point in the data
  let dMax = 1.5* hiDatPnt; //The highest pitch will always equal 1.5 times the highest number in array
  let nMin = 100;
  let nMax = 5500;  // map thius into a range that's useful for the white noise filter

  let i;
  //rescaling function
  for(i=0; i<dtaIn.length; i++){
    data[i] = (((nMax-nMin)*(dtaIn[i] - dMin))/(dMax-dMin)) + nMin;
  }

// Create Filter Pattern and Noise Source
  const filter = new Tone.Filter(0, "lowpass").toDestination();
  //filter.frequency.rampTo(20000, .5);

  const noise = new Tone.Noise().connect(filter);

// Create Looping construct used to map the data to the filter cutoff frequency
  let data_cycle_k = 0; //Data Mapping Loop w/ Timing element
  const data_mapper_loop = new Tone.Loop((time) => {
   // triggered every 16th note.
    filter.frequency.rampTo(data[data_cycle_k],.5);
    console.log(data[data_cycle_k]);
    if(data_cycle_k < data.length -1 ){    //if statement to ensure that the frequency rests at the highpoint of the data (we don't overshoot array)
      data_cycle_k++;
}
    if(data_cycle_k == data.length -1){ // If statement ends the sonification when we have read all of the data with the k index
      noise.stop();
      data_mapper_loop.stop(0);
      data_cycle_k =0;                  // Setting K to 0 resets the sonification to the start so it begins from scratch again when we click.
      }
      //console.log(data[data_cycle_k]);
    }, "16n");

  function handleClick(e) {
    e.preventDefault();
    Tone.start(); // no audio will play at all until we initiate tone.
    if(noise.state == "started"){ // On press turn it off if it's on. turn it on if its off
      noise.stop();

      data_mapper_loop.stop(0);
      data_cycle_k =0;                  // Setting K to 0 resets the sonification to the start so it begins from scratch again when we click.

    } else{
      noise.start();
      data_mapper_loop.start(0);
    }
  }

      return(
        <button type="button" class ="btn btn-primary mt-3" onClick={handleClick}>{this.props.title}</button>
    );
  }
}
    export default SonifyFiveFilter
