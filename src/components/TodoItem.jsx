import React from 'react';
import { destroy } from '../api';

class TodoItem extends React.Component {
  render() {
    const id = this.props.id;
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.text}</td>
        <td>{this.props.createdAt}</td>
        <td>
          <button onClick={()=> destroy(id).then(() => this.props.todosUpdater())}>
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default TodoItem;
