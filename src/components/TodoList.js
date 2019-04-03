import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import * as apiCalls from "../api";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentWillMount() {
    this.loadTodos();
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({ todos });
  }

  async addTodo(val) {
    let newTodo = await apiCalls.createTodo(val);
    this.setState({ todos: [...this.state.todos, newTodo.data] });
  }

  async deleteTodo(id) {
    await apiCalls.removeTodo(id);
    const todos = this.state.todos.filter(todo => todo.todoId !== id);
    this.setState({ todos: todos });
  }

  render() {
    console.log(this.state.todos);
    const todos = this.state.todos.map(t => (
      <TodoItem
        key={t.todoId}
        {...t}
        onDelete={this.deleteTodo.bind(this, t.todoId)}
      />
    ));
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        {todos}
      </div>
    );
  }
}
export default TodoList;
