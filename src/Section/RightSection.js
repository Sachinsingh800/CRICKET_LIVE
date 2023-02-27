import React, { useEffect, useState } from 'react'
import style from "./RigthSection.module.css"
import { getNews } from '../Api/NewsApi'
import NewsCard from '../NewsCard/NewsCard'

function RightSection() {
 
  return (
    <>
   <div className={style.container}>  
   <NewsCard />
   </div>
   </>
 

  )
}

export default RightSection
