import React from 'react';

function Song({ name, artist }) {
    return (
        <>
            <h3>{name}</h3>
            <h4>{artist}</h4>
        </>
    );
};

export default Song;