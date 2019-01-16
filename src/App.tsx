import * as React from 'react';
import { Route, Link, Switch } from 'grey-app-react-router';
import { Component1, Component2, Component3, Component4 } from './Components';
import './App.css';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Link to='/a'>to-a</Link>|
                <Link to='/b'>to-b</Link>|
                <Link to='/c'>to-c</Link>|
                <Link to='/d'>to-d</Link>

                <Switch>
                    <Route path="/a" component={Component1} />
                    <Route path="/b" component={Component2} />
                    <Route path="/c" component={Component3} />
                    <Route path="/d" component={Component4} />
                    {/* <Route render={() => <Redirect path="/a" />} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
