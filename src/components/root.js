import React, { useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

function Root() {
    const [loggedIn, setLoggedIn] = useState(false)
    
    const handleClick = () => {
        setLoggedIn(!loggedIn)
    }

    return (
    <>
      <NavBar loggedIn={loggedIn} handleClick={handleClick} />
      <Outlet context={{ loggedIn }}/>
      <Footer />
    </>
    );
};

export default Root;