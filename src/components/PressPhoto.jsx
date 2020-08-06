import React from 'react'

export default function PressPhoto (props) {
  
  return (
    <div className="imageContainer">
      <img src={props.img} alt="" />
    </div>
  )
}
