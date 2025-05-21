import React from 'react';
import './Contact.css';
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="vertical-label-contact">İLETİŞİM</div>
      
      <form className="contact-form">
        <input type="text" placeholder="Ad Soyad" required />
        <input type="email" placeholder="Mail Adresi" required />
        <textarea placeholder="İçeriğiniz" rows="5" required></textarea>
        <button type="submit">Gönder</button>
      </form>

      <div className="social-icons">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </section>
  );
};

export default Contact;
