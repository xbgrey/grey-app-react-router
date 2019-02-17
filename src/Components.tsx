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