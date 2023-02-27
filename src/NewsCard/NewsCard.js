import React, { useEffect, useState } from "react";
import style from "./NewsCard.module.css";
import { searchData } from "../Recoil/Recoil";
import { useRecoilState } from "recoil";
import { NewsApi } from "../Api/NewsApi";

function NewsCard() {
  const [input, setInput] = useState("");
  const [news, setNews] = useState(NewsApi);
 console.log(news)



 

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
            return item?.title.toLowerCase().includes(input.toLowerCase());
          })
          .map((item, index) => (
            <div key={index} className={style.container}>
              <h6>{item?.author}</h6>
              <img className={style.img} src={item.image} />
             <div className={style.title}> <h5>{item.title}</h5></div>
              <h6>{item.publishedAt}</h6>
            </div>
          ))}
      </div>
    </>
  );
}

export default NewsCard;
