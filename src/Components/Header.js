import React from 'react';
import '../Css/Header.css';
import { RideState } from '../RideContext';

const Header = () => {
    const {username,userimg}=RideState();
  return (
    <div className='header'>
    <div className="logo">
        <h1 className='logotext'>Edvora</h1>
    </div>
    <div className="user">
        <div className="username">{username}</div>
        <div className="userimg"><img src={userimg} alt="" /></div>
    </div>
    </div>
  )
}

export default Header;