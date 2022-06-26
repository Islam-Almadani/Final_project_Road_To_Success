import { Component, useState } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Home() {
    const [inputText , setinputText] = useState("")
    function change(e) {
        setinputText(e.target.value.toLowerCase())
    }

        const universities = [
            { University: 'MIT University', photo: "https://www.science.org/do/10.1126/science.aav7395/abs/MIT_16x9_0.jpg" },
            { University: 'Stanford University', photo: "https://united-states.education/wp-content/uploads/2017/05/stanford-700x405.jpg" },
            { University: 'Harvard University', photo: "https://image.cnbcfm.com/api/v1/image/106604493-1594057373282harvarduniversitysdunsterhouseincambridgema.jpg?v=1594057738" },
            { University: 'Caltech University', photo: "https://www.usnews.com/dims4/USNEWS/a1262a7/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F36%2Fb2a8b47dd2d1a501ad2f9a8338118e%2Fcollege-photo_34898.jpg" },
            { University: 'Sorbonne University', photo: "https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/sorbonne.jpg?itok=qaSyXO5E" },
            { University: 'Cambridge University', photo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Cambridge_Peterhouse_OldCourt.JPG" },
            { University: 'Yale University', photo: "https://www.sparkadmissions.com/wp-content/uploads/2020/03/Yale_Acceptance_Rate.jpg" },
            { University: 'NUS University', photo: "https://world.yale.edu/sites/default/files/styles/yatw_790x400/public/basic_page_header_image/nus.jpg?itok=pQYQFbgF" },
            { University: 'princeton University', photo: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_768,q_50,w_1024/v1/clients/princetonnj/princeton_university_main_building_at_front_gate_geraldine_scull_209cbd93-c4fc-4485-a274-66b4076c71e0.jpg" }
        ];
        const filteredData = universities.filter((el) => {
            if (inputText === '') {
                return el;
            }
            else {
                return el.University.toLowerCase().includes(inputText)
            }
        })
        return (
            <>
                <input
                    id="outlined-basic"
                    onChange={change}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    className="input"
                    placeholder ="Search For University"
                    img = "https://cdn.discordapp.com/attachments/857012204775276594/990585193234567218/8-account-outline4.gif"
                />
                {filteredData.map((it) => {
                    return (
                        <div className='UniDiv'>
                            <img src={it.photo} className="image"></img>
                            <h2 className="h3">{it.University} </h2>
                            <Link to={`/majors/${it.University}`} state={it} className="details">Majors</Link>
                        </div>
                    )
                })}
            </>
        )
    
}

export default Home
