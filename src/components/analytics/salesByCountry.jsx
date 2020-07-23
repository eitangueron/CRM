import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label,
} from 'recharts';
import { useEffect } from 'react';

const SalesByCountryGraph = inject('clientsStore')(observer((props) => {
    
    const coiuntrySalesData = props.clientsStore.getSalesByCountry
    
    
    const data = Object.keys(coiuntrySalesData).map( o => ({'country':o, 'sales':coiuntrySalesData[o]}))
    data.sort(function(a, b){
        return a.sales-b.sales
    })

    return (
        <div id="salesByCountry" style={{textAlign:'center', display:'inline-block', marginLeft: '2%',  width:'58vw', height:'300px'}}>
            <h3>Sales By Country</h3>
            <ResponsiveContainer width='100%' height="100%">
                <BarChart data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5,}} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" tickCount={8}>
                        {/* <Label value="Country" offset={-10} position="insideBottom" /> */}
                    </XAxis>
                    <YAxis  dataKey="sales">
                        <Label value="Sales" offset={-25} position="left" />
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}))
        
export default SalesByCountryGraph;



