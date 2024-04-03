import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Book = () => {
  return (
    <div className="book">
    <Header />
      <h1>The idea for the book Alchemy of Stones</h1>
      <img src="/images/fb-cover-template-guidesline-finished.webp" alt="Slika" />
      <p>
        The idea for the book Alchemy of Stones was born in the late eighties in Italy, more precisely in Merigar, the Tibetan center where Master Chogyel Namkhai Norby Rinpoche taught Dzogchen teachings (teachings of the Immeasurable Perfection). Due to my good fortune, during that meeting I had lucid dreams, in which I was told that the stones should become an army, 41 warriors, who provide people with instructions for life. The book has three chapters.
      </p>
      <h2>Chapter One:</h2>
      <p>
        The first chapter talks about the tools, about the stones themselves, which are the size of a fingernail, and with their shape and contour initiate the seeker to a certain symbolic meaning. Their division is immediately recognizable into 10 fields, small mandalas, in each field there are 4 stones. Each field addresses a specific area in your life.
      </p>
      <h2>Chapter Two:</h2>
      <p>
        The second chapter is like a key to a deep understanding of alchemy and the path of transformation. In this chapter, 10 small fields express, through their secret geometry; The tree of life, The cross and The lotus flower. They express the essence of three centuries-old spiritual traditions: Judaism, Christianity, and Buddhism. In this part of the book, the external world does not exist, dualism is not present. The Universal Mandala with its 10 fields indicates our true nature, which is divine and beyond life and death.
      </p>
      <h2>Chapter Three:</h2>
      <p>
        This chapter is intended for future practitioners of Alchemy of the stones. Contains 8 examples of how to read the Individual Mandala, the distorted image of each individual as he enters into the dual world; Myself and others, the inner and outer world. Namely, the reader of the stones on the 9 fields of the Individual Mandala, through symbols, enters into the invisible world of thoughts and emotions, which are only a reflection of the physical world, that is, physical existence. In this chapter, you can see the inevitability that we call destiny as it manifests itself. In other words, we see a deserved vision that is perfect for us to transform the world around us through integration, where the senses are open and connected to the heart.
      </p>
      <Footer />
    </div>
  );
}

export default Book;
