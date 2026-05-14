import { useState } from "react";
import "./index.css";

export default function GolideTradeWebsite() {
  const [activeTab, setActiveTab] = useState("home");

  const whatsappNumber = "27844476937";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const products = [
    { name: "iPhone 15 Pro Max", price: "R21,999" },
    { name: "Samsung S24 Ultra", price: "R17,999" },
    { name: "MacBook Air M2", price: "R18,999" },
    { name: "Nike Air Force 1", price: "R1,499" },
    { name: "Lattafa Yara Perfume", price: "R479" },
  ];

  return (
    <div>
      <header>
        <div className="logo">GOLIDE TRADE</div>

        <nav>
          <button onClick={() => setActiveTab("home")}>Home</button>
          <button onClick={() => setActiveTab("shop")}>Shop</button>
          <button onClick={() => setActiveTab("latest")}>Latest Stock</button>
          <button onClick={() => setActiveTab("specials")}>Specials</button>
          <button onClick={() => setActiveTab("contact")}>Contact</button>
        </nav>
      </header>

      {activeTab === "home" && (
        <section className="hero">
          <h1>Trusted Deals, Premium Quality</h1>
          <p>Trusted Deals. Premium Quality. Fast Service.</p>

          <div className="hero-buttons">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button>Order on WhatsApp</button>
            </a>

            <button onClick={() => setActiveTab("shop")}>Browse Products</button>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Phones & Laptops</h3>
              <p>Latest iPhones, Samsung devices, and MacBooks.</p>
            </div>

            <div className="card">
}
