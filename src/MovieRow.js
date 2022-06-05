import React, { useEffect, useState } from "react";
import "./MovieRow.css";
import axios from "./axios"; //axios commomn link used before every api link
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //add the dependency variable here ,variable outside used here,get diff ans if not used

  //   console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    autoplay: 1,
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); //closes it
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); // get everything after ?
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // src={"${base_url}${movie.poster_path}"}
            // alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarger"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default MovieRow;
