# Modern Golide Trade Layout

## Replace your `src/index.css` with this:

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #0a0a0a;
  color: white;
}

* {
  box-sizing: border-box;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #facc15;
  position: sticky;
  top: 0;
  background: #000;
  z-index: 100;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #facc15;
}

nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

button {
  cursor: pointer;
  border: none;
  padding: 12px 18px;
  border-radius: 12px;
  background-color: #facc15;
  color: black;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.hero {
  padding: 80px 30px;
  text-align: center;
}

.hero h1 {
  font-size: 64px;
  margin-bottom: 20px;
  color: #facc15;
}

.hero p {
  font-size: 22px;
  color: #ddd;
}

.hero-buttons {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 60px;
}

.card {
  background: #111;
  border: 1px solid #facc15;
  padding: 30px;
  border-radius: 18px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}

.card h3 {
  color: #facc15;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
}

.product-card {
  background: #111;
  border: 1px solid #333;
  border-radius: 18px;
  padding: 20px;
}

.product-card h2 {
  color: #facc15;
}

.contact {
  text-align: center;
  padding: 60px 20px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

footer {
  border-top: 1px solid #facc15;
  padding: 20px;
  text-align: center;
  color: #aaa;
  margin-top: 50px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 15px;
  }

  .hero h1 {
    font-size: 42px;
  }
}
```

---

## Replace your `src/App.js` with this:

```javascript
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
              <h3>Sneakers & Fashion</h3>
              <p>Trendy sneakers, clothes, and accessories.</p>
            </div>

            <div className="card">
              <h3>Perfumes & Data</h3>
              <p>Luxury fragrances and affordable data deals.</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === "shop" && (
        <section className="products">
          {products.map((product, i) => (
            <div className="product-card" key={i}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>

              <a
                href={`${whatsappLink}?text=Hi%20Golide%20Trade,%20I%20want%20to%20order%20${product.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <button>Order Now</button>
              </a>
            </div>
          ))}
        </section>
      )}

      {activeTab === "latest" && (
        <section className="contact">
          <h1>Latest Stock</h1>
          <p>New arrivals updated weekly.</p>
        </section>
      )}

      {activeTab === "specials" && (
        <section className="contact">
          <h1>Special Offers</h1>
          <p>Best deals available right now.</p>
        </section>
      )}

      {activeTab === "contact" && (
        <section className="contact">
          <h1>Contact Us</h1>

          <p>📞 084 447 6937</p>
          <p>📍 130 Harding Street, Estcourt</p>
          <p>Opposite Engine Garage, next to Nyangayezizwe</p>

          <div className="contact-links">
            <a
              href="https://www.facebook.com/share/17VPrGMBuT/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://www.tiktok.com/@parissanele8"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>

            <a href="mailto:golidetrade@outlook.com">Email</a>
          </div>
        </section>
      )}

      <footer>
        © 2026 Golide Trade — Trusted Deals, Premium Quality
      </footer>
    </div>
  );
}
```

After replacing these files:

1. Commit changes to GitHub
2. Wait for Vercel redeploy
3. Refresh your website

Your website will then look modern, clean, and professional.
