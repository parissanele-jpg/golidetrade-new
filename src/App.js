import { useState } from "react";
const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children }) => <div className="p-4">{children}</div>;

const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-lg ${className}`}>
    {children}
  </button>
);

export default function GolideTradeWebsite() {
  const [activeTab, setActiveTab] = useState("home");

  const whatsappNumber = "27844476937";

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const products = [
    { name: "iPhone 15 Pro Max 256GB", price: "R21,999" },
    { name: "Samsung S24 Ultra 256GB", price: "R17,999" },
    { name: "MacBook Air M2", price: "R18,999" },
    { name: "Nike Air Force 1", price: "R1,499" },
    { name: "Lattafa Yara 100ml", price: "R479" },
  ];

  return (
    <div className="min-h-screen bg-black text-gold-300 text-white">
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-yellow-600">
        <div className="text-2xl font-bold text-yellow-400">GOLIDE TRADE</div>
        <div className="flex gap-3 items-center">
          <Button onClick={() => setActiveTab("home")}>Home</Button>
          <Button onClick={() => setActiveTab("shop")}>Shop</Button>
          <Button onClick={() => setActiveTab("latest")}>Latest Stock</Button>
          <Button onClick={() => setActiveTab("specials")}>Specials</Button>
          <Button onClick={() => setActiveTab("contact")}>Contact</Button>
        </div>
      </header>

      {/* HERO */}
      {activeTab === "home" && (
        <section className="p-10 text-center">
          <h1 className="text-5xl font-bold text-yellow-400">
            Premium Tech & Lifestyle
          </h1>
          <p className="mt-3 text-gray-300">Trusted Deals, Premium Quality</p>

          <div className="mt-6 flex justify-center gap-4">
            <a href={whatsappLink} target="_blank">
              <Button className="bg-green-600">Order on WhatsApp</Button>
            </a>
            <Button onClick={() => setActiveTab("shop")}>
              Browse Products
            </Button>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <Card className="bg-gray-900 border-yellow-600">
              <CardContent>Phones, Laptops, Sneakers</CardContent>
            </Card>
            <Card className="bg-gray-900 border-yellow-600">
              <CardContent>Perfumes & Accessories</CardContent>
            </Card>
            <Card className="bg-gray-900 border-yellow-600">
              <CardContent>Data Bundles & Deals</CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* SHOP */}
      {activeTab === "shop" && (
        <section className="p-6 grid md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <Card key={i} className="bg-gray-900 border-yellow-600">
              <CardContent>
                <h2 className="text-lg font-bold text-yellow-400">{p.name}</h2>
                <p className="mt-2">{p.price}</p>
                <a
                  href={`${whatsappLink}?text=Hi%20Golide%20Trade%2C%20I%20want%20to%20order%20${encodeURIComponent(
                    p.name
                  )}`}
                  target="_blank"
                >
                  <Button className="mt-3 bg-green-600 w-full">
                    Order on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* LATEST STOCK */}
      {activeTab === "latest" && (
        <section className="p-10 text-center">
          <h2 className="text-3xl text-yellow-400 font-bold">Latest Stock</h2>
          <p className="text-gray-300 mt-2">New arrivals updated weekly</p>
        </section>
      )}

      {/* SPECIALS */}
      {activeTab === "specials" && (
        <section className="p-10 text-center">
          <h2 className="text-3xl text-yellow-400 font-bold">Special Offers</h2>
          <p className="text-gray-300 mt-2">Best deals available now</p>
        </section>
      )}

      {/* CONTACT */}
      {activeTab === "contact" && (
        <section className="p-10 text-center space-y-4">
          <h2 className="text-3xl text-yellow-400 font-bold">Contact Us</h2>

          <p>
            <p>📞 084 447 6937</p>
          </p>
          <p>
            <p>📍 130 Harding Street, Estcourt</p>
          </p>
          <p>Opposite Engine Garage, next to Nyangayezizwe, 2nd Floor</p>

          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/share/17VPrGMBuT/?mibextid=wwXIfr"
              target="_blank"
            >
              📘 Facebook
            </a>
            <a
              href="https://www.tiktok.com/@parissanele8?_r=1&_t=ZS-96M797q9QFm"
              target="_blank"
            >
              TikTok
            </a>
            <a href="mailto:golidetrade@outlook.com">Email</a>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="p-6 text-center border-t border-yellow-600 text-gray-400">
        © 2026 Golide Trade - Trusted Deals, Premium Quality
      </footer>
    </div>
  );
}
