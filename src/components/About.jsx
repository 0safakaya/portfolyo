import React from "react";
import "./About.css";


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
           <img
            src={process.env.PUBLIC_URL + "/jpg/83551f0c-3ee5-4a40-9423-89fe9df44af1.jpeg"}
            alt="Profil"
          />
        </div>
      </div>
      <div className="vertical-label">BEN KİMİM ?</div>
    </section>
  );
};

export default About;
