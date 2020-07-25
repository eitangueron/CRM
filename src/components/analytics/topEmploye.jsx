import { inject, observer } from 'mobx-react';
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
//    Legend,
    ResponsiveContainer, Label,
    //  LabelList,
      Cell,
} from 'recharts';


const TopEmployeesGraph = inject('clientsStore')(observer((props) => {
    
    const data = props.clientsStore.getOwnersSalesData
    
    const colors = ['gold', 'silver', '#cd7f32']

    return (
        <div id="topEmployeesGraph" style={{textAlign:'center', display:'inline-block', width:'39vw'}}>
            <h3 style={{display: 'inline'}}>Top Employees</h3>
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
                    {/* <Bar dataKey="Sales" fill="#1a76d2" /> */}
                    <Bar dataKey="Sales">
                        {
                        data.slice(0,3).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}))
        
export default TopEmployeesGraph;



