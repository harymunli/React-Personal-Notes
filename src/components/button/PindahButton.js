import React from "react";

function PindahButton({id, onBackTo}) {
    return <button className='note-item__archive-button' onClick={() => onBackTo(id)}>Pindahkan</button>
}

export default PindahButton;