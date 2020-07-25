import './App.css';
import React, {useEffect} from 'react';
// eslint-disable-next-line
import { observer, inject } from 'mobx-react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import clientsPage from "./components/clients/clients"
import actionsPage from './components/actions/actions';
import analyticsPage from './components/analytics/analytics';
import ButtonAppBar from './components/navBar/navBar';

const App = inject('clientsStore')(observer((props) => {
  
  useEffect(() => {
    props.clientsStore.getClientsFromDB()
    props.clientsStore.getCountries()
    // eslint-disable-next-line
      },[])


    return (
       <div id="app">
         <Router >
           <div id="nav-bar">
           <ButtonAppBar />
           </div>
            <div id="routes">
              <Route path="/" exact component={clientsPage}/>
              <Route path="/clients" exact component={clientsPage} />
              <Route path="/actions" exact component={actionsPage} />
              <Route path="/analytics" exact component={analyticsPage} />
            </div>
         </Router>
       </div>
    )
}))
        
export default App;


