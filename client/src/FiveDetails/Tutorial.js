import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useState } from "react";
function Tutorial(){
    const location = useLocation()
    return(
        <div>
            <h1 className="Header">{location.state.Name} </h1>
            <img src={location.state.photo} className="teacher-img" id="cooking"></img>
            <p className="teacher-p">{location.state.Details}</p>
            <a  href={location.state.Video} target = "_blank" className="details_link" id="Tutorial_link"> Video Tutorial</a>
        </div>
    )
}

export default Tutorial