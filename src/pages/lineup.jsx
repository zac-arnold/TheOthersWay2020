import React from 'react'
import { Router } from '@reach/router'

import lineupdata from '../assets/data/lineupdata.json'
import ArtistNav from '../components/ArtistNav'
import IndividualArtist from '../components/IndividualArtist'

export default function lineup () {
  return (

  <div id='app'>
    <p>hello world</p>
    <Router>
      <ArtistNav />
      <IndividualArtist />
    </Router>
  </div>
  )
}

