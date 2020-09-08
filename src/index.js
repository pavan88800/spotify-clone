import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initailstate } from './reducer';
ReactDOM.render(
	<React.StrictMode>
		<DataLayer initailSatet={initailstate} reducer={reducer}>
			<App />
		</DataLayer>
	</React.StrictMode>,
	document.getElementById('root')
);
