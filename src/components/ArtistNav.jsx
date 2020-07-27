import React from 'react'
import { Link } from "gatsby"

import lineupdata from '../assets/data/lineupdata.json'


export default function ArtistNav () {

const artistKeys = Object.keys(lineupdata.artists)

  return (
    <>
      <p>Artist Nav</p>
      <ul>
        {artistKeys.map(key => (
        <li key={key}><Link to={`/lineup/${key}`}>{key}</Link></li>
        ))}
      </ul>
    </>

  )
}


