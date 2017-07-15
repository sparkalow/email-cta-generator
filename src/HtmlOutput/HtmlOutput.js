import React, {Component} from 'react';
import './HtmlOutput.css'

export default class HtmlOutput extends Component {
    
    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
    };

    handleChange(e) {
        this.props.onValueChange(e.target.value);
    }
    
    render() {
        return (
        <div>
            <div className="code-output"> 
            <p>Copy the HTML below for use in your email.</p>
                <textarea id="html-output" readOnly value={this.props.value} rows="18" spellCheck="false" ref={(textarea) => this.textArea = textarea}></textarea>
                <span className="btn-copy" onClick={this.copyToClipboard}>copy to clipboard</span>
            </div>
        </div>
        );
    }
}
