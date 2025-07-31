// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; 
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://www.indiewire.com/wp-content/uploads/2024/07/Batman-animated-series-Amazon-Prime-Video.jpg?w=1250&h=703&crop=1",
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
  },
  {
    id: 3,
    title: "Inception",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582238792i/8565270.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    id: 4,
    title: "The Matrix",
    image: "https://m.media-amazon.com/images/I/613ypTLZHsL._AC_SL1000_.jpg",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  }
];

// Component HomePage
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Danh sách các bộ phim</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
