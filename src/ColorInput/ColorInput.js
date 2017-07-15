import React from 'react'
import { SketchPicker } from 'react-color'
import './ColorInput.css'

class ColorInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
            color: this.props.color,
            label: this.props.label,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange(color){
        this.props.onValueChange(color.hex);
        this.setState({ color: color.hex })
    };

    render() {

        let colorStyle = {backgroundColor: this.state.color};
        
        return (
            <div>
                <label>{this.state.label}</label>
                <div className="color-input input" onClick={this.handleClick}>
                    <div className="color" style={colorStyle}></div>
                    <div className="hexcolor">{this.state.color}</div>
                </div>
                {this.state.displayColorPicker ? <div className="popover">
                    <div className="cover" onClick={this.handleClose} />
                    <SketchPicker color={this.state.color} onChangeComplete={this.handleChange}  disableAlpha={true} />
                </div> : null}
            </div>
        )
    }
}

export default ColorInput