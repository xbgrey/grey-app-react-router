import * as React from 'react';
import { IComponentProps } from 'grey-app-react-router/Route';

export class Component1 extends React.PureComponent<IComponentProps> {
    public render() {
        return (
            <div>
                你的组件1{this.props.location.pathname}
            </div>
        );
    }
}

export class Component2 extends React.PureComponent<IComponentProps> {
    public render() {
        return (
            <div>
                你的组件2{this.props.location.pathname}
            </div>
        );
    }
}

export class Component3 extends React.PureComponent<IComponentProps> {
    public render() {
        return (
            <div>
                你的组件3{this.props.location.pathname}
            </div>
        );
    }
}

export class Component4 extends React.PureComponent<IComponentProps> {
    public render() {
        return (
            <div>
                你的组件4{this.props.location.pathname}
            </div>
        );
    }
}