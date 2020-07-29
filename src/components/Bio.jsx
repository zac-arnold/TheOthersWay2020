import React, { Component } from 'react'
import lineupdata from '../assets/data/lineupdata.json'


export default function Bio () {

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

