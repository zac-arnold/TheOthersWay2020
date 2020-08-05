import React from 'react'

export default function Bio(props) {
  return (
    <div className="tobytext">
      <h3 className="tobytext">Bio</h3>
      <p className="tobytext">{props.bio}</p>
    </div>

  )
}