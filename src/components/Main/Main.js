import React, { Component } from 'react'
import InfoArticle from '../InfoArticle/InfoArticle';

export class Main extends Component {
  render() {
    return (
		<>
			<InfoArticle actors={this.props.actors}/>
		</>
	);
  }
}

export default Main