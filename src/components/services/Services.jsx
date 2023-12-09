import React from "react";
import './services.css';
import img1 from '../../assests/img1.jpg';
import img2 from '../../assests/img2.jpg';
import sample2 from '../../assests/sample2.jpg';


const Services = () =>{
    return(
        <div>
          <div className="recipe_mainheading">
            <h1 className="Gradient__text">Recipes</h1>
            </div>
          <div className="recipe_margin">
          <div className="recipe_container-big">
          <div className="recipe_container">
            <div className="recipe_container-card">
              <div className="recipe_card-image">
              <img src={img1} alt="btt" />
              </div>
            <div className="recipe_container-heading">
              <h1>abcd</h1>
              <p className="recipe-content">lorem ipsum</p>
              <p className="recipe-content-btn">Read More</p>
            </div>
          </div>
          </div>
          <div className="recipe_container">
            <div className="recipe_container-card">
              <div className="recipe_card-image">
              <img src={sample2} alt="btt" />
              </div>
            <div className="recipe_container-heading">
              <h1>abcd</h1>
              <p className="recipe-content">lorem ipsum</p>
              <p className="recipe-content-btn">Read More</p>
            </div>
          </div>
          </div>
          </div>

          <div className="recipe_container-big">
          <div className="recipe_container">
            <div className="recipe_container-card2">
              <div className="recipe_card-image2">
              <img src={img2} alt="btt" />
              </div>
            <div className="recipe_container-heading2">
              <h1>abcd</h1>
              <p className="recipe-content">lorem ipsum</p>
              <p className="recipe-content-btn">Read More</p>
            </div>
          </div>
          </div>
          <div className="recipe_container">
            <div className="recipe_container-card2">
              <div className="recipe_card-image2">
              <img src={img2} alt="btt" />
              </div>
            <div className="recipe_container-heading2">
              <h1>abcd</h1>
              <p className="recipe-content">lorem ipsum</p>
              <p className="recipe-content-btn">Read More</p>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Services;