import React, { Component } from 'react';
import Chart from 'react-apexcharts';

const options = {
    chart: {
        toolbar: {
            show: false
        }
    },
    colors: ['#A645B6'],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    grid: {
        show: false
    },
    tooltip: {
        enabled: true,
        style: {
            fontSize: '12px',
            fontFamily: undefined
        }
    }
};

const series = [
    {
        name: 'Earn',
        data: [200, 230, 250, 260, 300, 250, 350]
    }
];

export default function LineChart({ width, height }) {
    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width={width}
                        height={height}
                    />
                </div>
            </div>
        </div>
    );
}
