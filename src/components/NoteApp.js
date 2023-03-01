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

    render(){
        return(
            <React.Fragment>
                <div className="note-app__header">
                    <h1>Notes</h1>
                </div>
                <div className="note-app__body">
                    <h2>Buat Catatan</h2>
                    <NoteInput addNote = {this.onAddNoteHandler}/>
                    <NoteList notes = {this.state.notes}/>
                </div>
            </React.Fragment>
        );
    }
}

export default NoteApp;