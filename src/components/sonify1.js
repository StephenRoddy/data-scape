//toneCheck.js
import React, { Component } from "react";
import * as Tone from 'tone';

class SonifyOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}


render() {
  const data = this.props.data;
  const time = [0, 1, 2, 3, 4, 5, 6]; //Sequencing array to be integrated with data array
  let dataTime =[];
  let z;
  for(z=0; z<7; z++){
    dataTime[z] = [time[z], data[z]];
  } // Create the time note pairs for the part.
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  const part = new Tone.Part(((now, note) => {
  	synth.triggerAttackRelease(note, "8n", now);
  }), dataTime);

  function handleClick(e) {
    e.preventDefault();
    Tone.start(); // no audio will play at all until we initiate tone.
  //  Tone.Transport.stop();
  //  Tone.Transport.start();
    part.stop();
    part.start();

    console.log('The button was clicked.');
  }

      return(
        <button type="button" class ="btn btn-primary mt-3" onClick={handleClick}>{this.props.title}</button>
    );
  }
}

    export default SonifyOne



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
