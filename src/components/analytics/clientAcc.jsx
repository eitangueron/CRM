import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  PieChart, Pie,
  //  Sector,
   Cell,
} from 'recharts';
import { Tooltip } from '@material-ui/core';

const ClientAccPieChart = inject('clientsStore')(observer((props) => {


    // const clientsAmmount = props.clientsStore.clientsNum

    // const cleintsLastMonth = props.clientsStore.getClientsFromLastMonth
    // const clientsFromThisMonth = props.clientsStore.getClientsFromMonth
    // const earlierClients = clientsAmmount - cleintsLastMonth - clientsFromThisMonth

    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Last Month', value: 300 },
      { name: 'Earlier', value: 300 },
    ];
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
       const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    const data01 = [
        { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
      ];
      
        return (
            <div id="pieChart" style={{ display:'inline-block', marginLeft: '2%',  width:'58vw'}}>
                <h3>Client Acqusition</h3>
                <PieChart width={400} height={400}>
                    <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                    </Pie>
                </PieChart>
                <PieChart width={400} height={400}>
          <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
            </div>
        );
      }))
    


export default ClientAccPieChart;

