import { Component } from "react";
import React from "react";
import '../App.css'

class Profile extends Component {
    render() {
        return (
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className="Profile_pic"></img>
                <ul>
                    <li>Name :                 {'Ameer Hassan'}</li>
                    <li>Age : 17</li>
                    <li>Country : Palestine</li>
                    <li>Whatsapp num : +97259486559</li>
                    <li>Email : ameer_hassan2005@gmail.com</li>
                </ul>
            </div>
        )
    }
}

export default Profile
