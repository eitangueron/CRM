import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import {ClientsStore} from './components/stores/ClientsStore'

// import {Store as store} from './stores/storeName'

const clientsStore = new ClientsStore()

const stores = {clientsStore}   //insert stores here

ReactDOM.render(<Provider {...stores}><App /></Provider>,document.getElementById('root')
);

serviceWorker.unregister();

