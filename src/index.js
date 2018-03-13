import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import createStore from './configStore/configStore';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// const store = createStore();

ReactDOM.render(
        <Router>
            <App />
        </Router>
   , document.getElementById('root'));

registerServiceWorker();
