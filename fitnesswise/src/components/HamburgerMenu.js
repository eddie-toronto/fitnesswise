import React from 'react';
import { useState } from 'react';
import './HamburgerMenu.css'; // Assuming you have a CSS file for styles

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
            <button className="hamburger-button" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            {isOpen && (
                <nav className="menu">
                    <ul>
                        <li><a href="#workouts">Workouts</a></li>
                        <li><a href="#progress">Progress</a></li>
                        <li><a href="#settings">Settings</a></li>
                        <li><a href="#logout">Logout</a></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;