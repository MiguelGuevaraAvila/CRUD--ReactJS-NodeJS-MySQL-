import React, { useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [bookName, setBookName ]= useState("");
  const [review, setReview]= useState("");
  
  const submitReview = ()=>{
    Axios.post('http://localhost:3001',{
      bookName:bookName,
      bookReview:review,
    }).then(()=>{
      alert('Review successfully submitted');
    })
  };



  return (
    <div className="App">
      <h1>CRUD Application APP</h1>

      <div className="form">
        <label for="bookName">Book name:</label>
          <input type="text" name="bookName"  onChange={(e)=>{
          setBookName(e.target.value);
        }}/>
        <label for="bookName">Review:</label>
          <input type="text" name="review" onChange={(e)=>{
          setReview(e.target.value);
        }}/>

          <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}

export default App;
