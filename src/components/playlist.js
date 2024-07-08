import React from 'react';
import Song from '../components/song';

function Playlist({ selectedSongs, removeSong, handleChange, saveToSpotify, playlistName }) {    
    return (
        <>
            <h1>New Playlist</h1>
            <input 
                type="text" 
                name="playlist" 
                placeholder="Enter a Playlist Title" 
                onChange={handleChange}
                value={playlistName}
            />
            <ul>
                {selectedSongs.map((result, index) => (
                    <li key={`${index}-${result.name}`}>
                        <Song name={result.name} artist={result.artist} />
                        <button onClick={() => removeSong(result)}>-</button>
                    </li>
                ))}
            </ul>
            <button onClick={(saveToSpotify)}>Save to Spotify</button>
        </>
    );
};

export default Playlist;