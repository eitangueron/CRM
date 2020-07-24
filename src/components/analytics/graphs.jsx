import React from 'react';
import TopEmployeesGraph from './topEmploye';
import SalesByCountryGraph from './salesByCountry';
import ClientAccPieChart from './clientAcc';

const Graphs = (props) => {
    

    return (
        <div id="all-graphs">
            <TopEmployeesGraph />
            <SalesByCountryGraph />
            {/* <ClientAccPieChart /> */}
        </div>
    )
}
        
export default Graphs;
