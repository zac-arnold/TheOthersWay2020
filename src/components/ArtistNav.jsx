import React from 'react'
import { Link } from "gatsby"

import lineupdata from '../assets/data/lineupdata.json'


export default function ArtistNav () {

// console.log('lineupdata', lineupdata.artists[2].name)

  return (
    <>
      <p>Artist Nav</p>
      <ul>
        {lineupdata.artists.map(key => (
        <li key={key.id}><Link to={`/lineup/${key.name}`}>{key.name}</Link></li>
        ))}
      </ul>
    </>

  )
}

