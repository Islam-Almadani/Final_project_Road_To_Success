import { Component } from "react";
import React from "react";
import '../App.css'
import { useLocation } from 'react-router-dom'
import { db } from "../Firebase/Auth";
import { onSnapshot, collection } from "firebase/firestore";
import { doc, updateDoc, deleteField } from "firebase/firestore";


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
    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(
      () =>
        onSnapshot(collection(db, "Requirement"), (snapshot) =>
          setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
    return (
        <>
            <h1 className="Header">Requirements for {location.state.majors.major}</h1>
            <hr></hr>
            {recipes.map((it) => {
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
