import { Component, useState } from "react";
import React from "react";
import '../App.css'
// import  RTSvideo from "../../public/media/RPReplay_Final1656248713.mp4"
import { Link } from "react-router-dom";
import { db } from "../Firebase/Auth";
import { onSnapshot, collection } from "firebase/firestore";
import { doc, updateDoc, deleteField } from "firebase/firestore";

function About() {
    return (
        <div style={{ display: "flex", "flex-direction": "column", "align-items": "center" }}>
            <h1 className="Header">About Road To Success</h1>
            <iframe className="video" src="https://www.youtube.com/embed/x9E1gpUCcds?autoplay=1" title="RTS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="about-div">
                <img className="about-img " src="https://cdn.discordapp.com/attachments/857012204775276594/991274854936485978/unknown.png" />
                <h4 className="about-p">
                    Our goal is to help international students get the best experience possible while studying abroad. Our powerful tools empoer individuals to search for colleges, benefit from important courses, understand the requirements to get acceptance from their desired colleges, and more. Whether the student is familiar with the college process or not, we will be able to guide and help them!
                </h4>
            </div>
            <Link to={'/signup'} className="link" id="about-link" >Sign Up</Link>

        </div>
    )
}

export default About;