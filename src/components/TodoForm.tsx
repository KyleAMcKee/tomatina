import * as React from 'react';

type TodoItem = {
	title: string;
	done: boolean;
}

export interface IProps {
	onSubmit: (e: any) => any,
	onChange: (e: any) => any,
	newTodo: TodoItem
}

const TodoForm: React.SFC<IProps> = (props: IProps) => {
	return (
		<form className="field" onSubmit={props.onSubmit}>
			<label htmlFor="newTodo"></label>
			<input onChange={props.onChange} id="newTodo" name="newTodo" value={props.newTodo.title}/>
			<button className="button is-primary" type="submit">Add Todo</button>
		</form>
	)
}

export default TodoForm;