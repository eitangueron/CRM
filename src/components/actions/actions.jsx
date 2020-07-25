import React from 'react';
import AddNewAclient from './addNewClient';
import { observer, inject } from 'mobx-react'
import UpdateNewClient from './updateNewClient';
import '../styles/actionsPage.css'
import CustomizedSnackbars from '../snackbar/snackBar';

const actionsPage = inject('clientsStore')(observer((props) => {
    

    return (
       <div>
           <UpdateNewClient />
           <hr/>
           <AddNewAclient />
           <CustomizedSnackbars />
       </div>
    )
}))
        
export default actionsPage;
