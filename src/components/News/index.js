import React, { useState } from "react";
import "./index.css";
import Newsitems from "../Newsitems";

const News = () => {
  const [search, setSearch] = useState("");

  const [newsData, setNewsData] = useState(null);

  const fetchNewsData = async (param) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${param}&apiKey=50d7788ad43c41acac8a48eb64158c2a`
      );

      const data = await response.json();

      if (data) {
        setNewsData(data.articles);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const changeNews = () => {
    fetchNewsData(search);
  };

  return (
    <div className="main-news">
      <div className="input-search-container">
        <h3>News App</h3>

        <h1>GO INDIA </h1>

        <input
          type="text"
          placeholder="search for news...."
          value={search}
          onChange={onChangeInput}
        ></input>

        <button onClick={changeNews}>Search</button>
      </div>

      <marquee className="scroll">
        The idea of redemption is always good news, even if it means sacrifice
        or some difficult times
      </marquee>

      <div>
        <img
          className="image2"
          src="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"
          alt="img"
        ></img>
      </div>

      <ul>
        {newsData?.map((article) =>
        (<Newsitems article= {article} />)
        
        ) }
        
        
      </ul>
    </div>
  );
};

export default News;
