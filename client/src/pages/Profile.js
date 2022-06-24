import { Component } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";


function Profile() {
        const details = [
            {header : 'Name' , info : 'Ameer Hassan'},
            {header : 'Age' , info : '17'},
            {header : 'Country' , info : 'Palestine'},
            {header : 'Whatsapp Num' , info : '+97259486559'},
            {header : 'Email' , info : 'ameer_hassan2005@gmail.com'},
        ]
        return (
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className="Profile_pic"></img>
                {
                    details.map((it)=>{
                        return(
                            <div  className="profile_div">
                                <h3 className="teacher-emtitle" id="profile_header">{it.header} : </h3>
                                <h3 className="teacher-email" id="profile_info">{it.info}</h3>
                            </div>
                        )
                    })
                }
                <div className="profile-div-all">
                    <Link to={'/profile/signed'}  className="link" id="profile-div">Signed</Link>
                    <Link to={'/profile/contact'}  className="link"id="profile-div">Contact</Link>
                    <Link to={'/profile/qualification'}  className="link" id="profile-div">Qualification</Link>
                </div>
            </div>
        )
}

export default Profile
