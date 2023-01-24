import React from "react";
import './Header.css'


function Header(props){
return(
<div className="Header">
<img height="150px" width="240px" src={props.img} />
<div className="text">
<h1>{props.name}</h1>
</div>
</div>


)
}

export default Header