import React from 'react';
import AllTheBadges from './badges';
import '../styles/analytics.css'
import { observer, inject } from 'mobx-react';
import Graphs from './graphs';

const analyticsPage = inject('clientsStore')(observer((props) => {
    

    return (
       <div>
           <AllTheBadges/>
           <Graphs />
       </div>
    )
}))
        
export default analyticsPage;
