import React from "react";

const Newsitems = (props) => {

    const {article}= props
    
  return (
    <li className="News-item">
      <img className="image" src={article.urlToImage} alt="img" />
      <div className="news-details">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url}> Read more</a>
        <h3>{article.source.name}</h3>
        <p> Author:{article.author}</p>
      </div>
    </li>
  );
};

export default Newsitems;
