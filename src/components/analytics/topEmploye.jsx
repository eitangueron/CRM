import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const TopEmployeesGraph = inject('clientsStore')(observer((props) => {
    
    // const data = [
    //     {
    //       "ownerName": "Page A",
    //       "uv": 4000,
    //     //   "pv": 2400
    //     }
    //             ]

    const data = props.clientsStore.getOwners.map( o => ({'ownerName':o, 'Sales':2000}))

    return (
        <div id="topEmployeesGraph" >
            {/* <ResponsiveContainer width='100%' height="100%"> */}
                <BarChart width={730} height={250} data={data} 
                margin={{top: 5, right: 30, left: 20, bottom: 5,}} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ownerName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sales" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    )
}))
        
export default TopEmployeesGraph;



