import React, { useState } from "react";
import "./index.css";
import Newsitems from "../Newsitems";

const News = () => {
  const [search, setSearch] = useState("");

  const [load, setLoad] = useState(false);

  const [newsData, setNewsData] = useState(null);

  const fetchNewsData = async (param) => {
    setLoad(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${param}&apiKey=50d7788ad43c41acac8a48eb64158c2a`
      );

      const data = await response.json();

      if (data) {
        setLoad(false);
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
        {load ? (
          <>Loading...</>
        ) : (
          <ul>
            {newsData?.map((article) => (
              <Newsitems article={article} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default News;
