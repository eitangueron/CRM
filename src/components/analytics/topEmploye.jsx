import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label,
} from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';

const TopEmployeesGraph = inject('clientsStore')(observer((props) => {
    
    const ownersSalesData = props.clientsStore.getOwnersSalesData
    
    const data = Object.keys(ownersSalesData).map( o => ({'ownerName':o, 'Sales':ownersSalesData[o]}))
    data.sort(function(a, b){
        return b.Sales-a.Sales
    })

    return (
        <div id="topEmployeesGraph" style={{textAlign:'center', display:'inline-block', width:'39vw'}}>
            <h3>Top Employees</h3>
            <ResponsiveContainer width='100%' height="100%">
                <BarChart data={data.slice(0,3)}
                width = '100%'
                margin={{top: 5, right: 30, left: 20, bottom: 5,}} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ownerName" tickCount={6}>
                        {/* <Label value="Owners" offset={-5} position="insideBottom" /> */}
                    </XAxis>
                    <YAxis  dataKey="Sales">
                        <Label value="Sales" offset={-25} position="left" />
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="Sales" fill="#1b76d1" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}))
        
export default TopEmployeesGraph;



