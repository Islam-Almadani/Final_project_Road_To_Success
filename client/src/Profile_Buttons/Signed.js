import { Component, useState } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Signed(props) {
    console.log(props.name);
    return (
        <div>
            {
            props.name && props.name.map((it) => {
                return (
                    <div className='UniDiv' >
                        <img src={it.photo} className="image"></img>
                        <h2 className="h3">{it.major2} </h2>
                        <Link to={`/details`} className="details" id="major_div">Some Details</Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Signed