import React, {useEffect} from 'react';
import AllTheBadges from './badges';
import '../styles/analytics.css'
import { observer, inject } from 'mobx-react';

const analyticsPage = inject('clientsStore')(observer((props) => {
    
    useEffect(() => {
        props.clientsStore.getClientsFromDB()
    },[])

    return (
       <div>
           <AllTheBadges/>
       </div>
    )
}))
        
export default analyticsPage;
