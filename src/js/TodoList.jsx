import React from 'react'
import TodoView from './TodoList'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

@observer
export default class TodoList extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <div><h1>{this.props.store.todos[0]}</h1></div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}
