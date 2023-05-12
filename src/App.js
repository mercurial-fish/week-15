import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const BOOKS_API = "https://6441e96533997d3ef904aac0.mockapi.io/CRUD_App_API/books";
  
  const [books, setBooks] = useState([]);
  
  const [newTitle, setNewTitle] = useState("")
  const [newAuthor, setNewAuthor] = useState("")
  const [newGenre, setNewGenre] = useState("")
  
  const [updatedTitle, setUpdatedTitle] = useState("")
  const [updatedAuthor, setUpdatedAuthor] = useState("")
  const [updatedGenre, setUpdatedGenre] = useState("")
  
  useEffect(() => {
    getBooks()
    console.log(books)
  }, [])
  
  
  
  function getBooks(){
    fetch(BOOKS_API)
      .then((data) => data.json())
      .then((data) => setBooks(data))
  }
  
  function deleteBook(id) {
    fetch(`${BOOKS_API}/${id}`, {
      method: "DELETE"
    }).then(() => getBooks())
  }
  
  function addBook(e) {
    e.preventDefault();
  
    fetch(BOOKS_API, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        author: newAuthor,
        genre: newGenre
      })
    }).then(() => getBooks())
  }
  
  function updateBook(e, bookObject) {
    e.preventDefault();
  
    let updatedBookObject = {
      ...bookObject,
      title: updatedTitle,
      author: updatedAuthor,
      genre: updatedGenre 
    }
  
    fetch(`${BOOKS_API}/${bookObject.id}`, {
      method: "PUT",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookObject)
    }).then(() => getBooks())
  }
  
  
  
    return (
      <>
      <div>
        {<form>
          <h3>New Book</h3>
          <label>Title</label>
          <input 
            type='text'
            onChange={(e) => setNewTitle(e.target.value)} />
          <label>Author</label>
          <input
            type='text'
            onChange={(e) => setNewAuthor(e.target.value)} />
          <label>Genre</label>
          <input 
            type='text'
            onChange={(e) => setNewGenre(e.target.value)} />
          <button type='submit' onClick={(e) => addBook(e)}>Create</button>
        </form>}
        </div>
        
        <div>
        {books.map((book, index) => (
          <div key={index}>
            <div>
              Title: {book.title}
              Author: {book.author}
              Genre: {book.genre}
            </div>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <form>
            <h3>Update Book</h3>
            <label>Title</label>
              <input
              type='text'
              onChange={(e) => setUpdatedTitle(e.target.value)} />
            <label>Author</label>
              <input 
                type='text'
                onChange={(e) => setUpdatedAuthor(e.target.value)} />
            <label>Genre</label>
              <input
                type='text'
                onChange={(e) => setUpdatedGenre(e.target.value)} />
          <button type='submit' onClick={(e) => updateBook(e, book)}>Update</button>
  
            </form>
          </div>
        ))}
        </div>
      </>
    )
  }

/*REVIEW - this needs to be styled with CSS and the components need to be separated. Look up how to do the integrated
update with CSS (I think it's called modal?) or look up how to do an update form for cSS on youtube */

export default App;
