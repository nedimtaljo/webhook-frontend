import React, { Component } from 'react';
import { connect }from 'react-redux';

import HookLoader from '../../components/HookLoader/HookLoader';
import HookList from '../../components/HookList/HookList';
import HookEditor from '../../components/HookEditor/HookEditor';
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
                <HookLoader />
                <div className={classes.flexSection}>
                    <HookList
                        hooks={this.props.hooks}
                        activeHookId={activeHookId}
                        onClick={this.handleSelectHook} />
                    <HookEditor activeHook={activeHook} />
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