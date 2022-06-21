import { Component } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

class SomeoneToHelp extends Component {
    constructor() {
        super()
        this.state = {
            inputText: '',
        };
        this.change = this.change.bind(this);
    }
    change(e) {
        this.setState({ inputText: e.target.value.toLowerCase() })
    }
    render() {
        var people = [
            {
                Name: 'Katie Zimmerman',
                description: 'Director of Copyright Strategy Katie can help you with questions about copyright author agreements open access publishing, as well as the copyright and licensing aspects of text and data mining.',
                photo: "https://libraries.mit.edu/img/staff-photos/kbzimmer-100x100.jpg?fbclid=IwAR2omCW7BDz82Vl1gTwqxcUebmpsw-bQ14MnEXA3kuSXA2z2gdJawoUMwa4"
            },
            {
                Name: 'Ece Turnator',
                description: 'Humanities and Digital Scholarship Librarian Liaison, Instruction, and Reference Services turnator  Ece studies and supports digital research methods in the humanities. She can help you locate sources of data, create data management plans, and find humanities-related research grants. She teaches workshops on file organization, data management, and online mapping.',
                photo: "https://libraries.mit.edu/img/staff-photos/turnator-100x100.jpg"
            },
            {
                Name: 'Barbara Williams',
                description: 'AeroAstro and Physics Librarian Liaison, Instruction, and Reference Services Pronouns: she/her Ece studies and supports digital research methods in the humanities. She can help you locate sources of data, create data management plans, and find humanities-related research grants. She teaches workshops on file organization, data management, and online mapping.',
                photo: "https://libraries.mit.edu/img/staff-photos/barbaraw-100x100.jpg"
            }
        ];
        const filteredData = people.filter((el) => {
            if (this.state.inputText === '') {
                return el;
            }
            else {
                return el.Name.toLowerCase().includes(this.state.inputText)
            }
        })
        return (
            <div>
                <input
                    id="outlined-basic"
                    onChange={this.change}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    className="input"
                    placeholder="Search For Name"
                />
                {filteredData.map((it) => {
                    return (
                        <div className='UniDiv' >
                            <img src={it.photo} className="image" id = "somehelp"></img>
                            <h2 className="h3">{it.Name} </h2>
                            <Link to={`/details/someonetohelp/teacher`} className="details" id="teacher">About</Link>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SomeoneToHelp
