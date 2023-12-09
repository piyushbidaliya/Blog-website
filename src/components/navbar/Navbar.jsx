import React, {useState} from "react";
import './navbar.css';

import logo from '../../assests/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu =()=>(
    <>
    <p><a href="/">Home</a></p>
    <p><a href="/services">Recipes</a></p>
    <p><a href="/blog">Blog</a></p>
    <p><a href="/about">About</a></p>
    <p><a href="/contact">Contact Us</a></p>


    </>
)


const Navbar = () => {
    const [toggleMenu, settoggleMenu]= useState(false);
    return(
    <div className="app_navbar">
        <div className="app__navbar-links">
            <div className="app__navbar-links_logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="app__navbar-links_container">
                <Menu/>
            </div>
        </div>
        <div className="app__navbar-menu">
            {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={()=>settoggleMenu(false)}/>
            :  <RiMenu3Line color='#fff' size={27} onClick={()=>settoggleMenu(true)}/>
            }
            {toggleMenu &&(
                <div className="app__navbar-menu_container scale-up-center">
                    <div className="app__navbar-menu_container-links">
                        <Menu/>
                    </div>
                </div>
            )}
        </div>
    </div>
    )
}

export default Navbar;