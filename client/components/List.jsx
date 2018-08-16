import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandler(e) {
    this.setState(
      {
        items: [...this.state.items, this.state.item]
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <div>
        Item: <input name="item" onChange={this.onChangeHandler} />
        <button onClick={this.onSubmitHandler}>Submit</button>
      </div>
    );
  }
}

export default List;
