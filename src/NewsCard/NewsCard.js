import React, { useEffect, useState } from 'react'
import style from "./NewsCard.module.css"
import { getNews } from '../Api/NewsApi'
import { searchData } from '../Recoil/Recoil'
import { useRecoilState } from 'recoil'

function NewsCard() {
  const [input , setInput] = useState("")
  const [news,setNews] = useRecoilState(searchData)


     useEffect(()=>{
        getNews().then((data)=> setNews(data.articles)
          ).catch()
      },[])
      console.log(news,"sachin news")
     
  return (
    <>
    <input className={style.searchbox} onChange={(e)=>setInput(e.target.value)} value={input}  placeholder="Search"/>
{/* 
    {news.filter((item)=>{

      return  item.description?.toLowerCase().includes(input.toLowerCase())

    }) */}
<div className={style.main}>
  {  news.map((item,index)=>
         <div key={index} className={style.container}>
            <h6>{item?.author}</h6>
            <img className={style.img} src={item.urlToImage} />
            <h5>{item.title}</h5>
             <h6>{item.publishedAt}</h6>
          </div>
    )}
    </div>
    </>
  )
}

export default NewsCard
