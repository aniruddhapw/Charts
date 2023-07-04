import React, { useEffect, useRef } from "react";
import FunnelGraph from "funnel-graph-js";

function UseFunnelGraph() {
  const graphContainerRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["Step 1", "Step 2", "Step 3", "Step 4"],
      values: [12000, 5700, 360],
      colors: ["orange", "red"],
    };

    const config = {
      container: graphContainerRef.current,
      data: data,
      direction: "horizontal",
      displayPercent: true,
    };

    const graph = new FunnelGraph(config);
    graph.draw();

    return () => {
      // Clean up: Clear the content of the container element
      graphContainerRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={graphContainerRef} className="funnel"></div>;
}

export default UseFunnelGraph;
