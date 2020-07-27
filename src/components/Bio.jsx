import React, { Component } from 'react'
import lineupdata from '../assets/data/lineupdata.json'


export class Bio extends Component {
state = {

}



  render() {


    return (
      <div>
        <p>Bio</p>
        <ul>
          {lineupdata.artists.map(key => (
          <li key={key.id}>{key.bio}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Bio
