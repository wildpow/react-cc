import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="heading">React Coding Challenge</h1>
        <p className="task">
          This app should take user input from a text field
          and output that text to the screen in realtime. Also add a button
          to clear the text input. Please write your code in Input.js file. Below is
          some example HTML syntax for input and button tags.
        </p>
        <pre className="code">
          &lt;input type= placeholder= value={} onChange={} /&gt; {'\n'}
          &lt;button type='button' onClick= /&gt;Clear&lt;/button&gt;
        </pre>
        
        {/* Edit this component */}
        <UserInput /> 
      </div>
    );
  }
}

export default App;
