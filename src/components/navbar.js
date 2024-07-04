import React from 'react';

function NavBar({ loggedIn, handleClick }) {
    return (
        <nav>
            <ul>
                <li>Home</li>
                {!loggedIn ? 
                    <li onClick={handleClick}>Log In</li> 
                    : 
                    <li onClick={handleClick}>Log Out</li>
                }
            </ul>
        </nav>
    );
}

export default NavBar;