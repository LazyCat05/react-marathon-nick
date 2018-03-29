import React from 'react'
import Song from './Song'

class SongCollection extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let songlist = this.props.selectedSongs.map((song) => {

      let songSelectHandler = () => {
        this.props.handleSongSelect(song.id)
      }

      let songClass = ""
      if (this.props.selectedSongId === song.id) {
         songClass = "selected"
      }

      return(
        <Song
          key = {song.id}
          song = {song}
          songClass = {songClass}
          songSelectHandler = {songSelectHandler}
        />
      )
    })

    return(
      <div>{songlist}</div>
    )
  }
}

export default SongCollection
