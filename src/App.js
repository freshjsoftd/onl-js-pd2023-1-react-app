import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export class App extends Component {
	showName() {
		return this.name;
	}
	actors = ['Shean', 'Bill'];

	render() {
		return (
			<>
				<Header name='Bill' show={this.showName}  />
				<Main actors={this.actors}/>
				<div>Footer</div>
			</>
		);
	}
}

export default App


