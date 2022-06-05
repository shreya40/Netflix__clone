import React, { useEffect, useState } from "react";
import axios from "./axios.js";
import requests from "./request";
import "./Banner.css";
function Banner() {
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setRandomMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);
  //   console.log(randomMovie);

  function truncateText(str, n) {
    //truncate the text
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {randomMovie?.title ||
              randomMovie?.name ||
              randomMovie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_btn">Play</button>
            <button className="banner_btn">My List</button>
          </div>
          <h1 className="banner_description">
            {truncateText(randomMovie?.overview, 150)}
          </h1>
        </div>
        <div className="banner__fadebottom" />
      </header>
    </>
  );
}
export default Banner;
