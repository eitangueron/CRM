import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react'
// import clientsData from '../../data'
// inject("ClientsDATA")
import StickyHeadTable from './clientsTable'
import '../styles/clientsPage.css'
import CustomizedSnackbars from '../snackbar/snackBar';

const clientsPage =  inject('clientsStore')(observer((props) => {
    
    const clientsStore = props.clientsStore
    
    useEffect(() => {
        props.clientsStore.getClientsFromDB()
        // eslint-disable-next-line
          },[])

    return (
        <div id="clients-page">
            <div id="filter-bar">
                <input type="text" placeholder="Search Client By" id="filter-search-bar" value={clientsStore.filterVal} onChange={(e)=>clientsStore.setFilterVal(e.target.value)}/>
                <select name="category" id="filter-dropdown-menu" value={clientsStore.filterCategory} onChange={(e)=>clientsStore.setFilterCategory(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="surName">Sur Name</option>
                    <option value="country">Country</option>
                    <option value="emailType">Email</option>
                    <option value="sold">Sold</option>
                </select>
            </div>
            <div id="clients-table">
                <StickyHeadTable />
            </div>
            
            <CustomizedSnackbars />
            
        </div>
    )

}))
        
export default clientsPage;


