



import React from "react";
import "./Portfolio.css";
import { FaTshirt, FaBook, FaFireExtinguisher, FaUserTie,FaPencilAlt } from "react-icons/fa";


const portfolioItems = [
  {
    title: "Kıyafet Mağaza Sistemi",
      image: process.env.PUBLIC_URL + "/jpg/Ekran görüntüsü 2025-05-18 204128.png",
    link: "https://github.com/0safakaya/k-yafet-sistemi",
    icon: <FaTshirt />,
  },
  {
    title: "Soru Bankası Sistemi",
    image: process.env.PUBLIC_URL + "/jpg/Ekran görüntüsü 2025-05-18 205507.png",
    link: "https://github.com/0safakaya/soru-bankasi-sistemi",
    icon: <FaBook />,
  },
  {
    title: "Yangın Söndürme Aracı",
     image: process.env.PUBLIC_URL + "/jpg/c7cf644e-18f2-4412-aa43-39b73d821df0.jpeg",
    link: "https://github.com/ornek/yangin-sondurme",
    icon: <FaFireExtinguisher />,
  },
  {
    title: "Portfolyo Web Sitesi",
      image: process.env.PUBLIC_URL + "/jpg/Ekran görüntüsü 2025-05-18 210226.png",
    link: "http://localhost:3000/",
    icon: <FaUserTie />,
  },
    {
    title: "Yazı ve Çizim Sistemi",
      image: process.env.PUBLIC_URL + "/jpg/Ekran görüntüsü 2025-05-20 130715.png",
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
