import React from 'react'
import './LineData.css'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS ,
   CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend, } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  );







function LineGraph({lineData, style}) {
  return (
    <div>
      <Line data={lineData} className={style} />
    </div>
  )
}

export default LineGraph