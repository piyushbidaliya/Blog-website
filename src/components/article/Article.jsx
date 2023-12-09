import React, { useState } from "react";
import './article.css';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  }

  return (
    <p>
      {isReadMore ? text : text.slice(0, 150)}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Show less" : "Read more"}
      </span>
    </p>
  )
}

const Article = ({ imgurl, imgurl1, Title, Title1, subTitle, subTitle1, aboutTitle, aboutTitle1 }) => {
  return (
    <div className="row1">
      <div className="column1">
        <div className="card">
          <img src={imgurl} alt="sample2" />
          <div className="container2">
            <h2 className="Title">{Title}</h2>
            <p className="subTitle">{subTitle}</p>
            <p className="aboutTitle"><ReadMore>{aboutTitle}</ReadMore></p>
          </div>
        </div>
      </div>

      <div className="column1">
        <div className="card">
          <img src={imgurl1} alt="img1" />
          <div className="container2">
            <h2 className="Title">{Title1}</h2>
            <p className="subTitle">{subTitle1}</p>
            <p className="aboutTitle"><ReadMore>{aboutTitle1}</ReadMore></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;
