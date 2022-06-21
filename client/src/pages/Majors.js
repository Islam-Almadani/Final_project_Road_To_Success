import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useState } from "react";

function Majors() {
    const location = useLocation()
    const [inputText , setinputText] = useState("")
    function change(e) {
        setinputText(e.target.value.toLowerCase())
    }
        const majors = [
            { major: 'Computer science', photo: "https://engineering.buffalo.edu/content/engineering/computer-science-engineering/undergraduate/degrees-and-programs/ba-in-computer-science/_jcr_content/par/image.img.original.png/1560278866579.png" },
            { major: 'Architecture', photo: "https://www.build-review.com/wp-content/uploads/2020/01/model-architecture.jpg" },
            { major: 'Physics', photo: "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg" },
            { major: 'Mathematics', photo: "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" },
            { major: 'Mechanical engineering', photo: "https://muneerlyati.com/wp-content/uploads/2021/01/Mechanical-Engineering.jpg" },
            { major: 'Music', photo: "https://media.istockphoto.com/vectors/music-note-icon-vector-illustration-vector-id1175435360?k=20&m=1175435360&s=612x612&w=0&h=1yoTgUwobvdFlNxUQtB7_NnWOUD83XOMZHvxUzkOJJs=" },
            { major: 'theatre arts', photo: "https://vpa.uncg.edu/wp-content/uploads/2021/02/BeFunky-photo-6-2.jpg" },
            { major: 'Management', photo: "https://previews.123rf.com/images/garagestock/garagestock1608/garagestock160807269/61461074-business-management-chart-with-keywords-and-icons-sketch.jpg" },
            { major: 'Neuroscience', photo: "https://www.neuron-eranet.eu/wp-content/uploads/brain-AS_metamoreworks-209172059-400.jpg" }
        ];
        const filteredData = majors.filter((el) => {
            if (inputText === '') {
                return el;
            }
            else {
                return el.major.toLowerCase().includes(inputText)
            }
        })
        const university = location.state.University

        return (
            <div>
                <h1 className="Header">{location.state.University}</h1>
                <input
                    id="outlined-basic"
                    onChange={change}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    className="input"
                    placeholder="Search For Major"
                />
                
                {filteredData.map((it) => {
                    const state1 = {majors : it , university : location.state.University}

                    return (
                        <div className='UniDiv' >
                            <img src={it.photo} className="image"></img>
                            <h2 className="h3">{it.major} </h2>
                            <Link to={'/details'} state={state1} className="details" id="major_div">Some Details</Link>
                        </div>
                    )
                })}
            </div>
        )
    
}

export default Majors
