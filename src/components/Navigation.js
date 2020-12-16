import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css'

function Navigation(){
    return <div>
        {/* this type refresh the whole page, so not efficient */}
        {/* <a href="/">Home</a> */}
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to={{
            pathname:"/about",
            state:{
                fromNavigation:true
            }
        }}>About</Link> */}
    </div>
}

export default Navigation;