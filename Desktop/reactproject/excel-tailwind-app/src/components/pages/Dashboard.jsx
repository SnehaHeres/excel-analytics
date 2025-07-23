import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ✅ Register chart elements
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 250],
        backgroundColor: "rgba(59, 130, 246, 0.6)", // Tailwind blue
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        📊 Sales Bar Chart
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;