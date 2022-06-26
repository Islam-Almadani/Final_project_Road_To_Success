import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Navbar = () => {
    return (
        <nav>
            <img src='https://scontent.fgza2-1.fna.fbcdn.net/v/t1.15752-9/287692696_596580978551942_2068821786274283309_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TE3qTLWNj4gAX-2HWGY&_nc_ht=scontent.fgza2-1.fna&oh=03_AVKqWATBL_e-1gbXUTom7DvdldOaLp_DkG4Y2qvxdX0U6g&oe=62D25435' id="Nav-image"></img>
            <div className="navdiv">
                <Link to="/Home" className="Navlink">
                    <img id="icons" src='https://cdn.discordapp.com/attachments/857012204775276594/990585192978743306/41-home-outline2.gif'></img>
                </Link>
                <Link to={'/contact'} className="Navlink">
                    <img id="icons" src='https://cdn.discordapp.com/attachments/857012204775276594/990584206381961316/58-call-phone-outline2.gif'></img>
                </Link>
                <Link to="/Profile" className="Navlink">
                    <img id="icons" src='https://cdn.discordapp.com/attachments/857012204775276594/990585193234567218/8-account-outline4.gif'></img>
                </Link>
            </div>
        </nav>

    )
}
export default Navbar;