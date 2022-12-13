import React, { useEffect, useState } from "react";
import "./Nav.css"
export const Navbar =()=>{
    const[show, handelshow]=useState(false)

    //=====NavBar Change on scroll =======//

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handelshow(true)
                        }
            else handelshow(false);
        })
        return()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return(

        //======{`nav ${show  && "nav__black"}`}======//
        
        <div className={`nav ${show  && "nav__black"}`}>
            <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />

            <img className="nav__avtar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo" />


        </div>
    )
}