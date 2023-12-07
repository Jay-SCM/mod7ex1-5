//exercise3

import React from 'react';
import happyEmoji from '../assets/icon/happy.jpg';
import sadEmoji from '../assets/icon/sad.jpg';
import { useEmoji } from '../EmojiContext.jsx';
const Emoji = () => {
    const { isHappy, toggleMood } = useEmoji();
    return (
        <div className="happyCard">
            <img
                src={isHappy ? happyEmoji : sadEmoji}
                alt={isHappy ? 'Happy Emoji' : 'Sad Emoji'}
                style={{ width: '100px', height: '100px' }}/>
            <button className="ChangeBttn" onClick={toggleMood}>CHANGE EMOJI</button>
        </div>);};
export default Emoji;
