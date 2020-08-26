//today.js
import React from 'react';

class TodaysCases extends React.Component{
  constructor(props){
      super(props);
      this.state = {props};
  }
  render(){
    const today = this.state.props.data[6].value;

    return(
      <div class="col-sm mt-3 mb-3">
      <div class="opacity-5 shadow-lg">
        <div class="card-body">
          <h5 classs="card-title">Today</h5>
          <h6 class="card-subtitle text-muted">Confirmed cases</h6>
          <div> <h2>{today}</h2></div>

      </div>
      </div>
      </div>

    );
  }
}

export default TodaysCases
      //    <div> <h2>{this.props.data[data.length-1].value}</h2></div>
  //    <div> <h2>{this.props[5].value}</h2></div>
