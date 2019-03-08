import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import HookManager from './containers/HookManager/HookManager';

class App extends Component {
    render() {
        return (
            <Layout>
                <HookManager />
            </Layout>
        );
    }
}

export default App;