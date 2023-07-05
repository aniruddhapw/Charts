import React from "react";
import FunnelGraph from "funnel-graph-js";
import "./FunnelGraph.css";
console.log(FunnelGraph);

var examples = [
  {
    values: [11000, 3000, 240],
    colors: ["#FFB178", "#FF3C8E"],
  },
  {
    labels: ["Impressions 2", "Add To Cart 2", "Buy 2"],
    colors: ["#A0BBFF", "#EC77FF"],
    values: [12000, 5700, 360],
  },
  {
    labels: ["Impressions", "Add To Cart", "Buy"],
    subLabels: ["Direct", "Social Media", "Ads"],
    colors: [
      ["#FFB178", "#FF78B1", "#FF3C8E"],
      ["#A0BBFF", "#EC77FF"],
      ["#A0F9FF", "#7795FF"],
    ],
    values: [
      [3500, 2500, 6500],
      [3300, 1400, 1000],
      [600, 200, 130],
    ],
  },
];

function FunnelG() {
  var graphs = [];

  for (var i = 0; i < examples.length; i++) {
    var graph = new FunnelGraph({
      container: "#examplefunnel" + i,
      gradientDirection: "horizontal",
      data: examples[i],
      displayPercent: true,
      direction: "horizontal",
      width: 800,
      height: 300,
      subLabelValue: "percent",
    });

    graph.draw();
    graphs.push(graph);
  }

  console.log("Graphs spawned: ", graphs);
  return (
    <div className="example-funnels">
      <div className="funnel" id="examplefunnel0"></div>
      <div className="funnel" id="examplefunnel1"></div>
      <div className="funnel" id="examplefunnel2"></div>
    </div>
  );
}

export default FunnelG;
