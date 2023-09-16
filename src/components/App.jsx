import { Component } from 'react';
import { Header } from './Header/Header';
// import { Counter } from './Counter/Counter';
import { Modal } from './Modal/Modal';
import { TodoList } from './TodoList/TodoList';

export class App extends Component {
  state = { isShowModal: false };
  toggleModal = () => {
    this.setState(prevState => ({ isShowModal: !prevState.isShowModal }));
  };
  render() {
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        <TodoList />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>text for Modal</Modal>
        )}
      </>
    );
  }
}
