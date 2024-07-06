import React, { useState } from 'react';
import Search from '../../components/search';
import Results from '../../components/results';
import Playlist from '../../components/playlist';
import { useOutletContext } from 'react-router-dom';

function HomePage() {   
    const { loggedIn } = useOutletContext();
    const [selectedSongs, setSelectedSongs] = useState([]);

    function addSong(result) {
        console.log(result)
        const isAlreadySelected = selectedSongs.some(song => song.name === result.name && song.artist === result.artist);
        
        if (!isAlreadySelected) {
            setSelectedSongs([...selectedSongs, result])
        }
    }

    function removeSong(result) {
        const updatedSongs = selectedSongs.filter(song => song.name !== result.name || song.artist !== result.artist);
        setSelectedSongs(updatedSongs);
    }

    console.log(selectedSongs) //this is just for debugging purposes to see what songs got added to selectedSongs
    
    return (
        <div>
            {loggedIn ? (
                <div>
                    <Search />
                    <div>
                        <Results addSong={addSong} />
                        <Playlist selectedSongs={selectedSongs} removeSong={removeSong}/>
                    </div>
                </div>
            ) : "Please Log In"}
        </div>
    )
};

export default HomePage;