




import React from "react";
import "./About.css";
import profile from "C:/Users/Excalibur/Desktop/portfolio/src/jpg/c6b7a9a4-fe09-4b1e-a08c-d6afbacef7ce.jpeg"; // Kendi görselinle değiştir

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>Merhaba. Ben Safa.</h1>
          <p>
            Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. 
            Aynı zamanda matematik alanında aktif olarak özel ders veriyorum. 
            Daha önce Final Dershanesinde öğretmenlik yaptım. 
            Atatürk Sağlık Lisesinden mezun oldum.
          </p>
        </div>
        <div className="about-image">
          <img src={profile} alt="Profil" />
        </div>
      </div>
      <div className="vertical-label">BEN KİMİM ?</div>
    </section>
  );
};

export default About;
