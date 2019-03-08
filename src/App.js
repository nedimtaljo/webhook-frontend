import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import HookManager from './containers/HookManager/HookManager';
import Spinner from './components/UI/Spinner/Spinner';
import * as actions from './store/actions/initApp';

class App extends Component {
    componentDidMount() {
        this.props.initApp();
    }

    render() {
        const loading = this.props.loading;
        const hooks = this.props.loadedHooks;
        let component = loading ? <Spinner /> : <HookManager />

        // array does not exist, is not an array, or is empty
        // this could be written as a more precise default hooks check
        const loadingFailed = !Array.isArray(hooks) || !hooks.length;
        if (!loading && loadingFailed) {
            component = <p style={{textAlign: "center"}}>Webhook not found on port 9000</p>
        }

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