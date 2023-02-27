import React from 'react'
import { getMatches } from '../Api/Api'
import { useEffect ,useState } from 'react'
import style from './Card.module.css'
import Image from './vs.png'
import { Link } from 'react-router-dom'
import { matchData } from '../Recoil/Recoil'
import { useRecoilState } from 'recoil'

function Card() {
  const [data,setData] = useRecoilState(matchData)
  const [sortOrder, setSortOrder] = useState('asc');
// console.log(data)

    useEffect(()=>{
        getMatches().then((data)=> setData(data.data)
          ).catch()
      },[])

      function Sort(){
        if (sortOrder === 'asc') {
          setData([...data].sort((a, b) => (a.date > b.date ? 1 : -1)));
          setSortOrder('desc');
        } else {
          setData([...data].sort((a, b) => (a.date > b.date ? -1 : 1)));
          setSortOrder('asc');
        }
      }
      
  return (
    <>
      {data.map((item,index)=>
   
        <div key={index} className={style.Card}>
           <h3>Match ({item?.matchType})</h3>
      <h6 className={style.date}>({item?.date})</h6>
      <div className={style.innerCard}>
      <h3>{item?.teams[0]} </h3> <img className={style.img} src={item?.teamInfo[0]?.img} />
        <img src={Image} className={style.icon}  alt="image"/> 
        <h3>{item?.teams[1]}</h3>  <img className={style.img} src={item?.teamInfo[1]?.img} />
        </div>
        <div>
        <Link to={`/MatchPage/${item?.id}`}>
        <button className={style.btn}>Show Details</button>
        </Link>
        <button className={style.btn} onClick={Sort}>Sort  {sortOrder === 'asc' ? 'Descending' : 'Ascending'}</button>
        </div>
        
       
      </div>
      
   
       )} 
 
 </>
  )
}

export default Card
