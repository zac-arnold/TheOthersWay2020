import React from 'react'
import { Router } from '@reach/router'

import lineupdata from '../assets/data/lineupdata.json'
import ArtistNav from '../components/ArtistNav'
import Bio from '../components/Bio'
import PressPhoto from '../components/PressPhoto'
import Youtube from '../components/Youtube'
import SocialMedia from '../components/SocialMedia'

export default function lineup () {


  return (

  <div id='app'>
    <p>hello world</p>
    <Router>
      <Bio />
      <PressPhoto />
      <Youtube />
      <SocialMedia />
    </Router>
  </div>
  )
}

