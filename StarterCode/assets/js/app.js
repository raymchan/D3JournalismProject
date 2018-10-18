var svgWidth = 500;
var svgHeight = 500;
var margin = { top: 30, right: 40, bottom: 100, left: 100 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

d3.csv("data.csv", function(err, censusData) {
    

    if(err) throw err;
    censusData.forEach(function(data) {
      console.log(data);
      data.state = data.state;
      data.abbr = data.abbr;
      data.percBelowPov = +data.percBelowPov;
      data.physActive = +data.physActive;
    });


    d3.select("#scatter")
      .html('')
      .append('p');

    // Graph 1 
    //trace data
    var trace1 = {
      x: ['State','ABBR','Percent Below Pov','Physically Active'],
      y: [data.state,data.abbr,data.percBelowPov,data.physActive],
      type: 'scatter',
      marker: {
        color: 'rgb(219, 0, 0)',
        size: 12
      }
    };

    var data1 = [trace1];

    var layout1 = {
      title: 'Healthcare vs. Poverty',
      xaxis: {
        title: 'Misc Stats',
        titlefont: {
          family: 'Courier New, monospace',
          size: 14,
          color: '#7f7f7f'
        }
      },
        yaxis: {
          title: 'Average',
          titlefont: {
            family: 'Courier New, monospace',
            size: 14,
            color: '#7f7f7f'
          }
        }
    };

      Plotly.newPlot('plot1a', data1, layout1);