import React from "react";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import ArsipList from "./ArsipList";

class NoteApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData(),
            arsip : [],
            filtered : [],
            already_filter : false
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onToArsipHandler = this.onToArsipHandler.bind(this);
        this.onBackToNote = this.onBackToNote.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(event){
        this.setState((prevState) => {
            let prevLen = parseInt(prevState.filtered.length);
            if (prevLen === 1) {
                return {
                    already_filter : true,
                }
            }else{
                let _filtered = this.state.notes.filter((val) =>{
                    console.log(val.title.includes(event.target.value));
                    return val.title.includes(event.target.value)
                });
                //
                console.log(_filtered);
                return {
                    filtered: _filtered
                }
            }
        })


        let note_filtered = this.state.notes.filter((val)=>{
            return val.title.includes(event.target.value);
        });
        this.setState({
            filtered: note_filtered
        });
    }

    onToArsipHandler(id){
        this.setState((prevState) => {
            let snotes = this.state.notes.filter((snote) => snote.id === id);
            return {   
                arsip: [
                    ...prevState.arsip,
                    { 
                        id: id,
                        title: snotes[0].title,
                        body: snotes[0].body,
                        createdAt: snotes[0].createdAt,
                        archived: true
                    }
                ],
            }
        })
        this.onDeleteHandler(id)
    }

    onBackToNote(id){
        this.setState((prevState) => {
            let arsip = this.state.arsip.filter((val) => val.id === id) ;
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: id,
                        title: arsip[0].title,
                        body: arsip[0].body,
                        createdAt: arsip[0].createdAt,
                        archived: false
                    }
                ]
            }
        })
        this.onDeleteArsip(id);
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
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({notes});
    }
     
    onDeleteArsip(id){
        const arsip = this.state.arsip.filter((arsip) => arsip.id !== id);
        this.setState({arsip});
    }

    render(){

        let note_len = parseInt(this.state.notes.length);
        let filter_len = parseInt(this.state.filtered.length);
        let noteList;
        
        if(note_len === 0 && filter_len === 0)
            noteList = <p className="notes-list__empty-message "> Tidak ada catatan </p>
        else if(filter_len > 0 ){
            console.log("masuk kok");
            noteList = <NoteList notes = {this.state.filtered} onArsipl = {this.onToArsipHandler} onDeletel = {this.onDeleteHandler}/>
        }else
            noteList = <NoteList notes = {this.state.notes} onArsipl = {this.onToArsipHandler} onDeletel = {this.onDeleteHandler}/>
        
        let arsipList;
        if(this.state.arsip.length === 0)
            arsipList = <p className="notes-list__empty-message "> Tidak ada catatan </p>
        else
            arsipList = <ArsipList archives={this.state.arsip} onPindahl = {this.onBackToNote} onDeletel = {this.onDeleteHandler}/>

        return(
            <React.Fragment>
                <div className="note-app__header note-search">
                    <h1>Notes</h1>
                    <input type="text" placeholder="Cari catatan..." onChange={this.onSearchHandler}/>
                </div>
                <div className="note-app__body">
                    <h2>Buat Catatan</h2>
                    <NoteInput addNote = {this.onAddNoteHandler}/>
                    <h2>Catatan Aktif</h2>
                    {noteList}
                    <h2>Arsip</h2>
                    {arsipList}
                </div>
            </React.Fragment>
        );
    }
}

export default NoteApp;