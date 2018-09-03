import React, {Component} from 'react';
import './ErrorBoundary.less';
class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: false,
            info: ''
        }
    }

    componentDidCatch(err, info){
        this.setState({
            error,
            info
        })
    }

    render(){
        if(this.state.error){
            return <p>{this.state.error.toString()}</p>
        }
        return this.props.children
    }
}


export default ErrorBoundary