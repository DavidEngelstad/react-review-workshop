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
    return <List />;
    if (this.state.first === 'David' && this.state.last === 'Engelstad') {
      return <List />;
    } else {
      return (
        <div>
          First: <input name="first" onChange={this.onChangeHandler} />
          <br />
          Password:{' '}
          <input name="last" type="password" onChange={this.onChangeHandler} />
        </div>
      );
    }
  }
}

export default App;
