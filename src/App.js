import "./App.css";
import Test from "./line";
import Piee from "./pie";
import AreaApp from "./area";
import MyResponsiveBar from "./Nivo";
// import data from "./data.json";
import data1 from "./data.js";
import MyResponsiveLine from "./NivoLine";
import BarGraph from "./BarGraph";
import Nivodata from "./Nivodata.json";
import MyResponsiveSunburst from "./SunBurst";
import subBurstData from "./subBurstData.json";
import SimpleComposedChart from "./SimpleComposedChart";
import SimpleAreaChart from "./SimpleAreaChart";
import SimpleRadialBarChart from "./SimpleRadialBarChart";
import RadialData from "./RadialData.json";
import RadialBar from "./RadialBar";
import MyResponsiveFunnel from "./Funnel";
import FunnelData from "./FunnelData.json";
import FunnelG from "./FunnelGraph";

const chartData = [
  {
    country: "AD",
    "hot dog": 173,
    "hot dogColor": "hsl(308, 70%, 50%)",
    burger: 167,
    burgerColor: "hsl(105, 70%, 50%)",
    sandwich: 127,
    sandwichColor: "hsl(243, 70%, 50%)",
    kebab: 66,
    kebabColor: "hsl(323, 70%, 50%)",
    fries: 10,
    friesColor: "hsl(201, 70%, 50%)",
    donut: 113,
    donutColor: "hsl(75, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 44,
    "hot dogColor": "hsl(18, 70%, 50%)",
    burger: 190,
    burgerColor: "hsl(29, 70%, 50%)",
    sandwich: 19,
    sandwichColor: "hsl(42, 70%, 50%)",
    kebab: 35,
    kebabColor: "hsl(13, 70%, 50%)",
    fries: 63,
    friesColor: "hsl(219, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(95, 70%, 50%)",
  },
  // Add more data objects as needed
];

function App() {
  const data = [
    { label: "A", value: 10 },
    { label: "B", value: 20 },
    { label: "C", value: 15 },
    { label: "D", value: 5 },
  ];
  return (
    <div className="App">
      <h1>Recharts</h1>
      <div className="row1">
        <Test />

        <Piee />
        <AreaApp />
      </div>
      <div className="row1">
        <SimpleComposedChart />
        <SimpleAreaChart />
        <SimpleRadialBarChart />
      </div>

      <h1>Nivo Charts</h1>
      <div className="row2">
        <MyResponsiveBar data={Nivodata} />
        <MyResponsiveLine data={data} />

        <BarGraph data={data} />
        <MyResponsiveSunburst data={subBurstData} />
      </div>
      <div className="row2">
        <RadialBar data={RadialData} />
        <MyResponsiveFunnel data={FunnelData} />
      </div>
      <FunnelG />
    </div>
  );
}

export default App;
