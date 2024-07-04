import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HomePage() {   
    const { loggedIn } = useOutletContext();
    
    return (
        <div>
            {loggedIn ? "HOME PAGE" : "Please Log In"}
        </div>
    )
}

export default HomePage;