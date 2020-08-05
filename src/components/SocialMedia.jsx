import React from 'react'
import fblogo from '../assets/images/Facebook.svg'
import instalogo from '../assets/images/Instagram.png'
import spotlogo from '../assets/images/Spotify.png'
import Twitlogo from '../assets/images/Twitter.png'
import BClogo from '../assets/images/bandcamp-button-bc-circle-black-512.png'

export default function SocialMedia (props) {
  const { twitter, instagram, facebook, spotify, bandcamp } = props.socialMedia
  return (
    <div className="linkContainer">
      <a href={twitter}><img className="socialmedia" src={Twitlogo} alt="Twitter Logo" /></a>
      <a href={instagram}><img className="socialmedia" src={instalogo} alt="Instagram Logo" /></a>
      <a href={facebook}><img className="socialmedia" src={fblogo} alt="Facebook Logo" /></a>
      <a href={spotify}><img className="socialmedia" src={spotlogo} alt="Spotify Logo" /></a>
      <a href={bandcamp}><img className="socialmedia" src={BClogo} alt="Bandcamp Logo" /></a>
    </div>
  )
}





