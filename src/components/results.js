import React from 'react';
import Song from './song';
import { resultsdata } from '../api/data/data';

function Results({ addSong }) {
    return (
        <>
            <h1>Results</h1>
            <ul>
                {resultsdata.map((result, index) => (
                    <li key={`${index}-${result.name}`}>
                        <Song name={result.name} artist={result.artist} />
                        <button onClick={() => addSong(result)}>+</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Results;