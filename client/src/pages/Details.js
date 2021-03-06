import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import { db } from "../Firebase/Auth";
import { onSnapshot, collection } from "firebase/firestore";
import { doc, updateDoc, deleteField } from "firebase/firestore";



function Details(props) {
    const location = useLocation()
    const inforamtion = [
        { info: 'Courses', name: "courses", photo: "https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png" },
        { info: 'Cooking Tatourial', name: "cooking", photo: "https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg" },
        { info: 'Someone To Help', name: "someonetohelp", photo: "https://scontent.xx.fbcdn.net/v/t1.15752-9/287115173_712670316731780_52246432230886844_n.png?_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=cByqY4ylH3QAX-EZjPl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIj736iMc1GzIUMTeccI9QXu5AjGG7ATugXIjub4A6Y5g&oe=62D068AE" },
        { info: 'Requirements', name: "requirements", photo: "http://www.zabairsblog.tech/wp-content/uploads/2019/09/requirements.png" },
        { info: 'Map', name: "map", photo: "https://www.locusmap.app/wp-content/uploads/2020/11/banner-w3-1024x512.jpg" },
    ];
    var data = {
        university : location.state.university,
        major2 : location.state.majors.major,
        photo : location.state.majors.photo,
    }
    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(
      () =>
        onSnapshot(collection(db, "FiveDetails"), (snapshot) =>
          setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
    console.log(location.state);
    return (
        <div>
            <h1 className="Header"> {location.state.university}  -  {location.state.majors.major}</h1>
            <hr></hr>
            <button className='details_link' onClick={() => props.sign(data)}>Sign To This Major</button>
            {recipes.map((it) => {
                return (
                    <div className='UniDiv' >
                        <img src={it.photo} className="image"></img>
                        <h2 className="h3">{it.name} </h2>
                        <Link to={`/details/${it.info}`} state={location.state} className="details" id="major_div">Read More</Link>
                    </div>
                )
            })}
            
        </div>
    )

}

export default Details
