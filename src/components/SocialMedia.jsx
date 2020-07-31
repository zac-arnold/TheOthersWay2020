import React from 'react'

export default function SocialMedia(props) {
  const { twitter, instagram, facebook, spotify, bandcamp } = props.socialMedia
  return (
    <div className="linkContainer">
      <a href={twitter}>Twitter </a>
      <a href={instagram}>Instagram </a>
      <a href={facebook}>Facebook </a>
      <a href={spotify}>Spotify </a>
      <a href={bandcamp}>Bandcamp</a>
    </div>
  )
}


