import React, { Component } from 'react';
import './App.css';
import SimpleInput from './SimpleInput/SimpleInput.js';
import ColorInput from './ColorInput/ColorInput.js';
import BorderInput from './BorderInput/BorderInput.js';
import HtmlOutput from './HtmlOutput/HtmlOutput.js';


function Preview(props) {
    return (
        <div className="preview-container">
        <div className="preview">
            <div dangerouslySetInnerHTML={props.value}></div>
        </div>
        </div>
    )
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            url: '#',
            label: "Button Label",
            fontSize: '14',
            backgroundColor: '#0693E3',
            labelColor: '#ffffff',
            showBorder: false,
            padding:5,
            border: {
                size: 0,
                radius: 0,
                color: '#000000',
            }
        };
        this.handleButtonLabelChange = this.handleButtonLabelChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
        this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
        this.handleLabelColorChange = this.handleLabelColorChange.bind(this);
        this.handlePaddingChange = this.handlePaddingChange.bind(this);
        this.handleBorderChange = this.handleBorderChange.bind(this);
    }

    generateHtml() {
        let borderStyle = this.state.border.thickness >= 1 ? `border: ${this.state.border.thickness}px solid ${this.state.border.color}` : 'border:0';
        let borderRadiusStyle = this.state.border.radius > 0 ? `border-radius:${this.state.border.radius}px` : 'border-radius:0';

        let template = `<table class="cta" style="border-spacing: 0; ${borderRadiusStyle};" border="0" cellspacing="0" cellpadding="0" align="center">
    <tr>
        <td style="border-collapse: collapse; font-family: Arial, sans-serif;${borderStyle};${borderRadiusStyle};" align="center" valign="middle" bgcolor="${this.state.backgroundColor}">
            <a href="${this.state.url}" style="${borderRadiusStyle};border: ${this.state.padding}px solid ${this.state.backgroundColor};color: ${this.state.labelColor}; display: inline-block; padding: 12px 33px; text-decoration: none; text-transform: uppercase; font-size: ${this.state.fontSize}px;" target="_blank"> 
            <!--[if mso]> <![endif]--> ${this.state.label} <!--[if mso]> <![endif]--> 
            </a>
        </td>
    </tr>
</table>`;

        return { __html: template };
    }

    handleButtonLabelChange(value) {
        this.setState({ label: value });
    }

    handleUrlChange(value) {
        this.setState({ url: value });
    }

    handleBorderChange(value) {
        this.setState({ border: value });
    }

    handleFontSizeChange(value) {
        value = parseInt(value, 10);
        this.setState({ fontSize: value });
    }

    handlePaddingChange(value) {
        value = parseInt(value, 10);
        this.setState({ padding: value });
    }

    handleBackgroundColorChange(value) {
        this.setState({ backgroundColor: value });
    }
    
    handleLabelColorChange(value) {
        this.setState({ labelColor: value });
    }

    render() {

        return (
            <div className="app container">
                <div className="col-half form">
                    <Preview value={this.generateHtml()} />
                    <div className="col-half">
                        <div className="input-group">
                            <label>Button Label</label>
                            <SimpleInput id="label" type="text" onValueChange={this.handleButtonLabelChange} defaultValue={this.state.label} />
                        </div>
                        <div className="input-group">
                            <label>Font Size <small></small></label>
                            <SimpleInput id="font-size" type="number" onValueChange={this.handleFontSizeChange} defaultValue={this.state.fontSize} />
                        </div>
                        <div className="input-group">
                            <label>Padding<small></small></label>
                            <SimpleInput id="padding" type="number" onValueChange={this.handlePaddingChange} defaultValue={this.state.padding} />
                        </div>
                        <div className="input-group">
                            <ColorInput onValueChange={this.handleBackgroundColorChange} label="Background Color" color={this.state.backgroundColor} />
                        </div>
                    </div>
                    <div className="col-half">
                        <div className="input-group">
                            <ColorInput onValueChange={this.handleLabelColorChange} color={this.state.labelColor} label="Label Color" />
                        </div>
                        <div className="input-group">
                            <BorderInput onValueChange={this.handleBorderChange} color={this.state.border.color} radius={this.state.radius} />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Url</label>
                        <SimpleInput id="url" className='wide' type="url" onValueChange={this.handleUrlChange} defaultValue={this.state.url} />
                    </div>
                </div>
                <div className="col-half">
                    <div id="output-container">
                        <HtmlOutput value={this.generateHtml().__html} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;