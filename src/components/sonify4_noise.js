//toneCheck.js
// SImillar to sonify1 but we do a re-rangeing of the data first here to make sure it is audible.

import React, { Component } from "react";
import * as Tone from 'tone';

class SonifyFourNoise extends Component {
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
  let nMin = 0;
  let nMax = 10;  // map thius into a range that's useful for the autofilter

  let i;
  //rescaling function
  for(i=0; i<dtaIn.length; i++){
    data[i] = (((nMax-nMin)*(dtaIn[i] - dMin))/(dMax-dMin)) + nMin;
  }

  const autoFilter = new Tone.AutoFilter().toDestination().start();
  const noise = new Tone.Noise().connect(autoFilter);

  function handleClick(e) {
    e.preventDefault();
    Tone.start(); // no audio will play at all until we initiate tone.

    if(noise.state == "started"){ // On press turn it off if it's on. turn it on if its off
    noise.stop();
    } else{
    //autoFilter.frequency.rampTo(500,50);

    noise.start();

    let k =0; //Data Mapping Loop w/ Timing element
    const loop = new Tone.Loop((time) => {
    	// triggered every 16th note.
      autoFilter.frequency.rampTo(data[k],.5);
      k++;
    	console.log(time);
    }, "16n").start(0);
  }

  }

      return(
        <button type="button" class ="btn btn-primary mt-3" onClick={handleClick}>{this.props.title}</button>
    );
  }
}
    export default SonifyFourNoise


    /*
        let j;  //Data Mapping Loop
        for(j=0; j<data.length; j++){
          autoFilter.frequency.rampTo(data[j],.5);
          console.log(data[j]);
        }*/
