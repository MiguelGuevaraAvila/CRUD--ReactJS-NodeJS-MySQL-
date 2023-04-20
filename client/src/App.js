import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const [bookName, setBookName ]= useState("");
  const [bookReview, setReview]= useState("");
  const [bookReviewList, setBookList] = useState([]);
  
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setBookList(response.data);
    });
  },[]);

  const submitReview = ()=>{
    Axios.post('http://localhost:3001/api/insert',{
      'bookName':bookName,
      'bookReview':bookReview
    }).then(()=>{
      alert('Review successfully submitted');
    })
  };



  return (
    <div className="App">
      <h1>CRUD Application APP</h1>

      <div className="form" method='POST'>
        <label for="bookName">Book name:</label>
          <input type="text" name="bookName"  onChange={(e)=>{
          setBookName(e.target.value);
        }}/>
        <label for="bookName">Review:</label>
          <input type="text" name="bookReview" onChange={(e)=>{
          setReview(e.target.value);
        }}/>

          <button onClick={submitReview}>Submit</button>

          {
            bookReviewList.map((val)=>{
              return (
                <div>
                    <h3>Nombre del Libro :     
                      <span>
                        {val.bookName} 
                      </span>
                    </h3>
                    <p>
                      Opiniones del libro : {val.bookReview}
                    </p>
                </div>)
            })
          }
      </div>
    </div>
  );
}

export default App;
