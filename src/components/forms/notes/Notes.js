import React from 'react'


function Notes(props) {
    return (
        <div>
            {props.notes.map(note => (
                <div className="note"
                    key={note.id}>
                        <h2>{note.name}</h2>
                        <p>{note.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Notes
