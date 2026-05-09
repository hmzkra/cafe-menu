import { useState } from "react"

const categories = [
  { id: "breakfast", name: "Kahvaltı & Yiyecekler 🍳" },
  { id: "hot", name: "Sıcak İçecekler ☕" },
  { id: "cold", name: "Soğuk İçecekler 🧊" },
  { id: "dessert", name: "Tatlılar 🍰" },
  { id: "waffle", name: "Waffle 🧇" },
  { id: "games", name: "Oyunlar 🎲" },
]

const products = {
  breakfast: [
    {
      section: "Kahvaltılar",
      items: [
        {
          name: "Serpme Kahvaltı",
          price: "850₺",
          image: "/images/serpme.jpg",
          desc: "2 kişilik zengin serpme kahvaltı.",
          details:
            "2 çeşit peynir, 2 çeşit zeytin, domates, salatalık, reçel çeşitleri, sigara böreği, sosis, patates kızartması, yumurta, çikolata, bal ve tereyağı ile servis edilir.",
        },
      ],
    },

    {
      section: "Aparatifler",
      items: [
        {
          name: "Menemen",
          price: "220₺",
          image: "/images/menemen.jpg",
          desc: "Geleneksel Türk kahvaltı lezzeti.",
          details:
            "Domates, biber ve yumurta ile günlük hazırlanan sıcak menemen.",
        },

        {
          name: "Otlu Omlet",
          price: "220₺",
          image: "/images/otlu-omlet.jpg",
          desc: "Taze otlarla hazırlanan omlet.",
          details:
            "Mevsim otları ve yumurta ile hazırlanan hafif kahvaltılık.",
        },

        {
          name: "Sade Omlet",
          price: "190₺",
          image: "/images/sade-omlet.jpg",
          desc: "Klasik sade omlet.",
          details:
            "Taze yumurta ile hazırlanan hafif ve doyurucu omlet.",
        },

        {
          name: "Sucuklu Yumurta",
          price: "230₺",
          image: "/images/sucuklu-yumurta.jpg",
          desc: "Klasik Türk kahvaltısı.",
          details:
            "Taze yumurta ve özel baharatlı sucuk ile hazırlanır.",
        },

        {
          name: "Tost Çeşitleri",
          price: "220₺",
          image: "/images/tost.jpg",
          desc: "Kaşarlı sıcak tost çeşitleri.",
          details:
            "Günlük ekmek ve özel kaşar peyniri ile hazırlanır.",
        },

        {
          name: "Patates Kızartması",
          price: "180₺",
          image: "/images/patates.jpg",
          desc: "Çıtır patates kızartması.",
          details:
            "Özel soslar ile servis edilir.",
        },
      ],
    },
  ],

  hot: [
    {
      section: "Klasik Sıcaklar",
      items: [
        {
          name: "Çay",
          price: "35₺",
          image: "/images/cay.jpg",
          desc: "Demlik çayı.",
          details:
            "Taze demlenmiş geleneksel Türk çayı.",
        },

        {
          name: "Türk Kahvesi",
          price: "100₺",
          image: "/images/turkkahvesi.jpg",
          desc: "Bol köpüklü Türk kahvesi.",
          details:
            "Geleneksel yöntemlerle hazırlanır.",
        },

        {
          name: "Aromalı Türk Kahvesi",
          price: "110₺",
          image: "/images/aromaliturkkahvesi.jpg",
          desc: "Özel aromalı Türk kahvesi.",
          details:
            "Farklı aromalar ile hazırlanan özel Türk kahvesi.",
        },

        {
          name: "Ballı Muzlu Süt",
          price: "170₺",
          image: "/images/ballimuzlusut.jpg",
          desc: "Tatlı ve yoğun içim.",
          details:
            "Bal, süt ve muz ile hazırlanır.",
        },

        {
          name: "Bitki Çayları",
          price: "130₺",
          image: "/images/bitkicayi.jpg",
          desc: "Doğal bitki çayı seçenekleri.",
          details:
            "Adaçayı, ıhlamur ve özel bitki karışımları.",
        },

        {
          name: "Salep",
          price: "130₺",
          image: "/images/salep.jpg",
          desc: "Tarçınlı sıcak salep.",
          details:
            "Yoğun kıvamlı ve sıcak servis edilir.",
        },

        {
          name: "Sıcak Çikolata",
          price: "130₺",
          image: "/images/sicakcikolata.jpg",
          desc: "Yoğun çikolata lezzeti.",
          details:
            "Sıcak süt ve çikolata ile hazırlanır.",
        },
      ],
    },

    {
      section: "Espressolu Sıcaklar",
      items: [
        {
          name: "Espresso",
          price: "90₺",
          image: "/images/espresso.jpg",
          desc: "Yoğun espresso shot.",
          details:
            "Kaliteli espresso çekirdekleriyle hazırlanır.",
        },

        {
          name: "Americano",
          price: "140₺",
          image: "/images/americano.jpg",
          desc: "Yumuşak içimli kahve.",
          details:
            "Espresso ve sıcak su ile hazırlanır.",
        },

        {
          name: "Latte",
          price: "175₺",
          image: "/images/latte.jpg",
          desc: "Sütlü kahve klasiği.",
          details:
            "Espresso, süt ve hafif süt köpüğü ile hazırlanır.",
        },

        {
          name: "Aromalı Latte",
          price: "190₺",
          image: "/images/aromalilatte.jpg",
          desc: "Özel aromalı latte.",
          details:
            "Vanilya, karamel veya farklı aroma seçenekleri.",
        },

        {
          name: "Cappuccino",
          price: "190₺",
          image: "/images/cappuccino.jpg",
          desc: "İtalyan kahve klasiği.",
          details:
            "Espresso, sıcak süt ve yoğun süt köpüğü.",
        },

        {
          name: "Mocha",
          price: "190₺",
          image: "/images/mocha.jpg",
          desc: "Çikolatalı espresso.",
          details:
            "Espresso, süt ve çikolata ile hazırlanır.",
        },

        {
          name: "Macchiato",
          price: "190₺",
          image: "/images/macchiato.jpg",
          desc: "Yoğun espresso aroması.",
          details:
            "Espresso ve hafif süt köpüğü ile hazırlanır.",
        },

        {
          name: "Filtre Kahve",
          price: "170₺",
          image: "/images/filtrekahve.jpg",
          desc: "Günlük filtre kahve.",
          details:
            "Taze öğütülmüş çekirdeklerle hazırlanır.",
        },
      ],
    },
  ],

  cold: [
    {
      section: "Soğuk Kahveler",
      items: [
        {
          name: "Ice Americano",
          price: "150₺",
          image: "/images/iceamericano.jpg",
          desc: "Ferahlık veren soğuk kahve.",
          details:
            "Espresso, su ve buz ile hazırlanır.",
        },

        {
          name: "Ice Latte",
          price: "175₺",
          image: "/images/icelatte.jpg",
          desc: "Soğuk sütlü kahve.",
          details:
            "Espresso, süt ve buz ile hazırlanır.",
        },

        {
          name: "Ice Mocha",
          price: "185₺",
          image: "/images/icemocha.jpg",
          desc: "Çikolatalı soğuk kahve.",
          details:
            "Espresso, süt ve çikolata ile hazırlanır.",
        },

        {
          name: "Ice Caramel Macchiato",
          price: "185₺",
          image: "/images/caramelmacchiato.jpg",
          desc: "Karamelli özel kahve.",
          details:
            "Espresso, süt ve karamel aroması.",
        },

        {
          name: "Cold Brew",
          price: "240₺",
          image: "/images/coldbrew.jpg",
          desc: "Uzun süre demlenen kahve.",
          details:
            "Yoğun aromalı ve düşük asiditeli.",
        },

        {
          name: "Frappe",
          price: "185₺",
          image: "/images/frappe.jpg",
          desc: "Soğuk köpüklü kahve.",
          details:
            "Buzlu ve ferahlatıcı kahve deneyimi.",
        },
      ],
    },

    {
      section: "Kokteyller",
      items: [
        {
          name: "Dolce Frigola",
          price: "240₺",
          image: "/images/dolcefrigola.jpg",
          desc: "Özel kokteyl.",
          details:
            "Ferahlatıcı premium kokteyl.",
        },

        {
          name: "Mia",
          price: "240₺",
          image: "/images/mia.jpg",
          desc: "Meyve aromalı kokteyl.",
          details:
            "Özel sunum ile hazırlanır.",
        },

        {
          name: "AHK Mix",
          price: "270₺",
          image: "/images/ahkmix.jpg",
          desc: "AHK Cafe özel karışımı.",
          details:
            "Özel reçeteli premium kokteyl.",
        },

        {
          name: "Mojito",
          price: "240₺",
          image: "/images/mojito.jpg",
          desc: "Naneli ferahlatıcı kokteyl.",
          details:
            "Lime ve nane aromalarıyla hazırlanır.",
        },

        {
          name: "Kuzu Kulağı",
          price: "320₺",
          image: "/images/kuzukulagi.jpg",
          desc: "Premium kokteyl deneyimi.",
          details:
            "Özel sunum ve yoğun aroma.",
        },
      ],
    },

    {
      section: "Milkshake Çeşitleri",
      items: [
        {
          name: "Milkshake",
          price: "220₺",
          image: "/images/milkshake.jpg",
          desc: "Yoğun milkshake çeşitleri.",
          details:
            "Muz, çilek, çikolata, karamel, frambuaz ve vanilya seçenekleri.",
        },
      ],
    },

    {
      section: "Frozen Çeşitleri",
      items: [
        {
          name: "Frozen",
          price: "210₺",
          image: "/images/frozen.jpg",
          desc: "Meyveli frozen seçenekleri.",
          details:
            "Çilek, mango, karpuz, şeftali, cool lime, limon, ananas, oreo, karamel ve vanilya seçenekleri.",
        },
      ],
    },

    {
      section: "Meşrubatlar",
      items: [
        {
          name: "Redbull",
          price: "140₺",
          image: "/images/redbull.jpg",
          desc: "Enerji içeceği.",
          details:
            "Soğuk servis edilir.",
        },

        {
          name: "Ice Tea",
          price: "110₺",
          image: "/images/icetea.jpg",
          desc: "Soğuk çay.",
          details:
            "Limon veya şeftali aromalı seçenekler.",
        },

        {
          name: "Cola",
          price: "110₺",
          image: "/images/cola.jpg",
          desc: "Soğuk gazlı içecek.",
          details:
            "Buz ile servis edilir.",
        },

        {
          name: "Limonata",
          price: "170₺",
          image: "/images/limonata.jpg",
          desc: "Ev yapımı limonata.",
          details:
            "Taze limonlarla hazırlanır.",
        },

        {
          name: "Su",
          price: "30₺",
          image: "/images/su.jpg",
          desc: "Doğal su.",
          details:
            "Soğuk servis edilir.",
        },
      ],
    },
  ],

  dessert: [
    {
      section: "Tatlılar",
      items: [
        {
          name: "Cookies",
          price: "90₺",
          image: "/images/cookies.jpg",
          desc: "Taze günlük cookie.",
          details:
            "Çikolata parçacıklı özel tarif.",
        },

        {
          name: "Dilim Pasta",
          price: "170₺",
          image: "/images/pasta.jpg",
          desc: "Günlük pasta çeşitleri.",
          details:
            "Farklı lezzet seçenekleriyle servis edilir.",
        },

        {
          name: "Magnolia",
          price: "140₺",
          image: "/images/magnolia.jpg",
          desc: "Hafif sütlü tatlı.",
          details:
            "Meyve ve bisküvi katmanlarıyla hazırlanır.",
        },

        {
          name: "Sütlaç",
          price: "150₺",
          image: "/images/sutlac.jpg",
          desc: "Fırın sütlaç.",
          details:
            "Geleneksel tarif ile hazırlanır.",
        },

        {
          name: "Tiramisu",
          price: "170₺",
          image: "/images/tiramisu.jpg",
          desc: "İtalyan tatlısı.",
          details:
            "Kahve aromalı özel kremalı tatlı.",
        },

        {
          name: "Valovan",
          price: "120₺",
          image: "/images/valovan.jpg",
          desc: "Hafif atıştırmalık tatlı.",
          details:
            "Özel kremalı sunum.",
        },

        {
          name: "Cheesecake",
          price: "180₺",
          image: "/images/cheesecake.jpg",
          desc: "Özel cheesecake.",
          details:
            "Farklı sos seçenekleriyle servis edilir.",
        },
      ],
    },
  ],

  waffle: [
    {
      section: "Waffle Çeşitleri",
      items: [
        {
          name: "Tek Meyveli",
          price: "180₺",
          image: "/images/waffle.jpg",
          desc: "Tek meyveli waffle.",
          details:
            "Taze meyve ve özel soslarla hazırlanır.",
        },

        {
          name: "Çift Meyveli",
          price: "200₺",
          image: "/images/waffle.jpg",
          desc: "Çift meyveli waffle.",
          details:
            "İki farklı meyve seçeneği ile hazırlanır.",
        },

        {
          name: "Mix Waffle",
          price: "220₺",
          image: "/images/waffle.jpg",
          desc: "Karışık premium waffle.",
          details:
            "Birden fazla meyve ve özel topping içerir.",
        },
        {
  name: "İlave Dondurma",
  price: "40₺",
  image: "/images/waffle.jpg",
  desc: "Ekstra dondurma.",
  details:
    "Waffle yanında ekstra dondurma servisi.",
},

{
  name: "İlave Kaymak",
  price: "50₺",
  image: "/images/waffle.jpg",
  desc: "Ekstra kaymak.",
  details:
    "Yoğun kıvamlı özel kaymak ilavesi.",
},

{
  name: "İlave Şekerleme",
  price: "10₺",
  image: "/images/waffle.jpg",
  desc: "Renkli şekerleme.",
  details:
    "Waffle üzerine ekstra şekerleme ilavesi.",
},
      ],
    },
  ],

  games: [
  {
    section: "Kutu Oyunları",
    items: [
      {
        name: "Tavla",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Klasik tavla oyunu.",
        details: "2 kişi oynanır, strateji ve şans içerir.",
      },
      {
        name: "Okey",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Taş dizme oyunu.",
        details: "4 kişiyle oynanan geleneksel oyun.",
      },
      {
        name: "Monopoly",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Mülk yönetim oyunu.",
        details: "Strateji ve para yönetimi içerir.",
      },
      {
        name: "Satranç",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Zeka oyunu.",
        details: "İki kişi arasında stratejik savaş.",
      },
      {
        name: "İskambil",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Kart oyunları.",
        details: "Birçok farklı oyun türü içerir.",
      },
      {
        name: "Tabu",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Kelime anlatma oyunu.",
        details: "Takım halinde oynanır.",
      },
      {
        name: "Uno",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Kart eşleştirme oyunu.",
        details: "Renk ve sayı uyum oyunu.",
      },
      {
        name: "Dedektif",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Mantık oyunu.",
        details: "İpuçlarını takip ederek çözüm bulma.",
      },
      {
        name: "Katil Kim",
        price: "Ücretsiz",
        image: "/images/games.jpg",
        desc: "Sosyal çıkarım oyunu.",
        details: "Katili bulma üzerine kurulu eğlenceli oyun.",
      },
    ],
  },
],
}

function App() {
  const [category, setCategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-5">

      <div className="text-center mb-8">
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-20 h-20 rounded-full mx-auto object-cover mb-3"
        />

        <h1 className="text-3xl font-bold">
          AHK Cafe
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Dijital Menü
        </p>
      </div>

      {!category && (
        <div className="grid gap-4">

          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="
                bg-[#151515]
                border border-white/10
                rounded-3xl
                p-5
                text-left
                active:scale-[0.98]
                transition
              "
            >
              <div className="text-lg font-semibold">
                {c.name}
              </div>

              <div className="text-sm text-gray-400 mt-1">
                Menüye göz at
              </div>
            </button>
          ))}

        </div>
      )}

      {category && !selectedProduct && (
        <div>

          <button
            onClick={() => setCategory(null)}
            className="mb-5 text-gray-400"
          >
            ← Kategoriler
          </button>

          <h2 className="text-2xl font-bold mb-6">
            {categories.find(c => c.id === category)?.name}
          </h2>

          <div className="space-y-8">

            {products[category].map((section, sectionIndex) => (
              <div key={sectionIndex}>

                <h3 className="text-xl font-semibold mb-4 text-white/90">
                  {section.section}
                </h3>

                <div className="grid gap-5">

                  {section.items.map((p, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedProduct(p)}
                      className="
                        bg-[#151515]
                        border border-white/10
                        rounded-3xl
                        overflow-hidden
                        active:scale-[0.99]
                        transition
                        cursor-pointer
                      "
                    >

                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-56 object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://placehold.co/600x400/111111/FFFFFF?text=AHK+Cafe"
                        }}
                      />

                      <div className="p-5">

                        <div className="flex items-center justify-between gap-3">

                          <h3 className="text-lg font-semibold">
                            {p.name}
                          </h3>

                          <div className="
                            bg-white text-black
                            text-sm font-bold
                            px-3 py-1 rounded-full
                          ">
                            {p.price}
                          </div>

                        </div>

                        <p className="text-gray-400 text-sm mt-3">
                          {p.desc}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      )}

      {selectedProduct && (
        <div>

          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-5 text-gray-400"
          >
            ← Geri
          </button>

          <div className="
            bg-[#151515]
            border border-white/10
            rounded-3xl
            overflow-hidden
          ">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-72 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/600x400/111111/FFFFFF?text=AHK+Cafe"
              }}
            />

            <div className="p-6">

              <div className="flex items-center justify-between gap-3 mb-4">

                <h2 className="text-2xl font-bold">
                  {selectedProduct.name}
                </h2>

                <div className="
                  bg-white text-black
                  text-sm font-bold
                  px-3 py-1 rounded-full
                ">
                  {selectedProduct.price}
                </div>

              </div>

              <p className="text-gray-400 mb-4">
                {selectedProduct.desc}
              </p>

              <p className="text-white/80 leading-7">
                {selectedProduct.details}
              </p>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default App