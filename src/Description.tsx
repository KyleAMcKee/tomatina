import * as React from 'react';

interface IProps {
	countBy?: number;
}

interface IState {
	count: number;
}

class Description extends React.Component<IProps, IState> {
	public static defaultProps: Partial<IProps> = {
		countBy: 1
	};

	public state: IState = {
		count: 0
	};

	public increase = () => {
		const countBy: number = this.props.countBy!;
		const count = this.state.count + countBy;
		this.setState({ count });
	};

	public decrease = () => {
		const count = this.state.count - this.props.countBy!;
		this.setState({ count });
	}

	public render() {
		return (
			<div>
				<p>What a great number: {this.state.count}</p>
				<button onClick={this.increase}>Up it</button>
				<button onClick={this.decrease}>Down it goes</button>
			</div>
		)
	}
}

export default Description;