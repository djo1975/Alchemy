import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./Slide";

const InternetSchool = () => {

  const images = [
    { src: "/images/cbecc9_0abf640aca4846bb9897ca727a070e49~mv2.webp", alt: "Slika" },
    { src: "/images/Firefox_Screenshot_2024-04-03T11-05-55.708Z.png", alt: "Slika" },
    { src: "/images/Firefox_Screenshot_2024-04-03T11-06-28.646Z.png", alt: "Slika" }
  ];

  return (
    <div className="school">
    <Header />
    <h1>School of The Alchemy Of The Stones</h1>
    <Slideshow images={images} />
      <p>
        This school is intended for those who want to advance and understand
        the human dimension, as well as how we create our lives? Since the
        divination takes place three times; the past that conditions us, the
        present and the potential possibilities of the future. The Individual
        Mandala has a first opening the stones, which mainly talks about the
        conditioning of the past and ignorance. The first image of the symbol
        will be free. If you want to dive further into the future, you need to
        download the full example, which will be explained in the additional two
        images. One indicates the present time, and the next, last one indicates
        the potential future and the best course of action. Thus, everyone will
        be able to look into human nature and unconscious reactions in everyday
        life. Over time, each person will be able to read and penetrate into the
        future and recognize the traps that arise in the higher spheres of human
        existence in the area of the mind and heart.
      </p>
      <Footer />
    </div>
  );
};

export default InternetSchool;
