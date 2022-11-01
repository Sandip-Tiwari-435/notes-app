import React from 'react';
import { useState } from 'react';

export default function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState('');
    const [count, setCount] = useState(200);

    const handler = (event) => {
        if(event.target.value.length>200) return;
        setCount(200-event.target.value.length);
        
        setNoteText(event.target.value);

    }

    const handleClick = () => {
        handleAddNote(noteText);
        setNoteText("");
        setCount(200);
    }

    return (
        <div className='note new'>
            <textarea
                
                rows="8"
                cols="10"
                placeholder='Type to add a note....'
                value={noteText}
                onChange={handler}
                

            ></textarea>
            <div className='note-footer'>
                <small>{count} remaining</small>
                <button className='save' onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

