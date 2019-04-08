import React, { Component } from 'react';
import { connect }from 'react-redux';

import HookList from '../../components/HookList/HookList';
import classes from './HookManager.module.css';

class HookManager extends Component {
    state = {
        activeHookId: "",
    }

    handleSelectHook = hookId => {
        this.setState({ activeHookId: hookId });
    }

    render() {
        let activeHook = null;
        const activeHookId = this.state.activeHookId;
        if (activeHookId !== "") {
            activeHook = this.props.hooks.find(hook => hook.id === activeHookId);
        }

        return (
            <>
                <div className={classes.flexSection}>
                    <HookList
                        hooks={this.props.hooks}
                        activeHookId={activeHookId}
                        onClick={this.handleSelectHook} />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        hooks: state.hooks,
    }
}

export default connect(mapStateToProps)(HookManager);