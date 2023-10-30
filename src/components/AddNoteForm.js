import React, {useContext} from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () =>{
    const {dispatch, title, body, setBody, setTitle} = useContext(NotesContext);

    const addNote = (event) => {
        event.preventDefault();

        dispatch({type: 'ADD_NOTE', title: title, body: body})
    }

    return(
            <form onSubmit={addNote}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>Add note</button>
            </form>
    );
}

export default AddNoteForm;