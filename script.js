const menu = {
  "Sıcak Kahveler": [
    { ad: "Türk Kahvesi", fiyat: 60 },
    { ad: "Filtre Kahve", fiyat: 70 },
    { ad: "Espresso", fiyat: 65 },
    { ad: "Americano", fiyat: 75 },
    { ad: "Latte", fiyat: 90 },
    { ad: "Cappuccino", fiyat: 90 },
    { ad: "Mocha", fiyat: 100 },
    { ad: "Flat White", fiyat: 95 }
  ],
  "Soğuk Kahveler": [
    { ad: "Iced Americano", fiyat: 85 },
    { ad: "Iced Latte", fiyat: 95 },
    { ad: "Iced Mocha", fiyat: 105 },
    { ad: "Cold Brew", fiyat: 100 },
    { ad: "Frappe", fiyat: 110 }
  ],
  "Çaylar": [
    { ad: "Çay", fiyat: 25 },
    { ad: "Bitki Çayı", fiyat: 60 },
    { ad: "Yeşil Çay", fiyat: 60 },
    { ad: "Ihlamur", fiyat: 60 },
    { ad: "Adaçayı", fiyat: 60 },
    { ad: "Kış Çayı", fiyat: 70 }
  ],
  "Diğer Sıcak İçecekler": [
    { ad: "Sıcak Çikolata", fiyat: 95 },
    { ad: "Salep", fiyat: 90 },
    { ad: "Sıcak Süt", fiyat: 50 },
    { ad: "Chai Latte", fiyat: 95 }
  ],
  "Soğuk İçecekler": [
    { ad: "Su", fiyat: 15 },
    { ad: "Soda", fiyat: 30 },
    { ad: "Kola", fiyat: 50 },
    { ad: "Ayran", fiyat: 30 },
    { ad: "Limonata", fiyat: 70 },
    { ad: "Ice Tea", fiyat: 55 },
    { ad: "Gazoz", fiyat: 45 }
  ],
  "Taze Meyve Suları": [
    { ad: "Portakal Suyu", fiyat: 90 },
    { ad: "Nar Suyu", fiyat: 100 },
    { ad: "Havuç Suyu", fiyat: 85 },
    { ad: "Karışık Meyve Suyu", fiyat: 95 }
  ],
  "Milkshake & Smoothie": [
    { ad: "Çikolatalı Milkshake", fiyat: 110 },
    { ad: "Çilekli Milkshake", fiyat: 110 },
    { ad: "Muzlu Milkshake", fiyat: 110 },
    { ad: "Çilekli Smoothie", fiyat: 105 },
    { ad: "Orman Meyveli Smoothie", fiyat: 105 }
  ],
  "Tatlılar": [
    { ad: "Cheesecake", fiyat: 110 },
    { ad: "Tiramisu", fiyat: 115 },
    { ad: "Sufle", fiyat: 120 },
    { ad: "Brownie", fiyat: 95 },
    { ad: "Sütlaç", fiyat: 80 },
    { ad: "Baklava", fiyat: 130 },
    { ad: "Künefe", fiyat: 140 }
  ],
  "Pasta & Kurabiye": [
    { ad: "Dilim Pasta", fiyat: 100 },
    { ad: "Cookie", fiyat: 60 },
    { ad: "Muffin", fiyat: 70 },
    { ad: "Donut", fiyat: 65 },
    { ad: "Kruvasan", fiyat: 75 },
    { ad: "Profiterol", fiyat: 95 }
  ],
  "Dondurma": [
    { ad: "Tek Top Dondurma", fiyat: 50 },
    { ad: "Çift Top Dondurma", fiyat: 90 },
    { ad: "Waffle Dondurmalı", fiyat: 150 }
  ],
  "Kahvaltılıklar": [
    { ad: "Serpme Kahvaltı (2 Kişilik)", fiyat: 450 },
    { ad: "Kahvaltı Tabağı", fiyat: 220 },
    { ad: "Menemen", fiyat: 130 },
    { ad: "Omlet", fiyat: 110 },
    { ad: "Simit", fiyat: 25 },
    { ad: "Poğaça", fiyat: 35 }
  ],
  "Tost & Sandviç": [
    { ad: "Kaşarlı Tost", fiyat: 90 },
    { ad: "Karışık Tost", fiyat: 110 },
    { ad: "Sucuklu Tost", fiyat: 115 },
    { ad: "Tavuklu Sandviç", fiyat: 120 },
    { ad: "Ton Balıklı Sandviç", fiyat: 125 },
    { ad: "Hamburger", fiyat: 150 }
  ],
  "Atıştırmalıklar": [
    { ad: "Patates Kızartması", fiyat: 80 },
    { ad: "Soğan Halkası", fiyat: 80 },
    { ad: "Çıtır Tavuk", fiyat: 120 },
    { ad: "Nachos", fiyat: 100 },
    { ad: "Sigara Böreği", fiyat: 90 }
  ],
  "Salatalar": [
    { ad: "Sezar Salata", fiyat: 130 },
    { ad: "Mevsim Salata", fiyat: 90 },
    { ad: "Ton Balıklı Salata", fiyat: 140 },
    { ad: "Çoban Salata", fiyat: 80 }
  ]
};

// Fiyata göre ucuzdan pahalıya sırala
for (const kategori in menu) {
  menu[kategori].sort((a, b) => a.fiyat - b.fiyat);
}

// Grup görselleri (dosya adları gorseller klasöründekilerle aynı olmalı)
const resimler = {
  "Sıcak Kahveler": "gorseller/sicak-kahveler.jpg",
  "Soğuk Kahveler": "gorseller/soguk-kahveler.jpg",
  "Çaylar": "gorseller/caylar.jpg",
  "Diğer Sıcak İçecekler": "gorseller/diger-sicak.jpg",
  "Soğuk İçecekler": "gorseller/soguk-icecekler.jpg",
  "Taze Meyve Suları": "gorseller/meyve-sulari.jpg",
  "Milkshake & Smoothie": "gorseller/milkshake.jpg",
  "Tatlılar": "gorseller/tatlilar.jpg",
  "Pasta & Kurabiye": "gorseller/pasta.jpg",
  "Dondurma": "gorseller/dondurma.jpg",
  "Kahvaltılıklar": "gorseller/kahvalti.jpg",
  "Tost & Sandviç": "gorseller/tost.jpg",
  "Atıştırmalıklar": "gorseller/atistirmalik.jpg",
  "Salatalar": "gorseller/salata.jpg"
};

const menuAlani = document.getElementById("menu");
const geriButonu = document.getElementById("geri");
const arkaPlan = document.getElementById("arka-plan");

// Ana ekran: sadece gruplar
function anaEkran() {
  geriButonu.style.display = "none";
  arkaPlan.classList.remove("acik");
  menuAlani.innerHTML = "";

  for (const kategori in menu) {
    const kart = document.createElement("div");
    kart.className = "kategori-kart";

    const resim = resimler[kategori];
    kart.innerHTML = (resim ? `<img src="${resim}" alt="">` : "") + `<span>${kategori}</span>`;

    kart.onclick = () => urunleriGoster(kategori);
    menuAlani.appendChild(kart);
  }
}

// Gruba tıklayınca ürünler ve fiyatlar
function urunleriGoster(kategori) {
  geriButonu.style.display = "block";

  const resim = resimler[kategori];
  if (resim) {
    arkaPlan.style.backgroundImage =
      `linear-gradient(rgba(243,229,200,0.82), rgba(243,229,200,0.82)), url("${resim}")`;
    arkaPlan.classList.add("acik");
  }

  let html = `<h2>${kategori}</h2>`;
  menu[kategori].forEach(urun => {
    html += `<div class="urun"><span>${urun.ad}</span><span>${urun.fiyat} ₺</span></div>`;
  });

  menuAlani.innerHTML = html;
}

geriButonu.onclick = anaEkran;
anaEkran();
