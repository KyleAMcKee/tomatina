import * as React from 'react';

type TodoItem = {
	title: string;
	done: boolean;
}

interface IProps {
	checked: boolean,
	item: TodoItem,
	index: number,
	onClickDone: (e: any, index: number) => any,
	removeTodo: (e: any) => any,
}

const TodoTask: React.SFC<IProps> = (props: IProps) => {
	return (
		<li key={props.item.title + Math.floor(Math.random() * 100)}>
			<input onChange={(event) => props.onClickDone(event, props.index)} type="checkbox" checked={props.item.done}/>
			<span style={{ textDecoration: props.item.done ? 'line-through' : 'inherit'}}>{props.item.title}</span>
			<button className="button is-primary" onClick={() => props.removeTodo(props.index)}>Delete</button>
		</li>
	)
}

export default TodoTask;

  // <a class="button is-danger is-outlined">
  //   <span>Delete</span>
  //   <span class="icon is-small">
  //     <i class="fas fa-times"></i>
  //   </span>
  // </a>