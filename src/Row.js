import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import "./Row.css"
export const Row =({title, fetchURL, isLargeRow})=>{
    const base_url ="https://image.tmdb.org/t/p/original/";
    const [movies, setMovies]=useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")


    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchURL);
            // console.log(request)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchURL])
    // console.log(movies)


    const opts ={
        height:"390",
        width:"100%",
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },

    };


    const handleclick =(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "" )
            .then((url) =>{
                const urlPrams =new URLSearchParams(url);
                console.log("url params", urlPrams)
               setTrailerUrl(urlPrams.get("v"));
            }).catch(error=>console.log(error))
        }
    }

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className={`row__posters`}>
                {movies.map(movie =>(
                    <img 
                    key={movie.id}
                    onClick={()=>{
                        handleclick(movie)
                    }}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${ isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt ={movie.name}  ></img>
                ))}
            </div>

            {trailerUrl && <YouTube videoId="TGt8Aq0jVHI" opts={opts}/>}

        </div>
    )
}