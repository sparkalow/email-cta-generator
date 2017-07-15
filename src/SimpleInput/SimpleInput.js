import React, {Component} from 'react';

export default class SimpleInput extends Component {

     constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
            type: props.type,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.props.onValueChange(e.target.value);
    }
    
    render() {
        return (
            <input type={this.state.type} className={this.props.className} onChange={this.handleChange} defaultValue={this.state.value} />
        );
    }
}