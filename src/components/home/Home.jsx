import React from "react";
import './home.css';
import images from '../../assests/images.jpg';


const Home = () => {
    return(
    <div className="app__header section__padding" id="home">
        <div className="app__header-content">
            <h1 className="Gradient__text">
                Let,s Install Some Muscles
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et itaque eligendi nulla sit eos non adipis.</p>
            <div className="app__header-content__input">
                <a href="/blog"><button type="button">Get Started</button></a>
            </div>
        </div>
        <div className="app__header-image">
                <img src={images} alt="images"/>
        </div>
    </div>
    )
}


export default Home;