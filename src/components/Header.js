import { useState,useEffect } from "react";
let logs="login";
const Header=()=>{
    const[btnName,setbtnName]=useState("login");


    return(
    <div className="header">
        <div className="logo">
            <img  src="" alt="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                 <button className="login-btn" onClick={()=>{
                    btnName==="login"?
                    setbtnName("logout"):setbtnName("login");
                }}>{btnName}</button>
            </ul>
        </div>
        </div>
    );
};
export default Header;