import React, { useState } from 'react';
import Nav1 from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';
import CardList from './CardList';
import './App.css';
import arr from './Data';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState(arr);
  const [rating, setRating] = useState(0);
  const [searchTitle, setSearchTitle] = useState('');

useEffect(() => {
  setData(arr)

}, [])


  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSearch = () => {
    const filteredResults = data.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(searchTitle.toLowerCase());
      const ratingMatch = movie.rating >= rating;
      return titleMatch && ratingMatch;
    });
    return filteredResults;
  };

  function onAdd(title, description, rating) {
    setData([...data, { title: title, description: description, rating: rating }]);
  }

  const filteredData = handleSearch();

  return (
    <div className="App">
      <Nav1 onAdd={onAdd} />
      <div className="prt">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Rating onClick={handleRating} ratingValue={rating} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <CardList info={filteredData} />
      </div>
    </div>
  );
}

export default App;
