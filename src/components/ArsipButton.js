import React from "react";

function ArsipButton({id, onArsip}) {
    return <button className='note-item__archive-button' onClick={() => onArsip(id)}>Arsipkan</button>
}

export default ArsipButton;