import { Component } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";


class Profile extends Component {
    render() {
        return (
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className="Profile_pic"></img>
                <ul>
                    <li>Name : Ameer Hassan</li>
                    <li>Age : 17</li>
                    <li>Country : Palestine</li>
                    <li>Whatsapp num : +97259486559</li>
                    <li>Email : ameer_hassan2005@gmail.com</li>
                </ul>
                <div className="profile-div-all">
                    <Link to={'/profile/signed'}  className="link" id="profile-div">Signed</Link>
                    <Link to={'/profile/contact'}  className="link"id="profile-div">Contact</Link>
                    <Link to={'/profile/qualification'}  className="link" id="profile-div">Qualification</Link>
                </div>
            </div>
        )
    }
}

export default Profile
