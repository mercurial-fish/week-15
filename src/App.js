//NOTE - Imports functions, css, and Bootstrap

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from 'react';
import ListOfBooks from './Components/ListOfBooks';
import NewBookForm from './Components/NewBookForm';
import UpdateBook from './Components/UpdateBook';

function App() {

  const BOOKS_API = "https://6441e96533997d3ef904aac0.mockapi.io/CRUD_App_API/books";


  const [books, setBooks] = useState([]);


  const [newTitle, setNewTitle] = useState("")
  const [newAuthor, setNewAuthor] = useState("")
  const [newGenre, setNewGenre] = useState("")
  
  const [bookId, setBookId] = useState("")
  const [updatedTitle, setUpdatedTitle] = useState("")
  const [updatedAuthor, setUpdatedAuthor] = useState("")
  const [updatedGenre, setUpdatedGenre] = useState("")
  
  useEffect(() => {
    getBooks()
    console.log(books)
  }, [])
  
  //NOTE - fetches data from API to be used to create the booklist

  function getBooks(){
    fetch(BOOKS_API)
      .then((data) => data.json())
      .then((data) => setBooks(data))
  }
  
  //NOTE - based on the id of the item, deletes said item and re-renders the remaining items from API
  function deleteBook(id) {
    fetch(`${BOOKS_API}/${id}`, {
      method: "DELETE"
    }).then(() => getBooks())
  }
  
  //NOTE - adds book to the array and re-renders
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

  //NOTE - calls upon the book by id and then updates the info
  function updateBook(e) {
    e.preventDefault();
    let id = bookId
  
    fetch(`${BOOKS_API}/${id}`, {
      method: "PUT",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({

        title: updatedTitle,
        author: updatedAuthor,
        genre: updatedGenre 
      })
    }).then(() => getBooks())
  }
  
  
  
    return (
      <>
      <NewBookForm 
        setNewTitle={setNewTitle} 
        setNewAuthor={setNewAuthor} 
        setNewGenre={setNewGenre} 
        addBook={addBook} />
      <UpdateBook
        setBookId={setBookId} 
        setUpdatedTitle={setUpdatedTitle} 
        setUpdatedAuthor={setUpdatedAuthor} 
        setUpdatedGenre={setUpdatedGenre} 
        updateBook={updateBook} />
      <ListOfBooks 
        books={books} 
        deleteBook={deleteBook} />
      </>
      )
  }


export default App;
