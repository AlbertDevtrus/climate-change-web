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
import { defaults } from 'chart.js';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin']
})

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

defaults.font.family = 'Roboto';

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
            weight: 400,
            size: 12,
          }
        }
      },
      y: {
        display: true,
        ticks: {
          padding: 10,
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            weight: 400,
            size: 10,
          }
        }
      }
    },
    plugins: {
      title: {
        text: 'Max temperature per year',
        display: true,
        color: 'rgba(255, 255, 255, 0.9)',
        padding: {
          top: 0,
          bottom: 20
        },
        font: {
          weight: 400,
          size: 16,
        }
      },
      legend: {
        labels: {
          color: 'white',
          boxPadding: 20,
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
        borderColor: 'rgba(0, 0, 255, 0.5)',
        backgroundColor: 'rgb(0, 0, 255)',
        hoverBorderWidth: 20
      }
    ],
  };

  return (
    <div className={`${raleway.className} flex items-center justify-center bg-[#BBBBBB] bg-opacity-30 p-8 rounded-[40px] w-[900px] h-[450px]`}>
      <Line
        options={options}
        data={data} 
      />
    </div>
  )
}
