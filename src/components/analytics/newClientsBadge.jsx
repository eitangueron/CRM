import React from 'react';
// const capitalize = require('capitalize')
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';

const NewClientsBadge = (props) => {
    
    const getMonthRN = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const d = new Date()
        const m = d.getMonth()
        const monthNow = months[m]
        return monthNow
    }

    return (
       <div id="new-clients-badge">
           <div id="badge">
                <TrendingUpOutlinedIcon />
           </div>
           <h2 id="amount-of-new-clients">14</h2>
           <h4 id="description-of-badage">New {monthNow} Clients</h4>
       </div>
    )
}
        
export default NewClientsBadge;
