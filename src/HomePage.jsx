import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className='home-page'>
            <h1 className='title'>Wordle</h1>
            <p>Select your game difficulty</p>
            <div className='select-buttons'>
                <Link to="/game/normal">
                <button className='button'>normal</button>
                </Link>
                <Link to="/game/hard">
                <button className='button'>hard</button>
                </Link>
            </div>
            <Link to="/rule" className='clickable-text'>How to play</Link>
        </div>
    );
}