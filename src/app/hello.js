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
        values: [ { x: 1, y: 82 }, { x: 21, y: 82 },{ x: 72, y: 82 }, { x: 73, y: 82 },{ x: 74, y: 82 }, { x: 75, y: 82 },{ x: 76, y: 82 }, { x: 77, y: 82 },{ x: 78, y: 82 }, { x: 79, y: 82 } ]
      }
    ];

    return (
      <LineChart
        legend={true}
        data={lineData}
        width={600}
        height={400}
        title="Line Chart"
        yAxisLabel="Altitude"
        xAxisLabel="Elapsed Time (sec)"
        gridHorizontal={true}
      />
    );
  }
}
