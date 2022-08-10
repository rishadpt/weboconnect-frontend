import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Essentialprovider from './Context/EssentialContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Essentialprovider>
    <App />
    </Essentialprovider>
  </React.StrictMode>
);


