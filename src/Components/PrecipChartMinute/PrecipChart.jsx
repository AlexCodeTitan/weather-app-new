import React from "react";
import "./PrecipChart.css";
import { ResponsiveLine } from "@nivo/line";

const PrecipChart = ({ data }) => {
  const DataChart = [
    {
      id: "Temperature",
      color: "hsl(2, 70%, 50%)",
      data: [
        {
          x: "0",
          y: data.minutely[0].precipitation,
        },
        {
          x: "5",
          y: data.minutely[5].precipitation,
        },
        {
          x: "10",
          y: data.minutely[10].precipitation,
        },
        {
          x: "15",
          y: data.minutely[15].precipitation,
        },
        {
          x: "20",
          y: data.minutely[4].precipitation,
        },
        {
          x: "25",
          y: data.minutely[25].precipitation,
        },
        {
          x: "30",
          y: data.minutely[30].precipitation,
        },
        {
          x: "35",
          y: data.minutely[35].precipitation,
        },
        {
          x: "40",
          y: data.minutely[40].precipitation,
        },
        {
          x: "45",
          y: data.minutely[45].precipitation,
        },
        {
          x: "50",
          y: data.minutely[50].precipitation,
        },
        {
          x: "55",
          y: data.minutely[55].precipitation,
        },
        {
          x: "60",
          y: data.minutely[60].precipitation,
        },
      ],
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center justify-content-center minute-forecast-container">
      <h3 className="chart-title mt-1">Rain forecast for the next hour</h3>
      <div className="precip-chart">
        <ResponsiveLine
          colors={{ scheme: "dark2" }}
          data={DataChart}
          margin={{ top: 50, right: 10, bottom: 20, left: 40 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          curve="natural"
          axisTop={{
            orient: "top",
            tickSize: 4,
            tickPadding: 5,
            tickRotation: 0,
            legend: "5 min increments",
            legendOffset: -40,
          }}
          enableArea={true}
          axisRight={null}
          axisBottom={null}
          pointSize={0}
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
    </div>
  );
};

export default PrecipChart;
