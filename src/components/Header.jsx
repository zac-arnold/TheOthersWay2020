import React from 'react'

import WebBanner from '../assets/images/WebsiteBanner2480x180.png'

export default function Header() {
  return (
    <div>
      <img className="header" src={WebBanner} alt="" />
    </div>
  )
}
