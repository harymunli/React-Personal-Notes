import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";

class MyNote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData(),
        }
    }
    render(){
        return(
            <NoteList notes = {this.state.notes}/>
        );
    }
}

export default MyNote;