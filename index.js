import React from 'react';
import ReactDOM from 'react-dom/client';
import Appp from './Appp';
import './State.css';
//import './Covid.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//ReactDOM.render(<App/>,document.getElementById('root'));
//uncomment for stopwatch project

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Appp />);



