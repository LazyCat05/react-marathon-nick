import React from 'react'

const Playlist = (props) => {
  return(
    <li className={props.playlistClass}>{props.playlist.name}</li>
  )
}

export default Playlist
