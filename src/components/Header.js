import React from 'react';
import './Header.css';

import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


function Header() {
    return (
        <div className="header">

            <div className="header__icons">

                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Accueil</p>
                </div>

                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Tendances</p>
                </div>

                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Vérifiés</p>
                </div>

                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>

                <div className="header__icon">
                    <SearchIcon />
                    <p>Rechercher</p>
                </div>

                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Compte</p>
                </div>

            </div>

            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt=""/>

        </div>
    )
}

export default Header;
