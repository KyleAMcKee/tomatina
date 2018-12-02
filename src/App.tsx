import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import Description from './Description';
import TodoForm from './components/TodoForm';

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
		this.allDone = this.allDone.bind(this);
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
      <div className="App absolute-center">
	  	<TodoForm onChange={this.onChange} onSubmit={this.onSubmit} newTodo={this.state.newTodo} allDone={this.allDone}/>
		  {/* <button className="button is-success" onClick={() => this.allDone()}>All Done</button> */}
	  	<div className="block">
		  {this.state.todos.length > 0 &&
			<table className="table is-hoverable">
					<thead>
						<tr>
							<th>Done</th>
							<th>Task</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{this.state.todos.map((item, index) => {
							return <tr key={item.title + Math.floor(Math.random() * 10000)}>
										<td className="center-items">
											<label className="check-container">
												<input onChange={(event) => this.onClickDone(event, index)} type="checkbox" checked={item.done}/>
												<span className="checkmark"></span>
											</label>
										</td>
										<td className="center-items">
											<span style={{ textDecoration: item.done ? 'line-through' : 'inherit'}}>{item.title}</span>
										</td>
										<td >
											<button className="button is-danger is-outlined" onClick={() => this.removeTodo(index)}>
												<span className="icon is-small">
												<i className="fa fa-trash"></i>
												</span>
											</button>

										</td>
									</tr>
							})
						}
					</tbody>
			</table>
		  }
		</div>
	</div>
    );
  }
}

export default App;
