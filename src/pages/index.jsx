import React from 'react'
import fblogo from '../assets/images/Facebook.svg'
import instalogo from '../assets/images/Instagram.png'
import spotlogo from '../assets/images/Spotify.png'
import TOWlogo from '../assets/images/TOW-logo-transparent.jpg'
import Twitlogo from '../assets/images/Twitter.png'

export default function Home () {
  return (

  <div id='app'>
  <a href="https://flyingout.co.nz/" target="blank"><img className="logowidth bounce" src={TOWlogo} alt="The Others Way logo" />
  </a>

  <p className="text"> Auckland’s Karangahape Road district will come to life with our annual multi-venue extravaganza returning to celebrate the best in alternative music from across the country!
  </p>

  <p className="text">11 September 2020.</p>

  <p className="hyperlinks">
    <a href="https://flyingout.co.nz/products/the-others-way-2020" target="_blank" >TICKETS </a>
  </p>

  <div className="logo-container">
    <a href="https://twitter.com/FlyingOutMusic" target="blank"><img className="socialmedia" src={Twitlogo} alt="Twitter Logo" /></a>

    <a href="https://www.instagram.com/flyingoutmusic/" target="_blank"><img className="socialmedia" src={instalogo} alt="Instagram Logo" /></a>

    <a href="https://www.facebook.com/flyingoutmusic" target="_blank"><img className="socialmedia" src={fblogo} alt="Facebook Logo" /></a>

    <a href="https://open.spotify.com/user/flyingout?si=a7DM7PBuTFyLnu7FwZSnWg" target="_blank"><img className="socialmedia" src={spotlogo} alt="Spotify Logo" /></a>
  </div>

</div>
  )
}
