import React from 'react'

//NOTE - maps over the array and creates a card of the info, as well as a delete button for each object

export default function ListOfBooks({books, deleteBook}) {

  return (
    <div>
        {books.map((book, index) => (
        <div className='card bg-info' key={index}>
            <p>ID: {book.id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          <button
            className='btn btn-danger m-2 p-2' 
            onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
))}
    </div>
  )
}
