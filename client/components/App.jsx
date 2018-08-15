import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: ''
    };
    this.enterFirstNameInput = this.enterFirstNameInput.bind(this);
  }

  enterFirstNameInput(e) {
    this.setState({
      first: e.target.value
    });
  }

  render() {
    const { last } = this.props;

    return (
      <div>
        First: <input name="first" onChange={this.enterFirstNameInput} />
        Hello from Component, {this.state.first} {last}
      </div>
    );
  }
}

export default App;
