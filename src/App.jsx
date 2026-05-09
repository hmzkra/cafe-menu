import { useState } from "react"

const categories = [
  { id: "food", name: "Yiyecekler 🍳" },
  { id: "hot", name: "Sıcak İçecekler ☕" },
  { id: "cold", name: "Soğuk İçecekler 🧊" },
  { id: "dessert", name: "Tatlılar 🍰" },
  { id: "waffle", name: "Waffle 🧇" },
  { id: "games", name: "Oyunlar 🎲" },
]

const products = {
  food: [
    {
      section: "Serpme Kahvaltı",
      desc:
        "2 çeşit peynir, 2 çeşit zeytin, domates, salatalık, 2 çeşit reçel, sigara böreği, sosis, patates, yumurta, çikolata, bal, tereyağı",
      price: "850₺",
    },
    {
      section: "Aparatifler",
      items: [
        { name: "Menemen", price: "220₺" },
        { name: "Otlu Omlet", price: "220₺" },
        { name: "Sade Omlet", price: "190₺" },
        { name: "Sucuklu Yumurta", price: "230₺" },
        { name: "Tost Çeşitleri", price: "220₺" },
        { name: "Patates Kızartması", price: "180₺" },
      ],
    },
  ],

  hot: [
    {
      section: "Sıcak İçecekler",
      items: [
        { name: "Çay", price: "35₺" },
        { name: "Türk Kahvesi", price: "100₺" },
        { name: "Aromalı Türk Kahvesi", price: "110₺" },
        { name: "Ballı Muzlu Süt", price: "170₺" },
        { name: "Bitki Çayları", price: "130₺" },
        { name: "Salep", price: "130₺" },
        { name: "Sıcak Çikolata", price: "130₺" },
      ],
    },
    {
      section: "Espressolu Sıcaklar",
      items: [
        { name: "Espresso", price: "90₺" },
        { name: "Americano", price: "140₺" },
        { name: "Latte", price: "175₺" },
        { name: "Aromalı Latte", price: "190₺" },
        { name: "Cappuccino", price: "190₺" },
        { name: "Mocha", price: "190₺" },
        { name: "Macchiato", price: "190₺" },
        { name: "Filtre Kahve", price: "170₺" },
      ],
    },
  ],

  cold: [
    {
      section: "Espressolu Soğuklar",
      items: [
        { name: "Ice Americano", price: "150₺" },
        { name: "Ice Latte", price: "175₺" },
        { name: "Ice Mocha", price: "185₺" },
        { name: "Caramel Macchiato", price: "185₺" },
        { name: "Cold Brew", price: "240₺" },
        { name: "Frappe", price: "185₺" },
      ],
    },
    {
      section: "Kokteyller",
      items: [
        { name: "Dolce Frigola", price: "240₺" },
        { name: "Mia", price: "240₺" },
        { name: "AHK Mix", price: "270₺" },
        { name: "Mojito", price: "240₺" },
        { name: "Kuzu Kulağı", price: "320₺" },
      ],
    },
    {
      section: "Meşrubatlar",
      items: [
        { name: "Redbull", price: "140₺" },
        { name: "Ice Tea", price: "110₺" },
        { name: "Kola", price: "110₺" },
        { name: "Fanta", price: "110₺" },
        { name: "Sprite", price: "110₺" },
        { name: "Ayran", price: "90₺" },
        { name: "Soda", price: "60₺" },
        { name: "Meyveli Soda", price: "75₺" },
        { name: "Churchill", price: "140₺" },
        { name: "Limonata", price: "170₺" },
        { name: "Portakal Suyu", price: "190₺" },
        { name: "Su", price: "30₺" },
      ],
    },
  ],

  dessert: [
    {
      section: "Tatlılar",
      items: [
        { name: "Cookies", price: "90₺" },
        { name: "Magnolia", price: "140₺" },
        { name: "Sütlaç", price: "150₺" },
        { name: "Tiramisu", price: "170₺" },
        { name: "Valovan", price: "120₺" },
        { name: "Cheesecake", price: "180₺" },
      ],
    },
  ],

  waffle: [
    {
      section: "Waffle",
      items: [
        { name: "Tek Meyveli", price: "180₺" },
        { name: "Çift Meyveli", price: "200₺" },
        { name: "Mix", price: "220₺" },
        { name: "İlave Dondurma", price: "40₺" },
        { name: "İlave Kaymak", price: "50₺" },
        { name: "İlave Şekerleme", price: "10₺" },
      ],
    },
  ],

  games: [
    {
      section: "Oyunlar",
      items: [
        "Tavla",
        "Okey",
        "Monopoly",
        "Satranç",
        "İskambil",
        "Tabu",
        "Uno",
        "Dedektif Katil Kim",
      ],
    },
  ],
}

export default function App() {
  const [category, setCategory] = useState(null)

  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* HEADER */}
<div className="flex flex-col items-center mb-6">

  <img
    src="/logo.jpg"
    alt="AHK Coffee"
    className="w-20 h-20 rounded-full object-cover mb-2"
  />

  <h1 className="text-2xl font-bold tracking-wide">
    AHK Coffee
  </h1>

  <p className="text-gray-400 text-sm">
    Dijital Menü
  </p>

</div>
      {/* CATEGORY */}
      {!category && (
        <div className="grid gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="bg-[#1a1a1a] p-5 rounded-2xl text-left"
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {/* MENU */}
      {category && (
        <div>
          <button
            onClick={() => setCategory(null)}
            className="mb-4 text-gray-400"
          >
            ← Geri
          </button>

          {products[category].map((section, i) => (
            <div key={i} className="mb-6">

              <div className="text-lg font-bold mb-2">
                {section.section}
              </div>

              {/* SIMPLE ITEM (kahvaltı gibi) */}
              {section.price && (
                <div className="bg-[#1a1a1a] p-4 rounded-xl">
                  <p className="text-gray-300">{section.desc}</p>
                  <p className="text-right text-gray-400 mt-2">
                    {section.price}
                  </p>
                </div>
              )}

              {/* LIST ITEMS */}
              {section.items &&
                section.items.map((item, j) => (
                  <div
                    key={j}
                    className={
                      typeof item === "string"
                        ? "bg-[#1a1a1a] p-3 rounded-xl text-center"
                        : "bg-[#1a1a1a] p-3 rounded-xl flex justify-between"
                    }
                  >
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        <span>{item.name}</span>
                        <span className="text-gray-400">{item.price}</span>
                      </>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}