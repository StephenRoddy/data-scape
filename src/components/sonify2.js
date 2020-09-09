//toneCheck.js
// SImillar to sonify1 but we do a re-rangeing of the data first here to make sure it is audible.

import React, { Component } from "react";
import * as Tone from 'tone';

class SonifyTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}


render() {

  //rescale the incoming data array to usable frequencies
  const dtaIn = this.props.data;
  const data =[];

  let dMin = dtaIn[0];
  let dMax = 1.5* dtaIn[0]; //The highest pitch will always equal 1.5 times the lowest

  let nMin = 220;
  let nMax = 880;

  let j;
  //rescaling function
  for(j=0; j<7; j++){
    data[j] = (((nMax-nMin)*(dtaIn[j] - dMin))/(dMax-dMin)) + nMin;
  }
  console.log(data);

// Need to create time pitch pairs.
  const time = [0, 1, 2, 3, 4, 5, 6]; //Sequencing array to be integrated with data array
  let dataTime =[];
  let z;
  for(z=0; z<7; z++){
    dataTime[z] = [time[z], data[z]];
  } // Create the time note pairs for the part.



  const synth2 = new Tone.Synth().toDestination();
  const now2 = Tone.now();

  const part2 = new Tone.Part(((now2, note) => {
  	synth2.triggerAttackRelease(note, "8n", now2);
  }), dataTime);

  function handleClick(e) {
    e.preventDefault();
    part2.stop();
    part2.start();

    console.log('The button was clicked.');

  }

      return(
        <button type="button" class ="btn btn-primary mt-3" onClick={handleClick}>{this.props.title}</button>
    );
  }
}

    export default SonifyTwo



// The map() method creates a new array populated with the results of calling
// a provided function on every element in the calling array.
//
// pass a function to map
// const map1 = array1.map(x => x * 2);
//
// console.log(map1);
// expected output: Array [2, 8, 18, 32]
//


/*
let z=0;
for (z = 0; z < 7; z++) {
  synth.triggerAttackRelease(data[z], "8n");
}

*/
/*

function PlaySound(props){
    const synth = new Tone.Synth().toDestination();
      function handleClick(e) {
        e.preventDefault();
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n");
        console.log('The button was clicked.');  }
      return(
        <button type="button" class ="btn btn-primary mt-3" onClick={handleClick}>Audio Test</button>
    );
}
export default PlaySound
*/
