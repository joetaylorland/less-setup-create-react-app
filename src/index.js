import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app-component';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
