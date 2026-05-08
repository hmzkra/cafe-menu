import { useState } from "react"

const categories = [
  { id: "hot", name: "Sıcak İçecekler ☕" },
  { id: "cold", name: "Soğuk İçecekler 🧊" },
  { id: "dessert", name: "Tatlılar 🍰" },
  { id: "snack", name: "Atıştırmalıklar 🍟" },
]

const products = {
  hot: [
    {
      name: "Latte",
      desc: "Yumuşak içimli espresso ve süt karışımı.",
      details:
        "Espresso + buharda süt + hafif süt köpüğü. Orta kafein seviyesine sahiptir.",
    },
    {
      name: "Cappuccino",
      desc: "Klasik İtalyan kahvesi.",
      details:
        "Espresso, sıcak süt ve yoğun süt köpüğü ile hazırlanır.",
    },
  ],

  cold: [
    {
      name: "Iced Americano",
      desc: "Ferahlık veren soğuk kahve.",
      details:
        "Espresso + soğuk su + buz. Şekersiz, düşük kalorili.",
    },
  ],

  dessert: [
    {
      name: "Waffle",
      desc: "Taze waffle çeşitleri.",
      details: "Alt çeşitler mevcut.",
      subItems: [
        {
          name: "Classic Waffle",
          desc: "Çikolata ve muz ile klasik sunum.",
        },
        {
          name: "Strawberry Waffle",
          desc: "Taze çilek ve çikolata sosu.",
        },
        {
          name: "Lotus Waffle",
          desc: "Lotus bisküvi ve özel sos.",
        },
      ],
    },
  ],

  snack: [
    {
      name: "Tost",
      desc: "Kaşarlı sıcak tost.",
      details: "Taze ekmek, kaşar peyniri ile hazırlanır.",
    },
  ],
}

function App() {
  const [category, setCategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">

      {/* HEADER */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto bg-white text-black rounded-full flex items-center justify-center font-bold mb-2">
          exampleLogo
        </div>
        <h1 className="text-2xl font-bold">exampleName</h1>
        <p className="text-gray-400 text-sm">Dijital Menü</p>
      </div>

      {/* CATEGORY VIEW */}
      {!category && (
        <div className="grid gap-4">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="bg-[#1c1c1c] p-5 rounded-2xl text-left active:scale-95 transition"
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {/* PRODUCT LIST */}
      {category && !selectedProduct && (
        <div>
          <button
            onClick={() => setCategory(null)}
            className="text-gray-400 text-sm mb-4"
          >
            ← Kategorilere dön
          </button>

          <h2 className="text-xl font-bold mb-4">
            {categories.find(c => c.id === category)?.name}
          </h2>

          <div className="space-y-3">
            {products[category].map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedProduct(p)}
                className="bg-[#1c1c1c] p-4 rounded-2xl active:scale-95 transition cursor-pointer"
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PRODUCT DETAIL */}
      {selectedProduct && (
        <div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="text-gray-400 text-sm mb-4"
          >
            ← Geri
          </button>

          <div className="bg-[#1c1c1c] p-5 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">
              {selectedProduct.name}
            </h2>

            <p className="text-gray-400 mb-4">
              {selectedProduct.desc}
            </p>

            <p className="text-sm text-white/80">
              {selectedProduct.details}
            </p>
          </div>

          {/* WAFFLE SUB ITEMS */}
          {selectedProduct.subItems && (
            <div className="mt-4 space-y-3">
              <h3 className="text-sm text-gray-400">
                Çeşitler
              </h3>

              {selectedProduct.subItems.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#151515] p-4 rounded-2xl"
                >
                  <h4 className="font-semibold">{s.name}</h4>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  )
}

export default App