import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function Teacher(){

    const location = useLocation()
    return (
        <div>
            <h1 className="teacher-header">{location.state.Name}</h1>
            <hr></hr>
            <img className="teacher-img" src={location.state.photo}/>
            <h3 className="teacher-emtitle" id="email"> Email :</h3>
            <h3 className="teacher-email">{location.state.Email}</h3>
            <h3 className="teacher-emtitle"> Number :</h3>
            <h3 className="teacher-email">{location.state.Number}</h3>
            <p className="teacher-p">{location.state.Description}</p>

        </div>
    )
}

export default Teacher
