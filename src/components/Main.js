import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <Home />
      </MuiThemeProvider>
    )
  }
}

injectTapEventPlugin();
ReactDOM.render(<Main />, document.getElementById('app'));