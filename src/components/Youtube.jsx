import React from 'react'

export default function Youtube(props) {
  return (
    <div className="videoContainer">
      <iframe title={props.id} width='1597' height='621' src={props.video} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
    </div>
  )
}


