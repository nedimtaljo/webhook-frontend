import React from 'react';
import classes from './HookItem.module.css';

const HookItem = props => {
    let appliedClasses = [classes.hookItem];
    if (props.active) {
        appliedClasses.push(classes.active);
    }

    return (
        <div className={appliedClasses.join(' ')} onClick={props.onClick}>
            {props.hookName}   
        </div>
    );
}

export default HookItem;