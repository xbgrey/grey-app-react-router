import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createHistory from 'history/createBrowserHistory'

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);

const h = createHistory()
h.listen((location, action)=>{
    console.log('location:', location);
    console.log('action:', action);
})
h.replace('/a/a/a/a/');