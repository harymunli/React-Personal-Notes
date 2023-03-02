import React from 'react';
import { showFormattedDate } from '../utils';
import ArsipButton from './ArsipButton';
import DeleteButton from './DeleteButton';


function NoteList({notes, onDeletel, onArsipl}){
    return(
        <div>
            <div className='notes-list'>
                {notes.map((note) => (
                    <div className="note-item" key={note.id}>
                        <div className="note-item__content">
                            <div className="note-item__title">{note.title}</div>
                            <div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
                            <div className='note-item__body'>{note.body}</div>
                            <div className='note-item__action'>
                               <DeleteButton id={note.id} onDelete = {onDeletel}/>
                               <ArsipButton id={note.id} onArsip = {onArsipl}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NoteList;