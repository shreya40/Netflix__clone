import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./request";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <MovieRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MovieRow title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
