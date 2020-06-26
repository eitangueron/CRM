import React from 'react';
import AddNewAclient from './addNewClient';
import UpdateClient from '../clients/updateClient';
import { observer, inject } from 'mobx-react'


const actionsPage = observer((props) => {
    
    return (
       <div>
           {/* <UpdateClient /> */}
           <AddNewAclient />
       </div>
    )
})
        
export default actionsPage;
