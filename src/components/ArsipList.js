import React from 'react';
import { showFormattedDate } from '../utils';
import ArsipButton from './ArsipButton';
import DeleteButton from './DeleteButton';


function ArsipList({archives, onDeletel, onArsipl}){
    return(
        <div className='notes-list'>
            {archives.map((archive) => (
                <div className="note-item" key={archive.id}>
                    <div className="note-item__content">
                        <div className="note-item__title">{archive.title}</div>
                        <div className="note-item__date">{showFormattedDate(archive.createdAt)}</div>
                        <div className='note-item__body'>{archive.body}</div>
                        <div className='note-item__action'>
                            <DeleteButton id={archive.id} onDelete = {onDeletel}/>
                            <ArsipButton id={archive.id} onArsip = {onArsipl}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArsipList;