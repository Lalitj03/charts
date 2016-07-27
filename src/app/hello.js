import React, {Component} from 'react';
import rd3 from 'react-d3';

export class Hello extends Component {
  render() {
    var LineChart = rd3.LineChart;

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

    return (
      <LineChart
        legend={true}
        data={lineData}
        width={800}
        height={400}
        title="Line Chart"
        yAxisLabel="Altitude"
        xAxisLabel="Elapsed Time (sec)"
        gridHorizontal={true}
      />
    );
  }
}
