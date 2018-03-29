import React from 'react';
import PlaylistCollection from "./PlaylistCollection"
import SongCollection from "./SongCollection"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectPlayListId: this.props.data.selectedPlaylistId
    }

    this.handleSongSelect = this.handleSongSelect.bind(this)
  }

  handleSongSelect(id){
    this.setState({ selectedSongId: id })
  }

  render() {
    console.log(this.state.selectedSongId)
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (song) => {
      return selectedPlaylistSongIds.includes(song.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">

        <div className="columns large-6">
          <h1>Play Lists</h1>
          <PlaylistCollection
            playlists = {data.playlists}
            selectedPlaylist = {data.selectedPlaylistId}
          />
        </div>

        <div className="columns large-6">
          <h2> Songs</h2>
          <SongCollection
            selectedSongs = {selectedPlaylistSongs}
            selectedSongId = {this.state.selectedSongId}
            handleSongSelect = {this.handleSongSelect}
          />
        </div>

      </div>
    );
  }
}

export default App;
