import React, { useState, setState } from 'react';
import '../App.css'
import { Link } from "react-router-dom";
function SignUp() {

    const [Name, setFirstName] = useState(null);
    const [age, setLastName] = useState(null);
    const [Country, setPassword] = useState(null); 
    const [email, setEmail] = useState(null);
    const [Password, setConfirmPassword] = useState(null);
    const data = { 
        name1 : Name , age1 : age , country1 :Country, email1 :email
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "Name") {
            setFirstName(value);
        }
        if (id === "age") {
            setLastName(value);
        }
        
        if (id === "Country") {
            setPassword(value);
        }
        if (id === "email123") {
            setEmail(value);
        }
        if (id === "Password") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        console.log(Name, age, Country, email, Password);
    }

    return (
        <div style={{ display: "flex", "flex-direction": "column", "align-items": "center" }}>
            <h1 className='Header'>Sign Up</h1>
            <hr></hr>
            <div className="form">
                <div className='divv'>
                    <div className="sign-div labels">
                        <label className="form__label" for="Name">Name :</label>
                        <label className="form__label" for="age">Age</label>
                        <label className="form__label" for="Country">Country :</label>
                        <label className="form__label" for="email">Email :</label>
                        <label className="form__label" for="Password">Password :</label>
                    </div>
                    <div className="sign-div" id='sign-div1'>
                        <input className="form__input" type="text" value={Name} onChange={(e) => handleInputChange(e)} id="Name" placeholder="Name.." />
                        <input type="text" id="age" value={age} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="Age.." />
                        <input className="form__input" type="text" id="Country" value={Country} onChange={(e) => handleInputChange(e)} placeholder="Country.." />
                        <input type="text" className="form__input" id='email123' value={email} onChange={(e) => handleInputChange(e)} placeholder="Email.." />
                        <input className="form__input" type="password" id="Password" value={Password} onChange={(e) => handleInputChange(e)} placeholder="Password.." />
                    </div>
                </div>

            </div>
            <Link to={'/Profile'} state ={data}className="link" id="sign-link" >Sign Up</Link>
        </div>
    )
}

export default SignUp