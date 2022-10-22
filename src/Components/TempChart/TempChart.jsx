import React from "react";
import "./TempChart.css";
import { ResponsiveLine } from "@nivo/line";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const dayInAWeek = new Date().getDay();
const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
  WEEK_DAYS.slice(0),
  dayInAWeek
);

const TempChart = ({ data }) => {
  const DataChart = [
    {
      id: "Temperature",
      color: "hsl(2, 70%, 50%)",
      data: [
        {
          x: "Today",
          y: data.current.temp,
        },
        {
          x: forecastDays[0],
          y: data.daily[0].temp.day,
        },
        {
          x: forecastDays[1],
          y: data.daily[1].temp.day,
        },
        {
          x: forecastDays[2],
          y: data.daily[2].temp.day,
        },
        {
          x: forecastDays[3],
          y: data.daily[3].temp.day,
        },
        {
          x: forecastDays[4],
          y: data.daily[4].temp.day,
        },
        {
          x: forecastDays[5],
          y: data.daily[5].temp.day,
        },
        {
          x: forecastDays[6],
          y: data.daily[7].temp.day,
        },
      ],
    },
  ];

  console.log(data);

  return (
    <div className="chart">
      <ResponsiveLine
        colors={{ scheme: "category10" }}
        data={DataChart}
        margin={{ top: 60, right: 30, bottom: 30, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        pointSize={10}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        theme={{
          background: "#33333300",
          textColor: "#ffffff",
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 16,
                fill: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: "#ffffff",
                strokeWidth: 1,
              },
              text: {
                fontSize: 14,
                fill: "#ffffff",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default TempChart;
