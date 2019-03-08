import React, { Component } from 'react';
import classes from './HookLoader.module.css';

class HookLoader extends Component {
    submitForm = event => this.props.submitForm(event);
    inputChange = event => this.props.inputChange(event);

    render() {
        let status = null;
        switch (this.props.loadStatus) {
        case 'loading':
            status = 'Loading...';
            break;
        case 'loaded':
            status = 'Hooks configuration successfully loaded!'
            break;
        case 'error':
            status = 'Error loading hooks configuration! Webhook endpoint not found!';
            break;
        case 'invalid':
            status = 'Please enter a valid URL!';
            break;
        default:
            status = "Enter Webhook 'read-hooks' endpoint to load hooks configuration";
        }
        
        return (
            <div className={classes.content}>
                <form className={classes.form} onSubmit={this.submitForm}>
                    <label>
              WebhookURL:
                        <input type='text' value={this.props.inputValue} onChange={this.inputChange} />
                    </label>
                    <button type='submit'>Submit</button>
                    <p>{status}</p>
                </form>
            </div>
        );
    }
}

export default HookLoader;