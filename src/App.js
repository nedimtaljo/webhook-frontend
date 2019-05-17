import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import LoadingInfo from './components/LoadingInfo/LoadingInfo';
import HookManager from './containers/HookManager/HookManager';
import * as actions from './store/actions/initApp';

class App extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.initApp();
        }, 1000);
    }

    render() {
        const loading = this.props.loading;
        const hooks = this.props.loadedHooks;

        // array does not exist, is not an array, or is empty
        // could define const default hooks in react app to compare with loaded hooks
        // don't know how to detect Webhook running with no default hooks (API) set up. Some bundle magic perhaps?
        const loadingFailed = !Array.isArray(hooks) || !hooks.length;

        let initStatus = "success";
        if (loading) {
            initStatus = "loading";
        }
        if (!loading && loadingFailed) {
            initStatus = "failed"
        }
        let component = initStatus === "success" ? <HookManager /> : <LoadingInfo status={initStatus} />;

        return (
            <Layout>
                {component}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        loadedHooks: state.hooks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initApp: () => dispatch(actions.initApp()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);