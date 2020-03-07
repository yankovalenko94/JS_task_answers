import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return <Error/>
        }

        return this.props.children;
    }
}