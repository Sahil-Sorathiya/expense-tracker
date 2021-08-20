import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const valueArray = props.dataPoints.map((dataPoint)=>{
      return dataPoint.value;
  })
  const maxValue = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            key={dataPoint.lable}
            lable={dataPoint.lable}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
