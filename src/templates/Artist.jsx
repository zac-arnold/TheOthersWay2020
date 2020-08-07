import React from 'react'

import ArtistNav from '../components/ArtistNav'
import Bio from '../components/Bio'
import PressPhoto from '../components/PressPhoto'
import Youtube from '../components/Youtube'
import SocialMedia from '../components/SocialMedia'
import Header from '../components/Header'

export default function Artist({ pageContext }) {
  const { name, bio, img, video, id, socialMedia } = pageContext
  return (
    <div className="tobytext">
      <Header />
      <ArtistNav />
      <h1>{name}</h1>
      <SocialMedia socialMedia={socialMedia} />
      <Bio bio={bio} />
      <PressPhoto img={img} />
      <Youtube video={video} id={id} />
    </div>
  )
}