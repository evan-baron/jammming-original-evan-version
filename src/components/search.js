import React from 'react';

function Search() {
    return (
        <>
            <h3>Search for your favorite music!</h3>
            <div>
                <input type="text" placeholder="Enter a Song Title"></input>
                <button type="button">Search</button>
            </div>
        </>
    );
};

export default Search;