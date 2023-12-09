import React from "react";
import './blog.css';
import sample2 from '../../assests/sample2.jpg';
import img1 from '../../assests/img1.jpg';
import img2 from '../../assests/img2.jpg';
import {Article} from "../../components";



const Blog = () =>{
    return(
      <div className="app__blog section__padding" id="bl">
        <div className="app__blog-header">
          <h1 className="Gradient__text">A lot is happening We are blogging about it</h1>
        </div>
        <div className="app__blog-container">
          <div className="app__blog-container_groupA">
            <Article imgurl={img1} imgurl1={img2} imgurl2={sample2}
             Title="Fitness" Title1="Health" subTitle="abcd" subTitle1="efgh"
             aboutTitle="lorrrkbnk nknbksnk Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet est itaque non maiores deserunt dolores fuga dolore facere id. Ipsum asperiores maxime facilis iure ratione enim accusantium earum quos minima?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet est itaque non maiores deserunt dolores fuga dolore facere id. Ipsum asperiores maxime facilis iure ratione enim accusantium earum quos minima?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet est itaque non maiores deserunt dolores fuga dolore facere id. Ipsum asperiores maxime facilis iure ratione enim accusantium earum quos minima?"  aboutTitle1="lorem ipsum nvksnbjsnjknbjnjks"/>

            <Article imgurl={img1} imgurl1={img2} imgurl2={sample2} 
            Title="Fitness" Title1="Fitness" subTitle="abcd" subTitle1="abcd"
            aboutTitle="lorem ipsum nvksnbjsnjknbjnjks" aboutTitle1="lorem ipsum nvksnbjsnjknbjnjks"/>

            <Article imgurl={img1} imgurl1={img2} imgurl2={sample2} 
            Title="Fitness" Title1="Fitness" subTitle="abcd" subTitle1="abcd"
            aboutTitle="lorem ipsum nvksnbjsnjknbjnjks" aboutTitle1="lorem ipsum nvksnbjsnjknbjnjks"/>
        </div>
        </div>
      </div>
    )
}

export default Blog;

