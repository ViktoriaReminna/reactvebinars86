import todo from '../../data.json';
import { Component } from 'react';
import { Todo } from '../Todo/Todo';

export class TodoList extends Component {
  state = { todo };

  handleDelete = id => {
    this.setState(prev => ({
      todo: prev.todo.filter(el => el.id !== id),
    }));
  };
  render() {
    return (
      <ul className="list-group">
        {this.state.todo.map(el => (
          <Todo todo={el} key={el.id} handleDelete={this.handleDelete} />
        ))}
      </ul>
    );
  }
}
