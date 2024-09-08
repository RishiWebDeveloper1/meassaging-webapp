import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './Emoji.css'

const Emoji = ({ onEmojiClick }) => {

    return (
        <div className="emoji-container">
            <div className="emoji-picker-container">
                {
                    <div className="emoji-picker">
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                    </div>
                }
            </div>
        </div>
    );
};

export default Emoji;
