import React, { Component } from 'react';
import classes from './HookItem.module.css';

class HookItem extends Component {
    handleHookClick = () => this.props.onClick(this.props.hookName);
    
    render() {
        let appliedClasses = [classes.hookItem];
        if (this.props.active) {
            appliedClasses.push(classes.active);
        }

        return (
            <div className={appliedClasses.join(' ')} onClick={this.handleHookClick}>
                {this.props.hookName}
            </div>
        );
    }
}

export default HookItem;