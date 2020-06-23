import React from 'react';
import { observer, inject } from 'mobx-react'
import clientsData from '../../data'
// inject("ClientsDATA")
import StickyHeadTable from './table'
import '../styles/clientsPage.css'
import UpdateClient from './updateClient';

const comp1 =  (observer((props) => {

    return (
        <div id="clients-page">
            <div id="filter-bar">
                <input type="text" placeholder="search" id="filter-search-bar"/>
                <select name="category" id="filter-dropdown-menu">
                    <option value="name">Name</option>
                    <option value="surName">Sur Name</option>
                    <option value="country">Country</option>
                    <option value="firstContact">first contact</option>
                    <option value="email">Email</option>
                    <option value="sold">Sold</option>
                </select>
            </div>
            <div id="clients-table">
                <StickyHeadTable />
                <UpdateClient />
            </div>
        </div>
    )

}))
        
export default comp1;


