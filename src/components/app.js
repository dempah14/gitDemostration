import React, { Component } from 'react';
import Alex from './alex'
import Saundra from './saundra'

import Jared from './jared'
import Josh from './josh'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>React Simple Starter</h1>
          <Alex />
          <Saundra />
          <Jared />
          <Josh/>
      </div>
    );
  }
}

export default App
