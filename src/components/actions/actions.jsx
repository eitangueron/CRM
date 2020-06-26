import React from 'react';
import AddNewAclient from './addNewClient';
import { observer } from 'mobx-react'
import UpdateNewClient from './updateNewClient';
import '../styles/actionsPage.css'

const actionsPage = observer((props) => {
    
    return (
       <div>
           <UpdateNewClient />
           <hr/>
           <AddNewAclient />
       </div>
    )
})
        
export default actionsPage;
