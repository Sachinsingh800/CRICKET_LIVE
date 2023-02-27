import React, { useEffect, useState } from 'react'
import style from "./RigthSection.module.css"
import { getNews } from '../Api/NewsApi'
import NewsCard from '../NewsCard/NewsCard'
import NavBar from '../NavBar/NavBar'

function RightSection() {
 
  return (
    <>
   <div className={style.container}>  
  <div className={style.NavBar}><NavBar/></div> 
   <NewsCard />
   </div>
   </>
 

  )
}

export default RightSection
