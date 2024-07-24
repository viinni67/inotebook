import React, { useState } from 'react'
import { useContext } from 'react'
import Context from '../context/NoteContext'

const AddNotes = () => {
    const context=useContext(Context);
    const{Addnote}=context
    const [note,setnote]=useState({title:" ",description:" ",tag:" "})

  const handleClick=(e)=>{
     console.log(localStorage.getItem('token'))
    e.preventDefault();
    Addnote(note.title,note.description,note.tag);

  }
  const Change=(e)=>{
    console.log("working....")
    setnote({...note,[e.target.name]:e.target.value})


  }

  return (
      <div>
          <div className='border p-4 rounded shadow'>
              <h3 className='container '>Add your Note :)</h3>
              <form>
                  <div class="form-group my-3">
                      <label htmlfor="title">Title</label>
                      <input type="text" class="form-control" id="title" placeholder="Example title eg: my first day etc" name='title' onChange={Change}/>
                  </div>
                  <div class="form-group">
                    <label htmlfor="description">content </label>
                    <input type="text" className="form-control" id="description" placeholder="your decription" name='description' onChange={Change}/>
                </div>
                <div class="form-group">
                    <label htmlfor="description">tag </label>
                    <input type="text" className="form-control" id="tag" placeholder="Add your tag line eg :love ,general" name='tag' onChange={Change}/>
                </div>
                <button type='submit' className='btn btn-primary my-4 container' onClick={handleClick} id="checkAllTopicCheckBoxes">Add note </button>
            </form>
            <h3>your notes : </h3>
        </div>

    </div>
  )
}

export default AddNotes