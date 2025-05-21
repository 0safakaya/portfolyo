import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section page-section">
      <div className="overlay">
        <div className="text-container">
          <h1 className="hello-text">
            Merhaba<span className="dots"></span>
          </h1>
          <p className="typewriter-text">
            Bilgisayar Mühendisliği Öğrencisi | Matematik Özel Ders Öğretmeni
          </p>
        </div>
      </div>
    </section>
  );
}