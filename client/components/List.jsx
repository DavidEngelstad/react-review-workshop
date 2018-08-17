import React, { Component } from 'react';
import ListEntry from './ListEntry.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onChangeHandler(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo]
    });
    e.target.reset();
  }

  deleteOnClick(index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmitHandler(e)}>
          Todo: <input name="todo" onChange={this.onChangeHandler} />
          <br />
          <button>Submit</button>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <ListEntry
              key={item}
              item={item}
              index={index}
              click={this.deleteOnClick}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
