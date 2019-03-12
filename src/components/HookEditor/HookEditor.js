import React from 'react';
import classes from './HookEditor.module.css';

const HookEditor = props => {
    let hook = props.activeHook;
    if (hook) {
        hook = JSON.stringify(hook, null, 2);
    }

    return (
        <div className={classes.hookEditor}>
            <pre>{hook}</pre>
        </div>
    );
}

export default HookEditor;