import React from 'react'

//NOTE - creates a form that utilizes the updateBook function in App.js

export default function UpdateBook({setBookId, setUpdatedTitle, setUpdatedAuthor, setUpdatedGenre, updateBook}) {
  return (
    <div className='update-form'>
        <form>
            <div>
            <h3 className='fs-3 fw-bold'>Update Book</h3>
            </div>
                <label className='form-label'>Book ID</label>
                <input
                    className='form-control'
                    type='text'
                    onChange={(e) => setBookId(e.target.value)}
                />
                <label className='form-label'>Title</label>
                <input
                    className='form-control'
                    type='text'
                    onChange={(e) => setUpdatedTitle(e.target.value)} />
                <label className='form-label'>Author</label>
                <input
                    className='form-control' 
                    type='text'
                    onChange={(e) => setUpdatedAuthor(e.target.value)} />
                <label className='form-label'>Genre</label>
                <input
                    className='form-control'
                    type='text'
                    onChange={(e) => setUpdatedGenre(e.target.value)} />
          <button 
            className='btn btn-primary m-2 p-2'
            type='submit' 
            onClick={(e) => updateBook(e)}>Update</button>
        </form>
    </div>
  )
}
