import React from 'react'
import { Link } from "gatsby"

import lineupdata from '../assets/data/lineupdata.json'


export default function ArtistNav () {

  return (
    <>
    <div className="tobytext artistNav">
      <ul>
        {lineupdata.artists.map(key => (
        <li key={key.id}><Link to={`/lineup/${key.name}`}>{key.name}</Link></li>
        ))}
      </ul>
      </div>
    </>
 
  )
}


