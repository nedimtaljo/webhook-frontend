import React from 'react';
import classes from './HookItem.module.css';

const HookItem = (props) => {
  return (
    <div className={classes.hookItem} onClick={props.onClick}>
      {props.hookName}   
    </div>
  );
}

export default HookItem;