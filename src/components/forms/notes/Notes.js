import React from 'react'
import { NotesWrap} from '../../../styles/NoteStyles'


function Notes(props) {
    return (
        <NotesWrap>
        
            {props.notes.map(note => (
                <div className="note"
                    key={note.id}>
                        <h2>{note.name}</h2>
                        <p>{note.body}</p>
                </div>
            ))}
        
        </NotesWrap>
    )
}

export default Notes
