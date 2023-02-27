import React, { useState } from 'react'
import{useParams}from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { matchData } from '../Recoil/Recoil'
import style from "./MatchPage.module.css"
import NavBar from '../NavBar/NavBar'
import Image from "./vs.png"
import RigthSection from '../Section/RigthSection'

function MatchPage() {
    const id=useParams()
   
    const [match,setMatch] =useRecoilState(matchData)
   console.log(match)

    const data= match.filter((item)=>{
      return id.id==item.id
    
    })
    console.log(data)
  return (
    <>
    <div className={style.NavBar}><NavBar/></div>
    
    <div className={style.body}>
   
    {data.map((item,index)=>
   
   <div key={index} className={style.Card}>
     <h1 className={style.header}>Welcome to Cricket Live</h1>
 <h3>Match ({item.matchType})</h3>
 <div className={style.innerCard}>
 <h3>{item.teams[0]}</h3>  <img className={style.img} src={item?.teamInfo[0]?.img} />

   <img src={Image} className={style.icon} /> 
   <h3>{item.teams[1]}</h3>   <img className={style.img} src={item?.teamInfo[1]?.img} />
   </div>
   <h4>{item?.name}</h4>
   <h4>{item?.venue}</h4>
   <h5>{item?.status}</h5>

<div className={style.tableBox}>


   <div className={style.table}>
     <img className={style.img} src={item?.teamInfo[0]?.img} />
     <h4>{item?.score[1]?.inning}</h4>
     <h4>Run:{item?.score[1]?.r}</h4>
     <h4>Wicket:{item?.score[1]?.w}</h4>
     <h4>Over:{item?.score[1]?.o}</h4>
   </div>

   <div className={style.table}>
     <img className={style.img} src={item?.teamInfo[1]?.img} />
     <h4>{item?.score[0]?.inning}</h4>
     <h4>Run:{item?.score[0]?.r}</h4>
     <h4>Wicket:{item?.score[0]?.w}</h4>
     <h4>Over:{item?.score[0]?.o}</h4>
   </div>

</div>
   


 </div>
 

  )} 
  <div className={style.rigthSection}>
    <RigthSection/>
  </div>
    </div>
   
     </>
  )
}

export default MatchPage
