//toneCheck.js
import React from 'react';
import * as Tone from 'tone';

function PlaySound(props){
    const synth = new Tone.Synth().toDestination();
      function handleClick(e) {
        e.preventDefault();
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n");
        console.log('The button was clicked.');  }
      return(
        <button type="button" onClick={handleClick}>Play</button>
    );
}
export default PlaySound