import React, { Component } from 'react';
import ThemeProvider from './Components/ThemeProvider';

class App extends Component {
  render() {
    return (
      <ThemeProvider color="green">
      </ThemeProvider>
    );
  }
}

export default App;
