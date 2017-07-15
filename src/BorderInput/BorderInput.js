import React from 'react'
import SimpleInput from '../SimpleInput/SimpleInput.js';
import ColorInput from '../ColorInput/ColorInput.js';

class BorderInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color || '#dddddd',
            thickness: this.props.thickness || 0,
            radius: this.props.radius || 0,
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleThicknessChange = this.handleThicknessChange.bind(this);
        this.handleRadiusChange = this.handleRadiusChange.bind(this);
    }

    handleColorChange(color) {
        this.setState({ color: color });
        this.props.onValueChange(this.state);
    };
    handleThicknessChange(thickness) {
        this.setState({ thickness: thickness }, () => this.props.onValueChange(this.state));
    };
    handleRadiusChange(radius) {
        this.setState({ radius: radius }, () => this.props.onValueChange(this.state));
    };

    render() {

        return (
            <div>
                <div className="input-group">
                    <label>Border Thickness</label>
                    <SimpleInput type="number" onValueChange={this.handleThicknessChange} defaultValue={this.state.thickness} />
                </div>
                <div className="input-group">
                    <label>Border Radius</label>
                    <SimpleInput type="number" onValueChange={this.handleRadiusChange} defaultValue={this.state.radius} />
                </div>
                <div className="input-group">
                    <ColorInput onValueChange={this.handleColorChange} color={this.state.color} label="Border Color" />
                </div>
            </div>
        )
    }
}

export default BorderInput