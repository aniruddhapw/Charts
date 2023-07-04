import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarGraph = ({ data }) => {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveBar
        data={data}
        keys={["value"]} // Key(s) to determine the value of each bar
        indexBy="label" // Key to determine the label for each bar
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        padding={0.3}
        colors={{ scheme: "category10" }}
        enableGridY={true}
        enableLabel={false}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Value",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Label",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default BarGraph;
