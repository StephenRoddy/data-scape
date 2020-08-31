import * as d3 from 'd3';

export function drawChart(height, width, data){
  var svg = d3.select("body").append("svg")
              .attr("width", width)
              .attr("height", height)
              .style("border", "1px solid black")

  //  var selection = svg.selectAll("rect").data(data);
    // ....
    // rest of the d3 code from chart.html
    // .....
    var width = 600;
    var height = 400;
    var datasets = [
        [10, 30, 40, 20],
        [10, 40, 30, 20, 50, 10],
        [60, 30, 40, 20, 30]
    ]

    var svg = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height", height)
                .style("border", "1px solid black")

    function drawChart(data) {
        var selection = svg.selectAll("rect").data(data);
        var yScale = d3.scaleLinear()
                        .domain([0, d3.max(data)])
                        .range([0, height-100]);

        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .exit()
            .transition().duration(300)
                .attr("y", (d) => height)
                .attr("height", 0)
            .remove()
    }

    var i = 0;
    function changeData(){
        drawChart(datasets[i++]);
        if(i == datasets.length) i = 0;
    }

    window.addEventListener('load', function() {
        changeData();
    });

}
