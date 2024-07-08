import React, { useState } from 'react';
import Search from '../../components/search';
import Results from '../../components/results';
import Playlist from '../../components/playlist';
import { useOutletContext } from 'react-router-dom';

function HomePage() {   
    const { loggedIn } = useOutletContext();
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const [playlists, setPlaylists] = useState([]);

    function addSong(result) {
        const isAlreadySelected = selectedSongs.some(song => song.name === result.name && song.artist === result.artist);
        
        if (!isAlreadySelected) {
            setSelectedSongs([...selectedSongs, result])
        }
    }

    function removeSong(result) {
        const updatedSongs = selectedSongs.filter(song => song.name !== result.name || song.artist !== result.artist);
        setSelectedSongs(updatedSongs);
    }

    function handleChange({ target }) {
        const { value } = target;
        setPlaylistName(value);
    }

    function saveToSpotify() {
        //since we don't have an API yet, we're just clearing selectedSongs
        setPlaylists([...playlists, {
            playlistName: playlistName,
            playlistSongs: selectedSongs
        }])

        setSelectedSongs([]);
        setPlaylistName('');
    }

    return (
        <div>
            {loggedIn ? (
                <div>
                    <Search />
                    <div>
                        <Results addSong={addSong} />
                        <Playlist 
                            selectedSongs={selectedSongs} 
                            removeSong={removeSong} 
                            handleChange={handleChange} 
                            saveToSpotify={saveToSpotify}
                            playlistName={playlistName}
                        />
                    </div>
                </div>
            ) : "Please Log In"}
        </div>
    )
};

export default HomePage;