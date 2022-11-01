import React, { useState, useRef, useEffect } from 'react';
import NotesList from './components/NotesList';
import Header from './components/Header';
import './style.css';
import { nanoid } from 'nanoid';


function App() {
  const [notes, setNotes] = useState([]);
  const [searchText,setSearchText] =useState('');
  const [toggleInfo,setToggleInfo]=useState(true);

  useEffect(()=>{
    const savedNotes=JSON.parse(
      localStorage.getItem('create_notes_app_data')
    );

    if(savedNotes) {setNotes(savedNotes);}
  },[])

  useEffect(()=>{
    localStorage.setItem(
      'create_notes_app_data',
      JSON.stringify(notes)
    );
  },[notes])

  const addnote = (text) => {
    const date=new Date();
    const newNote={
      text:text,
      date:date.toLocaleDateString(),
      id:nanoid()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
  }

  
  const delNote = (id)=>{
    const newNotes=notes.filter((note)=>{
      if(note.id!==id) return note;
    });
    setNotes(newNotes);
  }

  const Toggler=(toggleInfo)=>{
    if(toggleInfo===false) document.body.style.backgroundColor='white';
    else document.body.style.backgroundColor='#121212';
    setToggleInfo(!toggleInfo);
    
  }

  const searcher=(event)=>{
    setSearchText(event.target.value);
  }

  return (
    <div className='container'>
      <Header toggleInfo={toggleInfo} Toggler={Toggler} />
      <input type="text" placeholder='Type to search...' onChange={searcher} className="inp-box" />
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleDelNote={delNote} handleAddNote={addnote} />
    </div>
  )
}

export default App;
