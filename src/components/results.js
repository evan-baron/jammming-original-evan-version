import React from 'react';
import Song from './song';
import { resultsdata } from '../api/data/data';

function Results() {
    console.log(resultsdata);
    return (
        <>
            <h1>Results</h1>
            {resultsdata.map((result) => 
                <Song key={`${result.index+result.name}`} name={result.name} artist={result.artist} />
            )}
        </>
    );
};

export default Results;