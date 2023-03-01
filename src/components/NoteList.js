import React from 'react';
import { showFormattedDate } from '../utils';

function NoteList({notes}){
    return(
        <div>
            <h2>Catatan Aktif</h2>
            <div className='notes-list'>
                {notes.map((note) => (
                    <div className="note-item" key={note.id}>
                        <div className="note-item__content">
                            <div className="note-item__title">{note.title}</div>
                            <div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
                            <div className='note-item__body'>{note.body}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NoteList;