import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Boiler from './containers/Boiler';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Boiler />, document.getElementById('root'));
registerServiceWorker();
