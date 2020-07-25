import { inject, observer } from 'mobx-react';
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
//   Legend,
   ResponsiveContainer, Label,
} from 'recharts';
import { useState } from 'react';

const SalesByCountryGraph = inject('clientsStore')(observer((props) => {
    

    const [salesByCategory, setCategory] = useState('country')
    let barAmmount = 8
    let data

    if(salesByCategory==='country'){
        data  = props.clientsStore.getSalesByCountry
        barAmmount = 8
    } else if (salesByCategory==='email'){
        data  = props.clientsStore.getSalesByEmail
        barAmmount = 5
    } else if (salesByCategory==='month'){
        data  = props.clientsStore.getSalesByMonths
        barAmmount = 12
    } 
    // const data  = props.clientsStore.getSalesByCountry

    return (
        <div id="salesByCountry" style={{textAlign:'center', display:'inline-block', marginLeft: '2%',  width:'58vw', height:'300px'}}>
            <h3 style={{display:'inline'}}>Sales By </h3>
            <select onChange={(e)=>setCategory(e.target.value)}>
                <option value="country">Country</option>
                <option value="email">Email</option>
                <option value="month">Month (All Year)</option>
            </select>
            <ResponsiveContainer width='100%' height="100%">
                <BarChart data={data.slice(0,barAmmount)}
                margin={{top: 5, right: 30, left: 20, bottom: 5,}} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" tickCount={8}>
                        {/* <Label value="Country" offset={-10} position="insideBottom" /> */}
                    </XAxis>
                    <YAxis  dataKey="sales">
                        <Label value="Sales" offset={-25} position="left" />
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="sales" fill="#1a76d2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}))
        
export default SalesByCountryGraph;



