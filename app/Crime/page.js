"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Page = () => {
  const [news, setNews] = useState([]);

  const url =
    "http://newsapi.org/v2/everything?" +
    "q=crime&" +
    "from=2024-08-27&" +
    "apiKey=9796dee926164537a299c91a7abda0de";

  async function getNews() {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
  }

  useEffect(() => {
    getNews();
  }, []); // The empty array ensures the effect runs only once after the component mounts

  return (
    <>
      <div className="main  px-10 py-5">
        <div className="cards">
        {news.map((article, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={article.urlToImage} alt="" />
            </div>
            <div className="info">
              <h2 className="date">{article.publishedAt.slice(0,10)}</h2>
              <div className="title font-semibold ">
                <h1 onClick={() => {
                      if (article.url) {
                        window.open(article.url, "_blank");
                      } else {
                        console.error("Invalid URL");
                      }
                    }} >{article.title}</h1>
              </div>
              <div className="desc">
                <p calssName="">{article.description}</p>
              </div>
              <div className="auth">
                <h2 > by <a  href={`https://www.google.com/search?q=${encodeURIComponent(article.author)}`} target="_blank"  >   {article.author}</a></h2>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Page;
