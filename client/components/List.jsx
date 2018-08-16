import React, { Component } from 'react';
import ListEntry from './ListEntry.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandler(e) {
    this.setState({
      items: [...this.state.items, this.state.item]
    });
  }

  onClickEvent() {
    console.log('Clicked');
  }

  render() {
    return (
      <div>
        Item: <input name="item" onChange={this.onChangeHandler} />
        <button onClick={this.onSubmitHandler}>Submit</button>
        <ul>
          {this.state.items.map(item => (
            <ListEntry key={item} item={item} click={this.onClickEvent} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
