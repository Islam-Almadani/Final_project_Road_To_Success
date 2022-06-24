import { Component } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

class Cooking extends Component {
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
        return (
            <h1>this is Cooking</h1>
        )
    }
}

export default Cooking;
