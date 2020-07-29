import React from 'react'
import { Router } from '@reach/router'

import lineupdata from '../assets/data/lineupdata.json'
import ArtistNav from '../components/ArtistNav'
import IndividualArtist from '../components/IndividualArtist.jsx'

export default function lineup () {
  return (

  <div id='app'>
    <p>hello world</p>
    <Router>
      <ArtistNav path='/lineup'/>
      <IndividualArtist path='/lineup/name'/>
    </Router>
  </div>
  )
}

