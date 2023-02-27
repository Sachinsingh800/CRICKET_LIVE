import React, { useState, useEffect } from 'react';
import style from "./CarouselSlide.module.css"
import { Carsouel }  from "../CarousalSlideData/CarousalSlideData"

export default function App() {
  const [current, setCurrent] = useState(0);
  const length = Carsouel.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  console.log(current);

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 3000);
  //   return () => clearInterval(interval);
  // });

  return (
    <>

      <div className={style.main}>
        {Carsouel.map((item, i) => (
          <>
            <div key={i} className={style.box}>
              {index === current && <img className={style.img} src={item.img} />}
              {index === current && <div className={style.quotes}><h5>{item.quotes}<h6>{item.Authors}</h6></h5> </div>}
            </div>
          </>
        ))}
      </div>
      <div className={style.btnBox}>
      <button className={style.btn} onClick={prevSlide}>⟪</button>
      <button className={style.btn} onClick={nextSlide}>⟫</button>
      </div>
      
    </>
  );
}
