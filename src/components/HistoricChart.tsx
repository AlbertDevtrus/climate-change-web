'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function HistoricChart() {

  const options: ChartOptions<'line'> = {
    responsive: true,
    layout: {
      padding: 0
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        color: 'white',
        text: 'All time temperature variation.',
      },
    },
    backgroundColor: 'white',
    color: 'rgba(255, 255, 255, 0.6)'
  };

  const data: ChartData<'line'> = {
    labels: ['2001', '2002', '2003'],
    datasets: [
      {
        label: 'Dataset 1',
        data: ['2001', '2002', '2003'].map(year => Number(year) * 2),
        borderColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: ['2001', '2002', '2003'].map(year => Number(year) * 3),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className='flex items-center justify-center bg-[#BBBBBB] bg-opacity-20 p-8 rounded-[40px]'>
      <Line
        options={options}
        data={data} 
      />
    </div>
  )
}
