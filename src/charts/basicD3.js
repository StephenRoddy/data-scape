import * as d3 from 'd3';

export function drawChart(height, width){
    d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
        .append("text")
        .attr("fill", "green")
        .attr("x", 50)
        .attr("y", 50)
        .text("Hello D3")
}

// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { drawChart } from './charts/BasicD3';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        drawChart(400, 600);
    }, []);


    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <div id="chart">
            </div>
        </div>
    );
}

export default App;
