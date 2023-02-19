import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './Rout'
import {BrowserRouter} from 'react-router-dom'
import People from './components/People/People'
ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
<Route />
</BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);

