import React, { Component } from 'react';
import BasicLayout from './layouts/BasicLayout';

import { BrowserRouter  } from "react-router-dom";

  class App extends Component {
    render() {
      return (
      <BrowserRouter>
        <div className="App">
          <BasicLayout/>
        </div>
       </BrowserRouter>
      );
    }
  }

export default App;