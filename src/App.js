import React, { Component } from 'react';
import './App.css';
import InsertApp from './insertSort/insertApp';
import BubbleApp from './bubbleSort/bubbleApp';
import SelectApp from './selectSort/selectApp';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BubbleApp></BubbleApp>
        <InsertApp></InsertApp>
        <SelectApp></SelectApp>
      </div>
    );
  }

}

export default App;
