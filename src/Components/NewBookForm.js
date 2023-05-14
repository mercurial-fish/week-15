import { useState } from "react"
import React from 'react'

//NOTE - creates a form to add a book and utilizes addBook function from App.js

export default function NewBookForm({setNewTitle, setNewAuthor, setNewGenre, addBook}) {

  return (
    <div className="update-form">
        <form>
            <div>
          <h3 className="fs-3 fw-bold">New Book</h3>
          </div>
          <label className='form-label'>Title</label>
          <input
            className="form-control" 
            type='text'
            onChange={(e) => setNewTitle(e.target.value)} />
          <label className='form-label'>Author</label>
          <input
            className="form-control"
            type='text'
            onChange={(e) => setNewAuthor(e.target.value)} />
          <label className='form-label'>Genre</label>
          <input
            className="form-control" 
            type='text'
            onChange={(e) => setNewGenre(e.target.value)} />
          <button className="btn btn-success m-2 p-2" type='submit' onClick={(e) => addBook(e)}>Create</button>
        </form>
    </div>
  )
}
