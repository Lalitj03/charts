import React, {Component} from 'react';
import rd3 from 'react-d3';

export class Hello extends Component {
  render() {
    var LineChart = rd3.LineChart;
    var PieChart = rd3.PieChart;
    var BarChart = rd3.BarChart;
    var ScatterChart = rd3.ScatterChart;

    const lineData = [
      {
        name: "series1",
        values: [ { x: 0, y: 20 },{ x: 2, y: 19 },{ x: 4, y: 18 },{ x: 6, y: 17 },{ x: 7, y: 16 },{ x: 8, y: 15 },{ x: 10, y: 14 },{ x: 12, y: 13 },{ x: 14, y: 12 },{ x: 16, y: 11 } ]
      },
      {
        name: "series2",
        values: [ { x: 1, y: 22 }, { x: 2, y: 22 },{ x: 6, y: 22 }, { x: 7, y: 2 },{ x: 8, y: 8 }, { x: 9, y: 18 },{ x: 11, y: 40 }, { x: 12, y: 66 },{ x: 13, y: 57 }, { x: 14, y: 58 } ]
      },
      {
        name: "series3",
        values: [ { x: 0.5, y: 22 }, { x: 5.5, y: 2 },{ x: 6, y: 42 }, { x: 10, y: 25 },{ x: 12, y: 58 }, { x: 19, y: 18 },{ x: 21, y: 40 }, { x: 22, y: 46 },{ x: 26, y: 57 }, { x: 31, y: 48 } ]
      }
    ]

    var pieData = [
      {label: 'Dominos', value: 55.0},
      {label: 'Pizza Hut', value: 35.0},
      {label: 'Papa Johns Pizza', value: 8.0 },
      {label: 'California Pizza Kitchen', value: 2.0}
    ]
    var scatterData = [
      {
        name: "series1",
        values: [ { x: 0, y: 20 },{ x: 2, y: 19 },{ x: 4, y: 18 },{ x: 6, y: 17 },{ x: 7, y: 16 },{ x: 8, y: 15 },{ x: 10, y: 14 },{ x: 12, y: 13 },{ x: 14, y: 12 },{ x: 16, y: 11 } ]
      },
      {
        name: "series2",
        values: [ { x: 1, y: 22 }, { x: 2, y: 22 },{ x: 6, y: 22 }, { x: 7, y: 2 },{ x: 8, y: 8 }, { x: 9, y: 18 },{ x: 11, y: 40 }, { x: 12, y: 66 },{ x: 13, y: 57 }, { x: 14, y: 58 } ]
      },
      {
        name: "series3",
        values: [ { x: 0.5, y: 22 }, { x: 5.5, y: 2 },{ x: 6, y: 42 }, { x: 10, y: 25 },{ x: 12, y: 58 }, { x: 19, y: 18 },{ x: 21, y: 40 }, { x: 22, y: 46 },{ x: 26, y: 57 }, { x: 31, y: 48 } ]
      }
    ]

    // var barData = require('json!https://raw.githubusercontent.com/react-d3/react-d3-example/master/simple/data/user_sample.json');

    return (
      <div>
        <LineChart
          legend={true}
          data={lineData}
          width={800}
          height={400}
          title="Line Chart"
          yAxisLabel="Altitude"
          xAxisLabel="Elapsed Time (sec)"
          gridHorizontal={true}
        />,
        <PieChart
          data={pieData}
          width={400}
          height={400}
          radius={100}
          innerRadius={20}
          title="Pie Chart"
         />
         <ScatterChart
           data={scatterData}
           width={500}
           height={400}
           title="Scatter Chart"
         />
      </div>
    );
  }
}
// <BarChart
//   data={barData}
//   width={500}
//   height={200}
//   fill={'#3182bd'}
//   title='Bar Chart'
// />
