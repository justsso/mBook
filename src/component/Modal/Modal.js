import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { FaTimes  } from 'react-icons/fa';
import './Modal.less';

export default class Modal extends Component{
    constructor(props){
        super(props);
        this.container = document.createElement('div');
        document.body.appendChild(this.container)
    }
    componentWillUnmount(){
        document.body.removeChild(this.container)
    }
    render(){
        return ReactDOM.createPortal(
            <div className="modal">
                <span className="modal-close"  onClick={this.props.onClose}><FaTimes/></span>
                {
                    this.props.children
                }
            </div>
            ,this.container)
    }
}