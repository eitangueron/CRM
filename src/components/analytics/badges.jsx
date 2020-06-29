import React from 'react';
import Badge from './Badge';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PublicIcon from '@material-ui/icons/Public';
import {inject, observer} from 'mobx-react'

const AllTheBadges = inject('clientsStore')(observer((props) => {
    
    const clientsStore = props.clientsStore

    const getMonthRN = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const d = new Date()
        const m = d.getMonth()
        const monthNow = months[m]
        return monthNow
    }



    const allBadges = [
        {id:'newClientsThisMonth-badge', color:'limegreen',symbol:<TrendingUpOutlinedIcon/>, value:clientsStore.getClientsFromMonth, description:`New ${getMonthRN()} Clients`},
        {id:'emailsSent-badge', color:'blue',symbol:<MailOutlineIcon/>, value:clientsStore.getEmailsNumber, description:`Emails Sent`},
        {id:'outStanding-badge', color:'red',symbol:<AccountCircleIcon/>, value:clientsStore.getOutstandingClients, description:`Outstanding Clients`},
        {id:'hottestCountry-badge', color:'yellow',symbol:<PublicIcon/>, value:clientsStore.getMostHotCountry, description:`Hottest Country`}
    ]

    return (
        <div id="all-badges">
            {allBadges.map( b => <Badge id={b.id} color={b.color} symbol={b.symbol} value={b.value} description={b.description} key={b.id}/> )}
        </div>
    )
}))
        
export default AllTheBadges;
