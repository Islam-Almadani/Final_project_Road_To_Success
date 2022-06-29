import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import { db } from "../Firebase/Auth";
import { onSnapshot, collection } from "firebase/firestore";
import { doc, updateDoc, deleteField } from "firebase/firestore";


function SomeoneToHelp(){
    const location = useLocation()
    const [inputText , setinputText] = useState("")
    function change(e) {
        setinputText(e.target.value.toLowerCase())
    }
        var people = [
            {
                Name: 'Katie Zimmerman',
                Email: 'kbzimmer@mit.edu',
                Number: 'NE36-6101 | 617.324.4871 ',
                Description: 'Director of Copyright Strategy  Katie can help you with questions about copyright author agreements open access publishing, as well as the copyright and licensing aspects of text and data mining.', 
                photo: "https://libraries.mit.edu/img/staff-photos/turnator-100x100.jpg"
            },
            {
                Name: 'Ece Turnator',
                Email: 'turnator @mit.edu',
                Number: '14S-210 | 617.253.497',
                Description: 'Humanities and Digital Scholarship Librarian Liaison, Instruction, and Reference Services Ece studies and supports digital research methods in the humanities. She can help you locate sources of data, create data management plans, and find humanities-related research grants. She teaches workshops on file organization, data management, and online mapping.', 
                photo: "https://libraries.mit.edu/img/staff-photos/kbzimmer-100x100.jpg"
            },
            {
                Name: 'Barbara Williams',
                Email: 'barbaraw@mit.edu',
                Number: '10-500 | 617.253.5666',
                Description: 'AeroAstro and Physics Librarian Liaison, Instruction, and Reference Services Ece studies and supports digital research methods in the humanities. She can help you locate sources of data, create data management plans, and find humanities-related research grants. She teaches workshops on file organization, data management, and online mapping.', 
                photo: "https://libraries.mit.edu/img/staff-photos/barbaraw-100x100.jpg"
            }
        ];
        const [recipes, setRecipes] = React.useState([]);
    React.useEffect(
      () =>
        onSnapshot(collection(db, "SomeOneToHelp"), (snapshot) =>
          setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
        const filteredData = recipes.filter((el) => {
            if (inputText === '') {
                return el;
            }
            else {
                return el.name.toLowerCase().includes(inputText)
            }
        })
        return (
            <div>
                <input
                    id="outlined-basic"
                    onChange={change}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    className="input"
                    placeholder="Search For Name"
                />
                {filteredData.map((it) => {
                    return (
                        <div className='UniDiv_1' >
                            <img src={it.photo} className="image" id="somehelp"></img>
                            <h2 className="h3">{it.name} </h2>
                            <Link to={`/details/someonetohelp/teacher`} state={it} className="details" id="teacher">About</Link>

                        </div>
                    )
                })}
            </div>
        )
    
}

export default SomeoneToHelp
