import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ loggedIn, handleLogInClick }) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {loggedIn && (
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                )}
                <li onClick={handleLogInClick}>
                    {loggedIn ? 'Log Out' : 'Log In'}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;