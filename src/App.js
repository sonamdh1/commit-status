import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './App.css';
import Toggle from './components/RefreshToggle/Toggle';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchState: false
    }
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  toggleSwitch() {
    this.setState({
      switchState: !this.state.switchState
    })
  }
  render() {
    return (
      <div className="App">
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }}
          meta={[
            {
              name: 'description',
              content:
                'A simple React app that shows a list of projects with their Github commit status and use it as a dashboard to view status of your CI pipelines.',
            },
          ]}
          title="CommitStatus"
        />
        <Toggle align="right" action={this.toggleSwitch} toggleText={this.state.switchState ? "Disable Auto Refresh" : "Enable Auto Refresh"} />
        <Header />
        <ProjectList/>
      </div>
    );
  }
}
