import React from 'react';
import style from './NavBar.module.css'
import Image from './logo.png'
import { Link, useNavigate } from 'react-router-dom';



function NavBar() {
const navigate=useNavigate()
  function handleclick(){
    alert("sdsd")
     navigate("/")
  }

  return (
 <div className={style.main}>
    <Link   className={style.link} to={"/"}><img className={style.logo} src={Image} />Cricket Live</Link>  
   <Link className={style.link} to="/">Home</Link>
   <Link className={style.link} to='/Podcast'>Podcast</Link>
   <Link className={style.link1} to='/RightSection'>News</Link>
 </div>     
      
  );
}

export default NavBar;