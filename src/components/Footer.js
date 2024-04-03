import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Contact</h3>
        <p>
          <strong>Alchemy Of The Stones</strong>
          <br />
          by Slavica Voglar
        </p>
        <p>
          <strong>Email:</strong> alchemyofthestones@gmail.com
          <br />
          <strong>Phone:</strong> +64 21 134 8533
        </p>
      </div>
      <div className="contact-form">
        <h3>Leave us a message...</h3>
        {/* 
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>*/}
      </div>
      <div className="copyright">
        <p>© 2022 by Alchemy Of The Stones.</p>
      </div>
    </footer>
  );
};

export default Footer;
