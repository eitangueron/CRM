import './App.css';
import React from 'react';
// eslint-disable-next-line
import { observer, inject } from 'mobx-react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import comp1 from "./components/clients/clients"
import comp2 from './components/actions/actions';
import comp3 from './components/analytics/analytics';
import ButtonAppBar from './navBar';

const App = observer((props) => {
    
    return (
       <div id="app">
         <Router >
           <div id="nav-bar">
           <ButtonAppBar />
           </div>
            <div id="routes">
              <Route path="/clients" exact component={comp1} />
              <Route path="/actions" exact component={comp2} />
              <Route path="/analytics" exact component={comp3} />
            </div>
         </Router>
       </div>
    )
})
        
export default App;


