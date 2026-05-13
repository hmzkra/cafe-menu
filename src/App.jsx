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
        { name: "Soğuk Sandviç", price: "230₺" },
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
        { name: "Sade Nescafe", price: "120₺" },
        { name: "Sütlü Nescafe", price: "150₺" },
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
        { name: "Flat White", price: "190₺" },
        { name: "White Mocha", price: "190₺" },
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
        { name: "Flat White", price: "190₺" },
        { name: "Aromalı Frappe", price: "200₺" },
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
        { name: "Margarita", price: "240₺" },
        { name: "Blue Hawaii", price: "240₺" },
        { name: "Cosmopolitan", price: "240₺" },
        { name: "X on the Beach", price: "240₺" },
        { name: "Bubble Gum", price: "240₺" },
      ],
    },

    {
      section: "Milkshake Çeşitleri",
      items: [
        { name: "Muz", price: "220₺" },
        { name: "Çilek", price: "220₺" },
        { name: "Çikolata", price: "220₺" },
        { name: "Karamel", price: "220₺" },
        { name: "Frambuaz", price: "220₺" },
        { name: "Vanilya", price: "220₺" },
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
        { name: "Sade Soda", price: "60₺" },
        { name: "Meyveli Soda", price: "75₺" },
        { name: "Churchill", price: "140₺" },
        { name: "Limonata", price: "170₺" },
        { name: "Portakal Suyu", price: "190₺" },
        { name: "Su", price: "30₺" },
      ],
    },

    {
      section: "Frozen Çeşitleri",
      items: [
        { name: "Çilek", price: "210₺" },
        { name: "Mango", price: "210₺" },
        { name: "Orman Meyveli", price: "210₺" },
        { name: "Karpuz", price: "210₺" },
        { name: "Şeftali", price: "210₺" },
        { name: "Cool Lime", price: "210₺" },
        { name: "Limon", price: "210₺" },
        { name: "Ananas", price: "210₺" },
        { name: "Çikolata", price: "210₺" },
        { name: "Oreo", price: "210₺" },
        { name: "Karamel", price: "210₺" },
        { name: "Vanilya", price: "210₺" },
      ],
    },
  ],

  dessert: [
    {
      section: "Tatlılar",
      items: [
        { name: "Cookies", price: "90₺" },
        { name: "Dilim Pasta", price: "170₺" },
        { name: "Magnolia", price: "140₺" },
        { name: "Sütlaç", price: "150₺" },
        { name: "Tiramisu", price: "170₺" },
        { name: "Valovan", price: "120₺" },
        { name: "Cheesecake", price: "180₺" },
        { name: "Top Dondurma", price: "70₺" },
        { name: "Cup Dondurma", price: "230₺" },
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
        "Dedektif",
        "Katil Kim",
      ],
    },
  ],
}

export default function App() {
  const [category, setCategory] = useState(null)

  const currentCategory = categories.find(
    (c) => c.id === category
  )

  return (
    <div className="min-h-screen bg-black text-white p-5">

      {/* HEADER */}
      <div className="flex flex-col items-center mb-8">

        <img
          src="/ahk-logo.jpg"
          alt="AHK Coffee"
          className="w-24 h-24 rounded-full object-cover mb-3 border border-white/10"
        />

        <h1 className="text-3xl font-bold tracking-wide">
          AHK Coffee
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Dijital Menü
        </p>

      </div>

      {/* CATEGORY LIST */}
      {!category && (
        <div className="grid gap-4">

          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="
                bg-[#171717]
                p-5
                rounded-2xl
                text-left
                border border-white/5
                active:scale-[0.98]
                transition
              "
            >
              <div className="text-lg font-semibold">
                {c.name}
              </div>
            </button>
          ))}

        </div>
      )}

      {/* MENU CONTENT */}
      {category && (
        <div>

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-6">

            <button
              onClick={() => setCategory(null)}
              className="
                bg-[#1a1a1a]
                px-4 py-2
                rounded-xl
                text-sm
                border border-white/10
              "
            >
              ← Geri
            </button>

            <div className="text-sm text-gray-400 font-medium">
              {currentCategory?.name}
            </div>

          </div>

          {/* SECTIONS */}
          <div className="space-y-8">

            {products[category].map((section, i) => (
              <div key={i}>

                {/* SECTION TITLE */}
                <div className="mb-3">

                  <h2 className="text-xl font-bold">
                    {section.section}
                  </h2>

                </div>

                {/* SINGLE CARD */}
                {section.price && (
                  <div
                    className="
                      bg-[#171717]
                      p-4
                      rounded-2xl
                      border border-white/5
                    "
                  >

                    <p className="text-gray-300 leading-relaxed">
                      {section.desc}
                    </p>

                    <div className="mt-3 text-right text-[#d1b97f] font-medium">
                      {section.price}
                    </div>

                  </div>
                )}

                {/* ITEMS */}
                {section.items && (
                  <div className="space-y-2">

                    {section.items.map((item, j) => (

                      <div
                        key={j}
                        className={
                          typeof item === "string"
                            ? `
                              bg-[#171717]
                              p-4
                              rounded-2xl
                              text-center
                              border border-white/5
                            `
                            : `
                              bg-[#171717]
                              p-4
                              rounded-2xl
                              flex justify-between items-center
                              border border-white/5
                            `
                        }
                      >

                        {typeof item === "string" ? (
                          item
                        ) : (
                          <>
                            <span className="font-medium">
                              {item.name}
                            </span>

                            <span className="text-[#d1b97f] font-medium">
                              {item.price}
                            </span>
                          </>
                        )}

                      </div>

                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>
          {/* BOTTOM BACK BUTTON */}
<div className="mt-10 flex justify-center">

  <button
    onClick={() => {
      setCategory(null)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }}
    className="
      bg-[#1a1a1a]
      px-6 py-3
      rounded-2xl
      border border-white/10
      text-sm
      font-medium
    "
  >
    ← Kategorilere Dön
  </button>

</div>

        </div>
      )}

    </div>
  )
}