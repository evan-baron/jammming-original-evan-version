import React from 'react';

function Song({ name, artist }) {
    return (
        <>
            <div>
                <h3>{name}</h3>
                <h4>{artist}</h4>
            </div>
        </>
    );
};

export default Song;