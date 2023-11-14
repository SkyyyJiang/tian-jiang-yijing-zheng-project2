import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div class="nav-title">Wordle</div>
            <input type="checkbox" id="menu-button" />
            <label for="menu-button">≡</label>
            <ul>
                <li><Link to="/" className='clickable-text'>home</Link></li>
                <li><Link to="/rule" className='clickable-text'>rule</Link></li>
                <li><Link to="/game/normal" className='clickable-text'>normal</Link></li>
                <li><Link to="/game/hard" className='clickable-text'>hard</Link></li>
            </ul>
        </nav>
    );
}