import "./../index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// single page application
// Routing 
// client side routing 
// server side routing


const Title = () => 
{
   
    return(
    <img alt="logo"
    className='Logo'
    src = {require('../images/logo.png')}
    />  )
}

const HeaderComponent = () =>{
    let title  = "Food villa";
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    
    return (
        <div className='header'>
            <Title />

            <div className ="nav-items">
                <ul>
                    <li>Home </li>
                    <Link to="about">
                    <li>About </li>
                    </Link>
                    <Link to="contact">
                    <li>Contact </li>
                    </Link>
                   
                </ul>
            </div>
            {
                isLoggedIn ? (
                    <button onClick={ () => setIsLoggedIn(false)}>Logout</button>
                ) : 
             (
                <button onClick={ () => setIsLoggedIn(true)}>Login</button>
             )
            }
        </div>
    )
};

export default HeaderComponent;