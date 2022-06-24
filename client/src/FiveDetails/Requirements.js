import { Component } from "react";
import React from "react";
import '../App.css'
import { useLocation } from 'react-router-dom'

function Requirements() {
    const location = useLocation()
    var Requirement = [
        { name: 'SAT', target: "Above 1400" },
        { name: 'TOFEL', target: "Above 100" },
        { name: 'IELTS', target: "Above 30" },
        { name: 'GPA', target: "Above 85%" },
        { name: 'Activities', target: " 4 or 5 activities " },
        { name: 'Personal interview', target: "Getting 3 out of 5 in the rating" },
        { name: 'Admission test', target: "Getting 80/100 as a minimum" },
        { name: 'Application essays', target: "GET 3 out of 5 in 5 essays at least" },
        { name: 'Files', target: "sending all the requested files" }
    ];
    return (
        <>
            <h1 className="Header">Requirements for {location.state.majors.major}</h1>
            {Requirement.map((it) => {
                return (
                    <div className="req_div" >
                        <h2 className="teacher-emtitle" id="req_header">{it.name} :</h2>
                        <h2 className="teacher-email" id="req_info">{it.target} </h2>
                    </div>
                )
            })}
        </>
    )
}

export default Requirements
