import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MovieGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = "&language=pt-br"

// 

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}${language}`;
        getTopRatedMovies(topRatedUrl)
    }, []);

  return (
    <div className="container">
        <h2 className="title">MELHORES FILMES</h2>
        <div className="movies-container">
            {topMovies.length === 0 && <iframe src="happy.svg" width="400px" height="400px"></iframe> }
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    </div>
  )
}

export default Home