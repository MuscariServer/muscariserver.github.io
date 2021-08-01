import React from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries,
    Hint
  } from 'react-vis';
import 'react-vis/dist/style.css'

interface DataTypes {
    x: number;
    y: number;
}

const data: DataTypes[] = [
    { x: 0, y: 200 },
    { x: 1, y: 500 },
    { x: 2, y: 450 },
    { x: 3, y: 150 },
    { x: 4, y: 450 },
];

function MuscariumGraph() {
    return (
        <XYPlot width="500" height="300">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="週"/>
            <YAxis title="価格"/>
            <LineSeries data={data} />
        </XYPlot>
    )
}

export default MuscariumGraph;