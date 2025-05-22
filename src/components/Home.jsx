import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section
      id="home"
      className="home-section page-section"
      style={{
        backgroundImage: "url('/jpg/612d01b99e0e0d015f21fd93_fotis-fotopoulos-DuHKoV44prg-unsplash-min.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="overlay">
        <div className="text-container">
          <h1 className="hello-text">
            Merhaba<span className="dots"></span>
          </h1>
          <p className="typewriter-text">
            Bilgisayar Mühendisliği Öğrencisi | Matematik Özel Ders Öğretmeni.
          </p>
        </div>
      </div>
    </section>
  );
}
