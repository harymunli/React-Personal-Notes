import React from "react";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData(),
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: prevState.notes.length + 1,
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false
                    }
                ]
            }
        });
    }

    onDeleteHandler(id){
        console.log(id);
        const notes = this.state.notes.filter((note) => note.id !== id);
        console.log(notes);
        this.setState({notes});
    }

    render(){
        let noteList;
        if(this.state.notes.length === 0)
            noteList = <p className="notes-list__empty-message "> Tidak ada catatan </p>
        else
            noteList = <NoteList notes = {this.state.notes} onDeletel = {this.onDeleteHandler}/>
        
        return(
            <React.Fragment>
                <div className="note-app__header">
                    <h1>Notes</h1>
                </div>
                <div className="note-app__body">
                    <h2>Buat Catatan</h2>
                    <NoteInput addNote = {this.onAddNoteHandler}/>
                    <h2>Catatan Aktif</h2>
                    {noteList}
                </div>
            </React.Fragment>
        );
    }
}

export default NoteApp;