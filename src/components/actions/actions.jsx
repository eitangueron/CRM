import React from 'react';
import AddNewAclient from './addNewClient';
import { observer, inject } from 'mobx-react'
import UpdateNewClient from './updateNewClient';


const actionsPage = observer((props) => {
    
    return (
       <div>
           <UpdateNewClient />
           <hr/>
           {/* <AddNewAclient /> */}
       </div>
    )
})
        
export default actionsPage;
