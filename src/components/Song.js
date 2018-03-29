import React from 'react'

const Song = (props) => {
  
  return(
    <li className={props.songClass} onClick={props.songSelectHandler}>
      {props.song.name} - {props.song.artist}
   </li>
  )
}

export default Song;
