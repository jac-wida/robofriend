import React from 'react';

class ErrorBoundry extends React.Component{
    constructor(){
        super();
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Opps Something went Wrong.......</h1>
        }
        return this.props.children;

    }
}

export default ErrorBoundry;