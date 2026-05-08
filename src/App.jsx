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
      image: "/images/latte.jpg",
      details: "Espresso + süt + köpük",
    },
    {
      name: "Cappuccino",
      desc: "Klasik İtalyan kahvesi.",
      image: "/images/latte.jpg",
      details: "Espresso + süt + köpük",
    },
  ],

  cold: [
    {
      name: "Iced Americano",
      desc: "Ferahlık veren soğuk kahve.",
      image: "/images/iced-coffee.jpg",
      details: "Espresso + buz + su",
    },
  ],

  dessert: [
    {
      name: "Waffle",
      desc: "Taze waffle çeşitleri.",
      image: "/images/waffle.jpg",
      details: "Çikolata, meyve, sos",
      subItems: [
        { name: "Classic Waffle", desc: "Çikolata + muz" },
        { name: "Strawberry Waffle", desc: "Çilek + çikolata" },
      ],
    },
  ],

  snack: [
    {
      name: "Tost",
      desc: "Kaşarlı sıcak tost.",
      image: "/images/tost.jpg",
      details: "Eritilmiş kaşar",
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
        <img
          src="/logo.jpg"
          className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold tracking-wide">AHK Cafe</h1>
        <p className="text-gray-400 text-sm">Dijital Menü</p>
      </div>

      {/* CATEGORY */}
      {!category && (
        <div className="grid gap-4">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="
                bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f]
                p-6 rounded-2xl text-left
                border border-white/10
                active:scale-[0.98]
                transition
                shadow-lg
              "
            >
              <div className="text-lg font-semibold">{c.name}</div>
              <div className="text-xs text-gray-400 mt-1">
                Menüye göz at
              </div>
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
            ← Geri
          </button>

          <h2 className="text-xl font-bold mb-4">
            {categories.find(c => c.id === category)?.name}
          </h2>

          <div className="space-y-3">
            {products[category].map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedProduct(p)}
                className="
                  bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f]
                  p-4 rounded-2xl
                  border border-white/10
                  active:scale-[0.98]
                  hover:scale-[1.01] hover:border-white/20
                  transition
                  cursor-pointer
                  shadow-lg
                  flex gap-4 items-center
                  min-h-[110px]
                "
              >
                {/* IMAGE LEFT */}
                {p.image && (
                  <img
                    src={p.image}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                )}

                {/* TEXT RIGHT */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-400">{p.desc}</p>
                </div>
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
            {selectedProduct.image && (
              <img
                src={selectedProduct.image}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}

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

          {/* SUB ITEMS */}
          {selectedProduct.subItems && (
            <div className="mt-6">
              <h3 className="text-sm text-gray-400 mb-3">
                Çeşitler
              </h3>

              <div className="grid gap-3">
                {selectedProduct.subItems.map((s, i) => (
                  <div
                    key={i}
                    className="
                      bg-gradient-to-br from-[#151515] to-[#0f0f0f]
                      p-4 rounded-2xl
                      border border-white/10
                    "
                  >
                    <h4 className="font-semibold">{s.name}</h4>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  )
}

export default App