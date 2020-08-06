import React from 'react'


export default function PressPhoto (props) {
  console.log('props.img - ', props.img)
  return (
    <div className="imageContainer">
      <img className="imageContainer" src={props.img} alt="" />
    </div>
  )
}
