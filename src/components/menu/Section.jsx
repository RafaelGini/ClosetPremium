import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";

function Section(props){
    return (
        <li className="li__Navbar"><Link to={props.to} className="Section">{props.name}</Link></li>
    );
}

export default Section;