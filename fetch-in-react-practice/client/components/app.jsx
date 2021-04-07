import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(users => this.setState({
        todos: users
      }));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        const newTodo = [...this.state.todos];
        newTodo.push(data);
        this.setState({ todos: newTodo });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  toggleCompleted(todoId) {
    const todos = this.state.todos;
    const completedIndex = todos.findIndex((todo, index) => todo.todoId === todoId);
    const isCompletedStatus = !todos[completedIndex].isCompleted;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: isCompletedStatus })
    })
      .then(response => response.json())
      .then(data => {
        const newTodo = [...this.state.todos];
        newTodo[completedIndex] = data;
        this.setState({ todos: newTodo });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
