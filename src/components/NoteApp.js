import React, {useState, useEffect, useReducer} from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    useEffect(() => {
      const notes = JSON.parse(localStorage.getItem('not'));
  
      if(notes){
        dispatch({type: 'POPULATE_NOTES', notes: notes});
      }
    }, []);
  
  
    useEffect(() =>{
      localStorage.setItem('not',JSON.stringify(notes));
    },[notes]);
  

  
    return(
      <NotesContext.Provider value={{notes, title, body, setBody, setTitle, dispatch}}>
        <h1>Notes</h1>
        <NoteList />
        <p>Add note</p>
        <AddNoteForm/>
      </NotesContext.Provider>
    )
}

export default NoteApp;