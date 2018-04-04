import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if (PRODUCTION && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
