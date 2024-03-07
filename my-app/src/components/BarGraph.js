import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Revenue',
      data: [1500, 2300, 1200, 3200, 2000, 3000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
  },
};

function BarGraph() {
  return (
    <div>
      <h2>Monthly Revenue Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarGraph;
