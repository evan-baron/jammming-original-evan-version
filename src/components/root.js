import React, { useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet, useNavigate } from 'react-router-dom';

function Root() {
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate();

    const handleLogInClick = () => {
        if (loggedIn) {
            navigate('/');
        }
        setLoggedIn(!loggedIn);
    }

    return (
    <>
      <NavBar loggedIn={loggedIn} handleLogInClick={handleLogInClick} />
      <Outlet context={{ loggedIn }}/>
      <Footer />
    </>
    );
};

export default Root;