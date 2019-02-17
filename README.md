## 一个可以没有历史记录的路由

### github
https://github.com/xbgrey/grey-app-react-router

### 实例
#### app.tsx
```ts
import * as React from 'react';
import { Route, Link, Switch, Router } from 'grey-app-react-router';
import { Component1, Component2, Component3, Component4 } from './Components';
import './App.css';

Router.createHistory({
    basename: '/xxx/#'
})

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Link to='/a?a=1'>to-a</Link>|
                <Link to='/b'>to-b</Link>|
                <Link to='/c/a'>to-c</Link>|
                <Link to='/d'>to-d</Link>

                <Switch default={0} >
                    <Route cache={true} path="/a" component={Component1} />
                    <Route cache={true} path="/b" component={Component2} />
                    <Route cache={false} path="/c" component={AppToA} />
                    <Route cache={false} path="/d" component={Component4} />
                </Switch>
            </div>
        );
    }
}

class AppToA extends React.Component {
    public render() {
        return (
            <div className="AppToA">
                <Link to='/c/ss1?a=1'>c-a</Link>|
                <Link to='/c/ss2'>c-b</Link>|
                <Link to='/c/ss3'>c-c</Link>|
                <Link to='/c/ss4'>c-d</Link>

                <Switch default={0} className="x" >
                    <Route cache={true} path="/c/ss1" component={Component1} />
                    <Route cache={true} path="/c/ss2" component={Component2} />
                    <Route cache={true} path="/c/ss3" component={Component3} />
                    <Route cache={true} path="/c/ss4" component={Component4} />
                </Switch>
            </div>
        );
    }
}

export default App;
```

#### Components.tsx
```ts
import * as React from 'react';
import { Router, PageBasis } from 'grey-app-react-router';

export class Component1 extends React.PureComponent<any> {
    public render() {
        return (
            <div>
                你的组件1{Router.history.location.pathname}<input/>
            </div>
        );
    }

    public componentWillUnmount(){
        console.log('Component1')
    }
}

export class Component2 extends PageBasis<any> {
    public render() {
        return (
            <div>
                你的组件2{Router.history.location.pathname}<input/>
            </div>
        );
    }

    public renewRender(){
        console.log('Component2-renewRender');
    }

    public componentWillUnmount(){
        console.log('Component2')
    }
}

export class Component3 extends React.PureComponent<any> {
    public render() {
        return (
            <div>
                你的组件3{Router.history.location.pathname}<input/>
            </div>
        );
    }

    public componentWillUnmount(){
        console.log('Component3')
    }
}

export class Component4 extends React.PureComponent<any> {
    public render() {
        return (
            <div>
                你的组件4{Router.history.location.pathname}<input/>
            </div>
        );
    }

    public componentWillUnmount(){
        console.log('Component4')
    }
}
```