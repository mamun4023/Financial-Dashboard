import React, { Component } from "react";
import Chart from "react-apexcharts";


var options = {
  chart: {
    height: 280,
    type: "radialBar"
  },
  
  series: [67],
  
  
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 1,
        size: "50%"
      },
     
      dataLabels: {
        showOn: "always",
        
        name: {
          offsetY: 10,
          show: true,
          color: "#888",
          fontSize: "9px"
        },
        value: {
          color: "#fff",
          fontSize: "18px",
          show: true,
          offsetx : 10
          
        },
    
      }
    }
  },
  stroke: {
    lineCap: "round",
  },
  labels: [""]
};



  export default function SpinnerChart({width}){

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={[20]}
              type= "radialBar"
              width= {width}
            />
          </div>
        </div>
      </div>
    );
}

