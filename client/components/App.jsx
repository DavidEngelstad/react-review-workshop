import React, { Component } from 'react';
import List from './List.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { first, last } = this.state;

    return (
      <div>
        {/* First: <input name="first" onChange={this.onChangeHandler} />
        Last: <input name="last" onChange={this.onChangeHandler} />
        Hello from Component, {first} {last} */}
        <List />
      </div>
    );
  }
}

export default App;
