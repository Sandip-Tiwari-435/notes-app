import {MdDeleteForever} from 'react-icons/md';
const Note = ({note,handleDelNote}) => {
    const delhandler=()=>{
        handleDelNote(note.id);
    }
    return <div className='note'>
        <span>{note.text}</span>
        <div className="note-footer">
            <small>{note.date}</small>
            <MdDeleteForever onClick={delhandler} className='delete-icon' size='1.3em' />
        </div>
    </div>
}

export default Note;