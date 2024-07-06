import React from 'react';
import Song from '../components/song';

function Playlist({ selectedSongs, removeSong }) {
    return (
        <>
            <h1>Playlist</h1>
            <ul>
                {selectedSongs.map((result, index) => (
                    <li key={`${index}-${result.name}`}>
                        <Song name={result.name} artist={result.artist} />
                        <button onClick={() => removeSong(result)}>-</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Playlist;