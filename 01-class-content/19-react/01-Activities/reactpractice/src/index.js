import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PLAYERS = [
	{
		name: "Ratthew",
		score: 420,
		id: 1,
	},
	{
		name: "Garland",
		score: 69,
		id: 2,
	},
	{
		name: "Andrea",
		score: 100,
		id: 3,
	},
];

ReactDOM.render(<App players={PLAYERS}/>, document.querySelector('#root'));
registerServiceWorker();