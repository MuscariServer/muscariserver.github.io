import React from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries,
  } from 'react-vis';
import 'react-vis/dist/style.css'

interface DataTypes {
    x: number;
    y: number;
}

const data: DataTypes[] = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
];

function Banned() {
    return (
        <XYPlot width="500" height="300">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="週"/>
            <YAxis title="人数"/>
            <LineSeries data={data} />
        </XYPlot>
    )
}

export default Banned;