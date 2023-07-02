import React, { Component } from 'react'

export class InfoArticle extends Component {
  render() {
    return (
      <>
      {this.props.actors.map((actor) => {
        return <p key={actor}>{actor}</p>
      })}
      </>
      
    )
  }
}

export default InfoArticle