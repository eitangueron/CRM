import React, {useEffect} from 'react';
import AddNewAclient from './addNewClient';
import { observer, inject } from 'mobx-react'
import UpdateNewClient from './updateNewClient';
import '../styles/actionsPage.css'

const actionsPage = inject('clientsStore')(observer((props) => {
    
    useEffect(() => {
        props.clientsStore.getClientsFromDB()
    },[])

    return (
       <div>
           <UpdateNewClient />
           <hr/>
           <AddNewAclient />
       </div>
    )
}))
        
export default actionsPage;
