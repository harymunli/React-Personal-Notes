import React from "react";

class NoteInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            count: 0
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onTitleChangeEventHandler(event){
        this.setState(() => {
            return{
                title: event.target.value
            }
        })
    }

    onBodyChangeEventHandler(event){
        if(parseInt(event.target.value.length)<=50)
            this.setState({
                body: event.target.value,
                count: parseInt(event.target.value.length)
            })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa Karakter: {50 - this.state.count} </p>
                <input type="text" placeholder="Isi judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <input type="textarea" placeholder="Tulis catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }

}

export default NoteInput