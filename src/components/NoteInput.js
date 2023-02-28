import React from "react";
import { showFormattedDate } from '../utils';

class NoteInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            archived: false,
            //createdAt: showFormattedDate(new Date)
        }
        this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);

    }
}