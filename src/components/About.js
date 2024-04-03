import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <div className="about">
    <Header />
    <img src="images/slavica-voglar.webp" alt="Slika" />
      <h1>Biography</h1>
      <p>
        Slavica Voglar Petković was born in the early sixties in Belgrade and
        was initiated by her mother in law, already in her mid-twenties, into a
        unique system of divination with stones. For generations this knowledge
        was preserved, kept secret and was orally transmitted down through the
        generations exclusively through the female line of descendants.
      </p>
      <p>
        Shortly after initiating her, her mother in law passed away and in the
        mid eighties Slavica began her journey into the special world of rocks
        and minerals. Due to the very intense shamanic experiences she had with
        the stones, she sought answers to questions such as: Is it possible to
        change one’s destiny and overcome the laws of karma, she wondered? As
        luck would have it Slavica then met her spiritual master Chögyal Namkhai
        Norbu Rinpoche.
      </p>
      <p>
        Throughout the many years on her path of study and meditation she met
        many other important masters as well. The combination of being an
        initiate and practitioner of the ancient knowledge of the Alchemy of the
        Stones, and of meeting with her Master, profoundly deepened the
        spiritual direction of Slavica’s life.
      </p>
      <Footer />
    </div>
  );
};

export default About;
