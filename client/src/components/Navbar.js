import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Navbar = () => {
    return(
        <nav>
            <img src='https://scontent.fgza2-1.fna.fbcdn.net/v/t1.15752-9/287692696_596580978551942_2068821786274283309_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TE3qTLWNj4gAX-2HWGY&_nc_ht=scontent.fgza2-1.fna&oh=03_AVKqWATBL_e-1gbXUTom7DvdldOaLp_DkG4Y2qvxdX0U6g&oe=62D25435' id="Nav-image"></img>
            <Link  to="/Home" className = "link">Home</Link>
            <Link  to="/Profile" className = "link">Profile</Link>
        </nav>  
    )
}
export default Navbar;