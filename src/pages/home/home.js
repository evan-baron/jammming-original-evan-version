import React from 'react';
import Search from '../../components/search';
import Results from '../../components/results';
import Playlist from '../../components/playlist';
import { useOutletContext } from 'react-router-dom';

function HomePage() {   
    const { loggedIn } = useOutletContext();
    
    return (
        <div>
            {loggedIn ? (
                <div>
                    <Search />
                    <div>
                        <Results />
                        <Playlist />
                    </div>
                </div>
            ) : "Please Log In"}
        </div>
    )
};

export default HomePage;