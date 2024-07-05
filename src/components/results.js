import React from 'react';
import Song from './song';
import { resultsdata } from '../api/data/data';

function Results() {
    console.log(resultsdata);
    return (
        <>
            <h1>Results</h1>
            <ul>
                {resultsdata.map((result) => (
                    <li key={`${result.index+result.name}`}>
                        <Song name={result.name} artist={result.artist} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Results;