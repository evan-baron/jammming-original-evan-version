import React from 'react';

function Search() {
    return (
        <>
            <div>Search for your favorite music!</div>
            <div>
                <input type="text" placeholder="Enter a Song Title"></input>
                <button type="button">Search</button>
            </div>
        </>
    );
};

export default Search;