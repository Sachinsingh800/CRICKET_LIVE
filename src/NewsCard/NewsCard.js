import React, { useEffect, useState } from "react";
import style from "./NewsCard.module.css";
import { searchData } from "../Recoil/Recoil";
import { useRecoilState } from "recoil";

function NewsCard() {
  const [input, setInput] = useState("");
  const [news, setNews] = useRecoilState(searchData);
//  console.log(news)


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9a0882e407mshebedc2efa88237fp12ea50jsn41fcbc40fbbd',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
    
    fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', options)
      .then(response => response.json())
      .then(response => setNews(response.storyList))
      .catch(err => console.error(err));
  }, []);
 

  return (
    <>
      <input
        className={style.searchbox}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Search"
      />

      <div className={style.main}>
        { news?.length>0 && 
         news
          ?.filter((item) => {
            return item?.story?.hline?.toLowerCase().includes(input.toLowerCase());
          })
          .map((item, index) => (
            <div key={index} className={style.container}>
              <h6>{item?.story.source}</h6>
              {/* <img className={style.img} src={item.image.url} /> */}
              <h5>{item.story.hline}</h5>
              <h6>{item.story.pubTime}</h6>
            </div>
          ))}
      </div>
    </>
  );
}

export default NewsCard;
