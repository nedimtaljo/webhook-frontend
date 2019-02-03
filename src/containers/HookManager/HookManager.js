import React, { Component } from 'react';
import axios from 'axios';

import HookLoader from '../../components/HookLoader/HookLoader';
import HookList from '../../components/HookList/HookList';
import HookEditor from '../../components/HookEditor/HookEditor';
import classes from './HookManager.module.css';

class HookManager extends Component {
  state = {
    hooks: [],
    activeHookId: "",
    loaderInput: "",
    loadStatus: ""
  }

  handleSubmitURL = (event) => {
    event.preventDefault();
    const input = this.state.loaderInput;
    if (input === "") { // this should be a valid URL check
      this.setState({ loadStatus: "invalid" });
      return;
    }
    this.setState({ loadStatus: "loading" });
    axios.get(input)
      .then(request => {
        this.setState({
          hooks: request.data,
          loadStatus: "loaded"
        });
      })
      .catch(error => {
        this.setState({ loadStatus: "error" });
      });    
  }
  /* input should probably be configured to default to '/hooks/read-hooks'
  when valid url is entered + password/validation */

  handleInputChange = (event) => {
    this.setState({ loaderInput: event.target.value });
  }

  handleSelectHook = (hookId) => {
    this.setState({ activeHookId: hookId });
  }

  render(){
    let activeHook = null;
    const activeHookId = this.state.activeHookId;
    if (activeHookId !== ""){
      activeHook = this.state.hooks.find(hook => hook.id === activeHookId);
    }

    return (
      <>
        <HookLoader
          loadStatus={this.state.loadStatus}
          inputValue={this.state.loaderInput}
          inputChange={this.handleInputChange}
          submitForm={this.handleSubmitURL} />
        <div className={classes.flexSection}>
          <HookList
            hooks={this.state.hooks}
            activeHookId={activeHookId}
            onClick={this.handleSelectHook}/>
          <HookEditor activeHook={activeHook} />
        </div>
      </>
    );
  }
}

export default HookManager;