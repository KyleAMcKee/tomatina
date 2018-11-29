import * as React from 'react';

interface IProps {
	name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
	<h1>Hello, {props.name}! Welcome to TS and Reactor.</h1>
);

Header.defaultProps = {
	name: 'Johnny Double'
};

export default Header;