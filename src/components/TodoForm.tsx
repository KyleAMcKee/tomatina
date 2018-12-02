import * as React from 'react';

type TodoItem = {
	title: string;
	done: boolean;
}

export interface IProps {
	onSubmit: (e: any) => any,
	onChange: (e: any) => any,
	allDone: () => any,
	newTodo: TodoItem
}

const TodoForm: React.SFC<IProps> = (props: IProps) => {
	return (
		<div className="block todo-form">
				<form className="field has-addons" onSubmit={props.onSubmit}>
					{/* <p className="control">
						<button className="button is-success" onClick={props.allDone}>All Done</button>
					</p> */}
					<p className="control add-todo">
						<input className="input" onChange={props.onChange} id="newTodo" name="newTodo" value={props.newTodo.title}/>
					</p>
					<p className="control">
						<button className="button is-primary" type="submit" onSubmit={props.onSubmit}>Add Todo</button>
					</p>
				</form>			
		</div>
	)
}

export default TodoForm;