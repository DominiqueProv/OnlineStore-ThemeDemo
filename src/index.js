import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { items, sellers } from './data';



const rootElement = document.getElementById('root');
ReactDOM.render(<App listing={items} sellers={sellers} />, rootElement);



