import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label,
} from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';

const SalesByCountryGraph = inject('clientsStore')(observer((props) => {
    

    const [salesByCategory, setCategory] = useState('country')
    let data

    if(salesByCategory==='country'){
        data  = props.clientsStore.getSalesByCountry
    } else if (salesByCategory==='email'){
        data  = props.clientsStore.getSalesByEmail
    } else if (salesByCategory==='month'){

    }
    // const data  = props.clientsStore.getSalesByCountry

    return (
        <div id="salesByCountry" style={{textAlign:'center', display:'inline-block', marginLeft: '2%',  width:'58vw', height:'300px'}}>
            <h3 style={{display:'inline'}}>Sales By </h3>
            <select onChange={(e)=>setCategory(e.target.value)}>
                <option value="country">Country</option>
                <option value="email">Email</option>
                <option value="month">Month (All Time)</option>

            </select>
            <ResponsiveContainer width='100%' height="100%">
                <BarChart data={data.slice(0,8)}
                margin={{top: 5, right: 30, left: 20, bottom: 5,}} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" tickCount={8}>
                        {/* <Label value="Country" offset={-10} position="insideBottom" /> */}
                    </XAxis>
                    <YAxis  dataKey="sales">
                        <Label value="Sales" offset={-25} position="left" />
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="sales" fill="#1b76d1" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}))
        
export default SalesByCountryGraph;



