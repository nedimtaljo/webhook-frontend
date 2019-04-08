import React, { Component } from 'react';
import classes from './HookItem.module.css';
import { Button, TYPES } from '../HookItem/Button/Button';
import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import hookIcon from '../../../assets/icons/hook.svg';


class HookItem extends Component {
    handleHookClick = () => this.props.onClick(this.props.hookName);
    
    render() {
        return (
            <div className={classes.hookItem}>
                <div className={classes.left}>
                    <img src={hookIcon} alt="J" />
                    <span>{this.props.hookName}</span>
                </div>
                <div className={classes.center}>
                    <Button content="script.sh" buttonType={TYPES.SH_SCRIPT} />
                </div>
                <div className={classes.right}>
                    <Button content={editIcon} buttonType={TYPES.FUNCTIONAL} alt="Edit" />
                    <Button content={deleteIcon} buttonType={TYPES.FUNCTIONAL} alt="Add" />
                </div>
            </div>
        );
    }
}

export default HookItem;