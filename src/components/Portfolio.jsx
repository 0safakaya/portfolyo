



import React from "react";
import "./Portfolio.css";
import { FaTshirt, FaBook, FaFireExtinguisher, FaUserTie,FaPencilAlt } from "react-icons/fa";

import image1 from "C:/Users/Excalibur/Desktop/portfolio/src/jpg/Ekran görüntüsü 2025-05-18 204128.png";
import image2 from "C:/Users/Excalibur/Desktop/portfolio/src/jpg/Ekran görüntüsü 2025-05-18 205507.png";
import image3 from "C:/Users/Excalibur/Desktop/portfolio/src/jpg/c7cf644e-18f2-4412-aa43-39b73d821df0.jpeg";
import image4 from "C:/Users/Excalibur/Desktop/portfolio/src/jpg/Ekran görüntüsü 2025-05-18 210226.png";
import image5 from "C:/Users/Excalibur/Desktop/portfolio/src/jpg/Ekran görüntüsü 2025-05-20 130715.png";

const portfolioItems = [
  {
    title: "Kıyafet Mağaza Sistemi",
    image: image1,
    link: "https://github.com/0safakaya/k-yafet-sistemi",
    icon: <FaTshirt />,
  },
  {
    title: "Soru Bankası Sistemi",
    image: image2,
    link: "https://github.com/0safakaya/soru-bankasi-sistemi",
    icon: <FaBook />,
  },
  {
    title: "Yangın Söndürme Aracı",
    image: image3,
    link: "https://github.com/ornek/yangin-sondurme",
    icon: <FaFireExtinguisher />,
  },
  {
    title: "Portfolyo Web Sitesi",
    image: image4,
    link: "http://localhost:3000/",
    icon: <FaUserTie />,
  },
    {
    title: "Yazı ve Çizim Sistemi",
    image: image5,
    link: "https://github.com/0safakaya/metin-sistemi",
    icon: <FaPencilAlt />,
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="vertical-label-portfolio">PROJELERİM</div>
      <div className="portfolio-container">
        {portfolioItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="portfolio-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-image-wrapper">
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay always-visible">
                <div className="portfolio-icon">{item.icon}</div>
                <div className="portfolio-title">{item.title}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
