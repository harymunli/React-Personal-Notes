import React from 'react';

function NoteList({notes}){
    return(
        <div>
            {notes.map((note) => (
                <div key={note.id}>
                    <p>{note.title}</p>
                </div>
            ))}
        </div>
    )
}

export default NoteList;