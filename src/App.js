import React, { Component } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { index } from './api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
    this.todosUpdater = this.todosUpdater.bind(this);
  }

  componentDidMount() {
    this.todosUpdater();
  }

  todosUpdater() {
    index().then(response => this.setState({todos: response}));
    console.log('update');
  }

  render() {
    return (
      <div className="app">
        <TodoForm todosUpdater={this.todosUpdater} />
        <TodoList todosUpdater={this.todosUpdater} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
