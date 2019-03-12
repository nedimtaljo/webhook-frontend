import React from 'react';
import HookItem from './HookItem/HookItem';
import classes from './HookList.module.css';

const HookList = props => {
    const hooks = props.hooks.map(hook =>
        <HookItem
            hookName={hook.id}
            active={props.activeHookId === hook.id}
            onClick={props.onClick}
            key={hook.id} />
    );
    // The two API hooks should be hidden from display, or at least be protected from modification

    return (
        <div className={classes.hookList}>
            {hooks}
        </div>
    );
}

export default HookList;