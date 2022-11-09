import React from "react";
import "./Section.css";

function Section(props){
    return (
        <li> <a className="Section" href="http://localhost:3000/">{props.name}</a></li>
    );
}

export default Section;