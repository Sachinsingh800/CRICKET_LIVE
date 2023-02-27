import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Podcast.module.css";
import CarouselSlide from "../CarousalSlide/CarouselSlide";
import Footer from "../Footer/Footer";
import { PodcastData } from "../PodcastData/PodcastData";

function Podcast() {
  return (
    <div className={style.container}>
      <div className={style.NavBar}>
        <NavBar />
      </div>

      <div className={style.CarouselSlide}>
        <CarouselSlide />
      </div>
      <h1 className={style.header}>Podcast</h1>

      <div className={style.PodcastBox}>
        {PodcastData.map((item, i) => (
          <div key={i} className={style.podcast}>
            <iframe
              width="300"
              height="230"
              src={`https://www.youtube.com/embed${item.url}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Podcast;
