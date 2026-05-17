import { useState } from "react";
import "./index.css";

const Card = ({ children, className, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={`btn ${className || ""}`}>
    {children}
  </button>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const whatsappNumber = "27844476937";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const products = [
    {
      name: "iPhone 15 Pro Max 256GB",
      price: "R21,999",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000",
    },

    {
      name: "Samsung S24 Ultra 256GB",
      price: "R17,999",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000",
    },

    {
      name: "MacBook Air M2",
      price: "R18,999",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1000",
    },

    {
      name: "Nike Air Force 1",
      price: "R1,499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
    },

    {
      name: "Lattafa Yara 100ml",
      price: "R479",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000",
    },
  ];

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">GOLIDE TRADE</div>

        <div className="nav-buttons">
          <Button onClick={() => setActiveTab("home")}>
            Home
          </Button>

          <Button onClick={() => setActiveTab("shop")}>
            Shop
          </Button>

          <Button onClick={() => setActiveTab("latest")}>
            Latest Stock
          </Button>

          <Button onClick={() => setActiveTab("specials")}>
            Specials
          </Button>

          <Button onClick={() => setActiveTab("contact")}>
            Contact
          </Button>
        </div>
      </header>

      {/* HOME */}
      {activeTab === "home" && (
        <section className="hero">

          <h1>Trusted Deals, Premium Quality</h1>

          <p className="subtitle">
            Your one-stop shop for phones, laptops,
            sneakers, perfumes, accessories and more.
          </p>

          <div className="hero-buttons">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="whatsapp-btn">
                Order on WhatsApp
              </Button>
            </a>

            <Button onClick={() => setActiveTab("shop")}>
              Browse Products
            </Button>

          </div>

         <div className="features">

  <Card
    className="feature-card"
    onClick={() => setActiveTab("shop")}
  >
    <CardContent>
      Phones & Laptops
    </CardContent>
  </Card>

  <Card
    className="feature-card"
    onClick={() => setActiveTab("shop")}
  >
    <CardContent>
      Sneakers & Fashion
    </CardContent>
  </Card>

  <Card
    className="feature-card"
    onClick={() => setActiveTab("shop")}
  >
    <CardContent>
      Perfumes & Accessories
    </CardContent>
  </Card>

</div>
        </section>
      )}

      {/* SHOP */}
      {activeTab === "shop" && (
        <section className="products">

          {products.map((p, i) => (
            <Card key={i} className="product-card">

              <img
                src={p.image}
                alt={p.name}
                className="product-image"
              />

              <CardContent>

                <h2>{p.name}</h2>

                <p className="price">
                  {p.price}
                </p>

                <a
                  href={`${whatsappLink}?text=Hi%20Golide%20Trade%2C%20I%20want%20to%20order%20${encodeURIComponent(
                    p.name
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="whatsapp-btn">
                    Order on WhatsApp
                  </Button>
                </a>

              </CardContent>
            </Card>
          ))}

        </section>
      )}

      {/* LATEST */}
      {activeTab === "latest" && (
        <section className="section-page">

          <h2>Latest Stock</h2>

          <p>
            New arrivals updated weekly.
          </p>

        </section>
      )}

      {/* SPECIALS */}
      {activeTab === "specials" && (
        <section className="section-page">

          <h2>Special Offers</h2>

          <p>
            Best deals available now.
          </p>

        </section>
      )}

      {/* CONTACT */}
      {activeTab === "contact" && (
        <section className="section-page">

          <h2>Contact Us</h2>

          <p>📞 084 447 6937</p>

          <p>📍 130 Harding Street, Estcourt</p>

          <p>
            Opposite Engine Garage,
            next to Nyangayezizwe,
            2nd Floor
          </p>

          <div className="social-links">

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

            <a href="mailto:golidetrade@outlook.com">
              Email
            </a>

          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="footer">
        © 2021 Golide Trade — Trusted Deals,
        Premium Quality
      </footer>

    </div>
  );
}
