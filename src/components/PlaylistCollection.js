import React from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends React.Component  {
    constructor(props) {
      super(props)
      this.state  = {

      }
    }

    render() {
      let playlists = this.props.playlists.map((playlist) => {
        let playlistClass = ""
        if (this.props.selectedPlaylist === playlist.id) {
          playlistClass = "selected"
        }

        return(
          <Playlist
            key={playlist.id}
            playlist={playlist}
            playlistClass={playlistClass}
          />
        )
      })

      return(
        <div>
          <ul>
           {playlists}
          </ul>
        </div>
      )
    }
}




export default PlaylistCollection
