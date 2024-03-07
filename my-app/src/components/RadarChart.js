import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My Radar Chart',
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

function RadarChart() {
  return (
    <div>
      <h2>My Radar Chart</h2>
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;
