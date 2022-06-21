import { Component } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

class Map extends Component {
    render() {
        return (
            <img src='http://schmidta.scripts.mit.edu/tabletop_workshop/map.png' className="map"/>
        )
    }
}

export default Map
