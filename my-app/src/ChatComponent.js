import React from 'react';
import BarGraph from './components/BarGraph';
import LineGraph from './components/LineGraph';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import DoughnutChart from './components/DoughnutChart';

const ChatComponent = () => {

  const lineGraphRef = React.useRef(LineGraph);
  const barGraphRef = React.useRef(BarGraph);
  const pieChartRef = React.useRef(PieChart);
  const radarChartRef = React.useRef(RadarChart);
  const doughnutChartRef = React.useRef(DoughnutChart);

  return (
    <div>
      <h1>Chat Component</h1>
      <LineGraph ref={lineGraphRef} />
      <BarGraph ref={barGraphRef} />
      <PieChart ref={pieChartRef} />
      <RadarChart ref={radarChartRef} />
      <DoughnutChart ref={doughnutChartRef} />
    </div>
  );
};

export default ChatComponent;


