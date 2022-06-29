import { Component, useState } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Qualification(){
    var Qualificatins = [
        { name: 'SAT', degree:" 1480 "},
        { name: 'TOFEL', degree:" 104 " },
        { name: 'IELTS', degree: " 35 " },
        { name: 'GPA', degree: " 95%" },
        { name: 'Activities', degree: "Sports, Artist ,and Coder" },
        { name: 'Personal interview prep course', degree: "95 /100"},
        { name: 'Projects', degree: "+10 open source projects"},
        { name: 'Languages', degree: "Speaking 3 languages" },
    ];
    return (
        <>
            <h1 className="Header">Qualificatins</h1>
            <hr></hr>
            {Qualificatins.map((it) => {
                return (
                    <div className="req_div" >
                        <h2 className="teacher-emtitle" id="req_header">{it.name} :</h2>
                        <h2 className="teacher-email" id="req_info">{it.degree} </h2>
                    </div>
                )
            })}
        </>
    )
}
export default Qualification