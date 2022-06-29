import { Component, useState } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";


function Contact() {

    const contact = [
        {
            name: 'Islam Al-Madani',
            facebook: 'https://www.facebook.com/profile.php?id=100010285984236',
            image: 'https://cdn.discordapp.com/attachments/786946082444804106/989920462576427088/islam.png',
            insta: 'https://www.instagram.com/islammadani222/'
        }, {
            name: 'Zaid ElKhazendar',
            facebook: 'https://www.facebook.com/profile.php?id=100007812795601',
            image: 'https://scontent.fgza4-1.fna.fbcdn.net/v/t39.30808-6/278488385_3298408647096196_6624229763695160643_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T275vPhm0n4AX-ab_O4&_nc_ht=scontent.fgza4-1.fna&oh=00_AT_y646hBq-baWjnY0c2WLr2_c9S0-c6PApGzlIALM_f-A&oe=62B8F3D7',
            insta: 'https://www.instagram.com/zaidkhazendar/',
        }, {
            name: 'Abdalrahman Abu Nimer',
            facebook: 'https://www.facebook.com/abdalrahman.abunimer',
            image: 'https://scontent.fgza4-1.fna.fbcdn.net/v/t39.30808-6/274261941_1255478974944853_8093456961536045880_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6nuszGLJxewAX98JKyM&_nc_ht=scontent.fgza4-1.fna&oh=00_AT-rNSuR-ivi6B6XJZ-j9nyRMKYrslT7y2Ji8l2VuTP1ig&oe=62B944A6',
            insta: 'https://www.instagram.com/abd.m.abunimer/'
        }, {
            name: 'Hadil Owda',
            facebook: 'https://www.facebook.com/profile.php?id=100008185053857',
            image: 'https://cdn.discordapp.com/attachments/786946082444804106/989920046501470208/289334048_833271768079021_7829297065157681710_n.jpg', // 
            insta: 'https://www.instagram.com/hadil.owda/',
        },
    ]
    return (
        <div>
            <h1 className="Header">Contact Us</h1>
            <hr></hr>
            {contact.map((it) => {
                return (
                    <div className='UniDiv_2'>
                        <img class src={it.image} className="image" id="contact"></img>
                        <h2 className="h3">{it.name} </h2>
                        <div id="contact_div">
                            <a href={it.facebook} target="_blank">
                                <img className="contact_img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/250732449_626018838817569_2199733525507894326_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=XjUN27jm8E0AX9UzDK4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJIv-eoYYMU_H0788Y_9cdeTTV0YG2rqWzTA2qo6gMtYQ&oe=62D89BD8"></img>
                            </a>
                            <a href={it.insta} target="_blank">
                                <img className="contact_img" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/289155380_601643211138816_1753068243523628985_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=H2VVwiOfNN0AX8uUPR-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLnOAcgjR63L1il-tsdmMjw4j4CG2K2oWF-GyOfm-FZyA&oe=62D80274"></img>
                            </a>
                        </div>
                    </div>
                )
            })}
            <h1 id="sub">Submission Form</h1>
            <input type="text" className="input1" placeholder={`Your Name..`} />
            <input type="text" className="input1" placeholder={`Your Email..`} />
            <input type="text" className="input1" id='Massage' placeholder={`Massage..`} />
            <input type="submit" id="submit" value="Submit" className="details_link" /> 
        </div>
    )
}
export default Contact