import React from "react";

function Logo(props){
    return (
        <div>
            <img src="img/ClosetLogoBlack.png" alt={props.logoAlt} width={props.width}/>
        </div>
    );
}

export default Logo;