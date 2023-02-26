import React from 'react'
import Card from '../../Card/Card'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import RigthSection from '../../Section/RigthSection'
import style from './HomePage.module.css'

function HomePage() {
  
  return (
    <>
    <div className={style.navBar} >  <NavBar/></div>
  
    <div className={style.container}>
  
    <div className={style.lefttSection} >
      <h1 className={style.header}>Welcome to Cricket Live</h1>
       <Card />
    </div>

     <div className={style.rigthSection} >
        <RigthSection /> 
    </div>
    
    </div>
      <div  className={style.footer}>
      <Footer />
      </div>
    </>
  )
}

export default HomePage
