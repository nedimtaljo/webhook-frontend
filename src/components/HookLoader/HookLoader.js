import React from 'react';
import classes from './HookLoader.module.css';

const HookLoader = props => {
    let status = null;
    switch (props.loadStatus) {
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
            <form className={classes.form} onSubmit={event => props.submitForm(event)}>
                <label>
          WebhookURL:
                    <input type='text' value={props.inputValue} onChange={event => props.inputChange(event)} />
                </label>
                <button type='submit'>Submit</button>
                <p>{status}</p>
            </form>
        </div>
    );
}

export default HookLoader;