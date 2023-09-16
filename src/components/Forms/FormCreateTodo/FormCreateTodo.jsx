import { Component } from 'react';
export class FormCreateTodo extends Component {
  state = {
    title: '',
    description: '',
  };

  handleChangeTitle = ({ target: { value } }) => {
    // const { target } = e
    // const {value } = target
    // console.log(value);
    this.setState({ title: value });
  };

  handleChangeDescription = ({ target: { value } }) => {
    this.setState({ description: value });
  };
  render() {
    console.log('inputValue:>>', this.state.title, this.state.description);
    return (
      <form className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputTodo" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            onChange={this.handleChangeTitle}
            className="form-control"
            id="exampleInputTodo"
            value={this.state.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTodoDescription" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            onChange={this.handleChangeDescription}
            className="form-control"
            id="exampleInputTodoDescription"
            value={this.state.description}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create todo
        </button>
      </form>
    );
  }
}
