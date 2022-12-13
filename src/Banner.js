import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css"
import requests from "./requests";
export const Banner =()=>{
    const [movie, setMovie] =useState([]);
    const base_url ="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
            );
            
            return request;  
        }
        fetchData()
    },[1])
    console.table(movie)

// Truncate Description //


function truncate (str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." :str;
}



    return(
        <div>
            <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage : `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center  "
            }}>{/*background image*/}

            <div className="banner__contents">
                {/* title*/}
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                 {/* two button*/}
                 <div className="banner__buttons">
                     <button className="banner__button">Play</button>
                     <button className="banner__button">My List</button>
                 </div>
                
                  {/* description   */}

                  <h1 className="banner__description">{truncate (movie?.overview, 150)}
                    </h1>
            </div>
            <div className="banner__fadebottom"></div>
                
                  
            </header>
        </div>
    )
}