import { Component } from "react";
import { React, useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function Courses() {
    const location = useLocation()
    const [inputText , setinputText] = useState("")
    function change(e) {
        setinputText(e.target.value.toLowerCase())
    }
        const filteredData = location.state.majors.courses.filter((el) => {
            if (inputText === '') {
                return el;
            }
            else {
                return el.course.toLowerCase().includes(inputText)
            }
        })
        console.log(location.state);

        return (
            <>
                <input
                    id="outlined-basic"
                    onChange={change}
                    variant="outlined"
                    fullWidth label="Search"
                    className="input"
                    placeholder="Search For Course"
                />
                {filteredData.map((it) => {
                    return (
                        <div className='UniDiv'>
                            <a href={it.link} target = "_blank">
                                <img src={it.photo} className="image"></img>
                                <h2 className="h3">{it.course} </h2>
                            </a>
                        </div>
                    )
                })}
            </>
        )
    
}

export default Courses;
