import React from 'react';
import classes from './Button.module.css';

export const TYPES = {
    FUNCTIONAL: 'functional',
    SH_SCRIPT: 'script',
}

export const Button = props => {
    let content = props.content;
    if (props.buttonType === 'functional') {
        content = <img src={props.content} alt={props.alt} />;
    }

    return <button className={[classes.general, classes[props.buttonType]].join(' ')} >{content}</button>;
}