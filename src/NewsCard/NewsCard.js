import React, { useEffect, useState } from "react";
import style from "./NewsCard.module.css";
import { searchData } from "../Recoil/Recoil";
import { useRecoilState } from "recoil";

function NewsCard() {
  const [input, setInput] = useState("");
  const [news, setNews] = useRecoilState(searchData);
 


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5854509ae6msh4cf696e59631ad3p1669e1jsn997f958fe26d',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null', options)
      .then(response => response.json())
      .then(response => setNews(response.value))
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
            return item.description.toLowerCase().includes(input.toLowerCase());
          })
          .map((item, index) => (
            <div key={index} className={style.container}>
              <h6>{item?.provider?.name}</h6>
              <img className={style.img} src={item.image.url} />
              <h5>{item.description}</h5>
              <h6>{item.datePublished}</h6>
            </div>
          ))}
      </div>
    </>
  );
}

export default NewsCard;
