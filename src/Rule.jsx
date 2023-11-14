import React from 'react';
import './Rule.css';
import Navbar from './Navbar';

export default function Rule() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className='title'>Instruction</div>
                <div className='content'>
                    <li>The length of each guess is based on the diffculty</li>
                    <li>In a normal game, you will have 6 attempts to guess a 6-letter word</li>
                    <li>In a hard game, you only have 5 attempts and the word has 7 letters</li>
                    <li>The color of the tiles will change to show how close your guess was to the word</li>
                    <li><strong className='green'>Green</strong> indicates that the letter is in the word and in the correct spot</li>
                    <li><strong className='yellow'>Yellow</strong> indicates that the letter is in the word but in the wrong spot</li>
                    <li><strong className='gray'>Gray</strong> indicates that the letter is not in the word in any spot</li>
                </div>
            </div>
        </>
    );
}