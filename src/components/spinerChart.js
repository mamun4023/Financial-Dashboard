import React, { Component } from 'react';
import Chart from 'react-apexcharts';

var options = {
    series: [67],
    colors: ['#A645B6'],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 1,
                size: '50%'
            },

            dataLabels: {
                showOn: 'always',
                offsetX: 5,
                offsetY: 10,
                name: {
                    offsetY: 20,
                    show: true,
                    color: '#888',
                    fontSize: '14px'
                },
                value: {
                    color: '#fff',
                    fontSize: '20px',
                    show: true,
                    offsetY: -10
                }
            }
        }
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['']
};

export default function SpinnerChart({ width, data }) {
    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={[data]}
                        type="radialBar"
                        width={width}
                    />
                </div>
            </div>
        </div>
    );
}
