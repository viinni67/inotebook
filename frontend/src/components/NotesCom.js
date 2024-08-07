import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import Context from '../context/NoteContext'
import ItemNotes from './ItemNotes';
import AddNotes from './AddNotes';
import {useHistory} from 'react-router-dom';


const NotesCom = () => {
  let history=useHistory();
  const context = useContext(Context);
  const { notes, getNotes,update} = context;
  const [note, setnote] = useState({ id:"",title: "", description: "", tag: "" })

  const handleonClick = (e) => {
    e.preventDefault();
    console.log('clicking');
   
   update(note.id,note.title,note.description,note.tag);
   setnote({id:'',title:'',tag:''})

    // Addnote(note.title,note.description,note.tag);

  }
  const Change = (e) => {
    console.log("changing")
    setnote({ ...note, [e.target.name]: e.target.value })


  }
  useEffect(() => {
    if(localStorage.getItem('token')){
        getNotes()
    }
    else{
      //redirect
      history.push("/login")
    }
  
  }, [])
  const updateNote = (currentnote) => {
    console.log("noting??")
    //ref.current.click();
    setnote({id:currentnote._id,title:currentnote.title ,description:currentnote.description,tag:currentnote.tag})

  }
  //const ref = useRef(null);

  return (
    <>
      <AddNotes />
      


      <div className="modal fade border" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">update</h5>
              {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <div className='border p-4 rounded shadow'>
              <form >
                <div class="form-group my-3"> 
                  <label htmlFor="title">Title</label>
                  <input type="text" class="form-control" id="title" placeholder="Example input" name='title' defaultValue={note.title} onChange={Change} />
                </div>
                <div class="form-group">
                  <label htmlFor="description">content </label>
                  <input type="text" className="form-control" id="description" placeholder="Another input" name='description'  defaultValue={note.description} onChange={Change} />
                </div>
                <div class="form-group">
                  <label htmlFor="description">tag </label>
                  <input type="text" className="form-control" id="tag" placeholder="Another input" name='tag'  defaultValue={note.tag} onChange={Change} />
                </div>
                
              </form>
             
            </div>
            <div className="modal-footer " >
              <button type="button" className="btn btn-secondary"   data-bs-toggle="modal" data-bs-target="#exampleModal" data-dismiss="modal">Close</button>
              <button type="button"   className="btn btn-primary" onClick={handleonClick} data-bs-toggle="modal" data-bs-target="#exampleModal" >Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>

        {notes.map((note) => {
          return <ItemNotes key={note._id} updateNote={updateNote} note={note} />;


        })}
      </div>
    </>
  )
}

export default NotesCom