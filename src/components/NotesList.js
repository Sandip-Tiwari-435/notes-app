import Note from './Note.js';
import AddNote from './AddNote.js';

const NotesList= ({notes,handleDelNote,handleAddNote}) => {
    
    return(
        <div className="notes-list">
            {notes.map((note)=> <Note key={note.id} handleDelNote={handleDelNote} note={note}/>)}
            <AddNote handleAddNote={handleAddNote}/>
        </div>

    )
}

export default NotesList