import React from 'react'
import style from './Footer.module.css'
import {BsFacebook } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiFillAndroid, AiFillApple, AiFillTwitterCircle, AiOutlineGlobal} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Image from "./logo.png"


export default function Footer() {
  return (
    <>
    <div className={style.main}>
    <div className={style.FisrtDiv}>
      <h4>
      <img className={style.logo} src={Image} />
      Cricket Live
      </h4>
      </div>    
<div className={style.icon}>

<h4>Mobile  and Apps</h4>
  <Link className={style.link} to="https://www.facebook.com/"><AiOutlineGlobal/><spna className={style.name} >Cricket.com</spna> </Link>


<Link className={style.link}  to="https://www.instagram.com/"><AiFillAndroid/><spna className={style.name} >instagram</spna></Link>

<Link className={style.link}  to="https://www.twitter.com/"><AiFillApple/><spna className={style.name} >twitter</spna></Link>

</div> 

<div className={style.icon}>

<h4>Follows us On</h4>
  <Link className={style.link} to="https://www.facebook.com/"><BsFacebook/><spna className={style.name} >facebook</spna> </Link>


<Link className={style.link}  to="https://www.instagram.com/"><BsInstagram/><spna className={style.name} >instagram</spna></Link>

<Link className={style.link}  to="https://www.twitter.com/"><AiFillTwitterCircle/><spna className={style.name} >twitter</spna></Link>

<Link className={style.link}  to="https://www.youtube.com/"><AiFillYoutube/><spna  className={style.name} >youtube</spna></Link>
</div> 

<div className={style.icon}>

<h4>Company</h4>
 <spna className={style.name} >Careers</spna> 


<spna className={style.name} >Advertise</spna>

<spna className={style.name} >Privacy Policy</spna>

<spna  className={style.name} >Cricket Live Tv Ads</spna>
</div> 
   
    </div>
      <p className={style.Footertext}>© 2023 Developer.All Rights Reserved</p>
   </>
  )
}