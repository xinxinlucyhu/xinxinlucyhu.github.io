import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
