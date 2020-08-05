import React from 'react'
import { Router } from '@reach/router'
import ArtistNav from '../components/ArtistNav'

export default function lineup() {
  return (
    <div id='app'>
      <Router>
        <ArtistNav path='/lineup' />
      </Router>
    </div>
  )
}