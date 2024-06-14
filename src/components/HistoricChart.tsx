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
} from 'chart.js'
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
    scales: {
      x: {
        display: true,
        ticks: {
          color: 'white',
          padding: 10,
          font: {
            size: 14
          }
        }
      },
      y: {
        display: true,
        ticks: {
          padding: 10,
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    plugins: {
      title: {
        text: 'Max temperature per year',
        display: true,
        color: 'white',
        padding: {
          top: 0,
          bottom: 20
        },
        font: {
          size: 20,
        }
      },
      legend: {
        labels: {
          color: 'white',
          boxPadding: 20
        }
      },
    }
  };

  const data: ChartData<'line'> = {
    labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [2332, 2380, 2290, 2432, 2124, 2340, 2894],
        borderColor: 'rgba(255, 0, 0, 0.2)',
        backgroundColor: 'rgb(255, 0, 0)',
        hoverBorderWidth: 20
      }
    ],
  };

  return (
    <div className='flex items-center justify-center bg-[#BBBBBB] bg-opacity-20 p-8 rounded-[40px] w-[900px] h-[450px]'>
      <Line
        options={options}
        data={data} 
      />
    </div>
  )
}
