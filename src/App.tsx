import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Description from './Description';

type TodoItem = {
	title: string;
	done: boolean;
}

class App extends Component<{}, { newTodo: TodoItem, todos: TodoItem[] }> {
	constructor(props: any) {
		super(props);
		this.state = { 
			newTodo: {
				title: '',
				done: false	
			},
			todos: []
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(e: any) {
		e.preventDefault();
		if (this.state.newTodo.title === '') {
			return
		}
		this.setState({
			todos: [...this.state.todos, this.state.newTodo],
			newTodo: {
				title: '',
				done: false
			}
		})
	}

	onChange(e: any) {
		this.setState({
			newTodo: {
				title: e.target.value,
				done: false
			}
		})
	}

	onClickDone(e: any, index: number) {
		const todos: TodoItem[] = [...this.state.todos];
		todos[index].done = e.target.checked;
		this.setState({
			todos: todos
		})
	}

	removeTodo(index: number) {
		const todos = [...this.state.todos];
		todos.splice(index, 1);
		this.setState({
			todos: todos
		});
	}

	allDone() {
		const todos = this.state.todos.map(todo => {
			return {
				title: todo.title,
				done: true
			}
		});
		this.setState({
			todos: todos
		});
	}

  render() {
    return (
      <div className="App">
				<form onSubmit={this.onSubmit}>
					<label htmlFor="newTodo"></label>
					<input onChange={this.onChange} id="newTodo" name="newTodo" value={this.state.newTodo.title}/>
					<button type="submit">Add Todo</button>
				</form>
				<button onClick={() => this.allDone()}>All Done</button>
				<ul>
					{this.state.todos.map((item, index) => {
							return <li key={item.title}>
								<input onChange={(event) => this.onClickDone(event, index)} type="checkbox" checked={item.done}/>
								<span style={{ textDecoration: item.done ? 'line-through' : 'inherit'}}>{item.title}</span>
								<button onClick={() => this.removeTodo(index)}>Remove</button>
							</li>
						})
					}
				</ul>
      </div>
    );
  }
}

export default App;
