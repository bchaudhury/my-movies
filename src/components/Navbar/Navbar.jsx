import React from "react";
import "./Navbar.css";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import Logo from '../../assets/mylogo.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <img
                    src={Logo}
                    alt='movie logo'
                    className='logo'
                />
            </div>
            <h2>Movie-Dekho</h2>

            <div className='navbar_links'>
                <ToggleSwitch />
                <a href='#popular'>
                    Popular{" "}
                    <img src={Fire} alt='fire emoji' className='navbar_emoji' />
                </a>
                <a href='#top_rated'>
                    Top Rated{" "}
                    <img src={Star} alt='star emoji' className='navbar_emoji' />
                </a>
                <a href='#upcoming'>
                    Upcoming{" "}
                    <img
                        src={Party}
                        alt='party face emoji'
                        className='navbar_emoji'
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
