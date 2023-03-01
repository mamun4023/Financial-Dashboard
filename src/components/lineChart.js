import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#A645B6'],
                chart: {
                    toolbar: {
                        show: false
                    }
                },

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
            },

            series: [
                {
                    name: 'series-1',
                    data: [200, 230, 250, 260, 300, 250, 350]
                }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="350"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
