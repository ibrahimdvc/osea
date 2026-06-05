/* ============ DATA LAYER ============ */

const WA_NUMBER = '905451256440';
const WA_DISPLAY = '+90 545 125 64 40';
const COMPANY = {
  name: 'OSEA Reklam & Organizasyon',
  tag: 'Event & Design',
  city: 'Adana',
  address: 'Nova Diamont Apt, Mahfesığmaz, 79144. Sk. 11-C Zemin Kat, 01170 Çukurova / Adana',
  phone: '+90 545 125 64 40',
  instagram: 'oseareklam01',
  instagramUrl: 'https://www.instagram.com/oseareklam01/',
  email: 'info@osearek lam.com',
};

// Unsplash photos curated for signage / printing / workshop vibes
const IMG = {
  hero: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=1920&q=80',
  hero2: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1920&q=80',
  hero3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  workshop: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80',
  about: 'https://images.unsplash.com/photo-1559480630-c5e1da169f6f?w=1200&q=80',
};

const CATEGORIES = [
  {
    slug: 'tabela',
    name: 'Tabela',
    tagline: 'Markanızın sokaktaki yüzü',
    description: 'Kutu harf, totem, ışıklı, kompozit, LED ve fener tabela üretimi. Adana ve çevresinde profesyonel montaj.',
    cover: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80',
    subs: [
      { slug: 'cephe-kaplama', name: 'Cephe Kaplama', cover: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80' },
      { slug: 'kutu-harf-tabela', name: 'Kutu Harf Tabela', cover: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80' },
      { slug: 'totem-tabela', name: 'Totem Tabela', cover: 'https://images.unsplash.com/photo-1604782206219-3b9576575203?w=1200&q=80' },
      { slug: 'vinil-tabela', name: 'Vinil Tabela', cover: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=1200&q=80' },
      { slug: 'kompozit-tabela', name: 'Kompozit Tabela', cover: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80' },
      { slug: 'kompozit-oyma', name: 'Kompozit Oyma', cover: 'https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=1200&q=80' },
      { slug: 'isikli-tabela', name: 'Işıklı Tabela', cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80' },
      { slug: 'fener-tabela', name: 'Fener Tabela', cover: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=1200&q=80' },
      { slug: 'light-box', name: 'Light Box', cover: 'https://images.unsplash.com/photo-1492136344046-866c85e0bf04?w=1200&q=80' },
      { slug: 'led-tabela', name: 'LED Tabela', cover: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80' },
      { slug: 'duba-bayrak', name: 'Duba Bayrak', cover: 'https://images.unsplash.com/photo-1565035010268-a3816f98589a?w=1200&q=80' },
    ],
  },
  {
    slug: 'dijital-baski',
    name: 'Dijital Baskı',
    tagline: 'Renk doğruluğu, hızlı teslimat',
    description: 'Folyo, vinil, billboard, raket baskı ile lazer ve folyo kesim hizmetleri.',
    cover: 'https://images.unsplash.com/photo-1601933513793-fa629c7b1f7e?w=1600&q=80',
    subs: [
      { slug: 'folyo-baski', name: 'Folyo Baskı', cover: 'https://images.unsplash.com/photo-1601933513793-fa629c7b1f7e?w=1200&q=80' },
      { slug: 'vinil-baski', name: 'Vinil Baskı', cover: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=1200&q=80' },
      { slug: 'avrupa-vinil-baski', name: 'Avrupa Vinil Baskı', cover: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80' },
      { slug: 'isikli-vinil-baski', name: 'Işıklı Vinil Baskı', cover: 'https://images.unsplash.com/photo-1492136344046-866c85e0bf04?w=1200&q=80' },
      { slug: 'bilbord-baski', name: 'Bilbord Baskı', cover: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80' },
      { slug: 'raket-baski', name: 'Raket Baskı', cover: 'https://images.unsplash.com/photo-1523643478442-99fbbc8ec8d6?w=1200&q=80' },
      { slug: 'folyo-kesim', name: 'Folyo Kesim', cover: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=1200&q=80' },
      { slug: 'laminasyon', name: 'Laminasyon', cover: 'https://images.unsplash.com/photo-1606613555107-fa8e3da0f7b8?w=1200&q=80' },
      { slug: 'lazer-kesim', name: 'Lazer Kesim', cover: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=1200&q=80' },
      { slug: 'markalama', name: 'Markalama', cover: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?w=1200&q=80' },
      { slug: 'plexi-kesim', name: 'Plexi Kesim', cover: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&q=80' },
      { slug: 'forex-kesim', name: 'Forex Kesim', cover: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80' },
    ],
  },
  {
    slug: 'matbaa',
    name: 'Matbaa',
    tagline: 'Kâğıttan kataloğa, ince işçilik',
    description: 'Kartvizit, broşür, davetiye, katalog ve kurumsal matbaa ürünleri.',
    cover: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1600&q=80',
    subs: [
      { slug: 'kartvizit', name: 'Kartvizit', cover: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80' },
      { slug: 'brosur', name: 'Broşür', cover: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80' },
      { slug: 'cikartma-etiket', name: 'Çıkartma Etiket', cover: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=1200&q=80' },
      { slug: 'magnet', name: 'Magnet', cover: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80' },
      { slug: 'davetiye', name: 'Davetiye', cover: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80' },
      { slug: 'bloknot', name: 'Bloknot', cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80' },
      { slug: 'katalog', name: 'Katalog', cover: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80' },
      { slug: 'antetli-kagit', name: 'Antetli Kağıt', cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80' },
      { slug: 'cepli-dosya', name: 'Cepli Dosya', cover: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80' },
      { slug: 'oto-paspas', name: 'Oto Paspas', cover: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80' },
      { slug: 'diplomat-zarf', name: 'Diplomat Zarf', cover: 'https://images.unsplash.com/photo-1579423732716-9d7e1a8b0c91?w=1200&q=80' },
    ],
  },
  {
    slug: 'promosyon',
    name: 'Promosyon',
    tagline: 'Marka armağanları, akılda kalan detaylar',
    description: 'Kurumsal hediyeler, tişört, şapka, termos, ofis ürünleri ve özel set tasarımları.',
    cover: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1600&q=80',
    subs: [
      { slug: 'tisort', name: 'Tişört', cover: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80' },
      { slug: 'bardak', name: 'Bardak', cover: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=1200&q=80' },
      { slug: 'sapka', name: 'Şapka', cover: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1200&q=80' },
      { slug: 'kalem', name: 'Kalem', cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80' },
      { slug: 'anahtarlik', name: 'Anahtarlık', cover: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=1200&q=80' },
      { slug: 'cakmak', name: 'Çakmak', cover: 'https://images.unsplash.com/photo-1604077198519-ac0876bf4f1c?w=1200&q=80' },
      { slug: 'canta', name: 'Çanta', cover: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80' },
      { slug: 'mouse-pad', name: 'Mouse Pad', cover: 'https://images.unsplash.com/photo-1527443060795-0402a218f96f?w=1200&q=80' },
      { slug: 'hediyelik-set', name: 'Hediyelik Set', cover: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&q=80' },
      { slug: 'termos', name: 'Termos', cover: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=1200&q=80' },
      { slug: 'ofis-urunleri', name: 'Ofis Ürünleri', cover: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=80' },
    ],
  },
  {
    slug: 'web-sitesi',
    name: 'Web Sitesi',
    tagline: 'Dijital varlığınız için tasarım & yönetim',
    description: 'Kurumsal web siteleri, e-ticaret danışmanlığı, sosyal medya ve içerik üretimi.',
    cover: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80',
    subs: [
      { slug: 'web-sitesi', name: 'Web Sitesi', cover: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80' },
      { slug: 'sosyal-medya-uzmanligi', name: 'Sosyal Medya Uzmanlığı', cover: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80' },
      { slug: 'reklam-danismanligi', name: 'Reklam Danışmanlığı', cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80' },
      { slug: 'fotograf-cekimi', name: 'Fotoğraf Çekimi', cover: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80' },
      { slug: 'drone-cekimi', name: 'Drone Çekimi', cover: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=1200&q=80' },
      { slug: 'blog-sitesi', name: 'Blog Sitesi', cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80' },
      { slug: 'satis-sitesi', name: 'Satış Sitesi', cover: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=80' },
      { slug: 'e-ticaret-danismanligi', name: 'E-Ticaret Danışmanlığı', cover: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=80' },
    ],
  },
];

// Seed products — a handful per popular subcategory
const SEED_PRODUCTS = [
  // Kutu Harf Tabela
  { id: 'p1', cat: 'tabela', sub: 'kutu-harf-tabela', name: 'Pleksi Kutu Harf · Altın', desc: 'Pleksi yüzey, LED aydınlatma, paslanmaz arkalık. Premium görünüm.', img: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80', specs: { 'Malzeme': 'Pleksi 5 mm', 'Yükseklik': '20-100 cm', 'Aydınlatma': 'LED', 'Üretim': '5-7 iş günü' } },
  { id: 'p2', cat: 'tabela', sub: 'kutu-harf-tabela', name: 'Paslanmaz Kutu Harf', desc: 'Fırçalanmış paslanmaz çelik, dış mekan dayanımı.', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80', specs: { 'Malzeme': 'Paslanmaz 304', 'Yükseklik': '30-150 cm', 'Aydınlatma': 'LED arka', 'Üretim': '7-10 iş günü' } },
  { id: 'p3', cat: 'tabela', sub: 'kutu-harf-tabela', name: 'Krom Kutu Harf', desc: 'Parlak krom yüzey, gece-gündüz vurgu.', img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80', specs: { 'Malzeme': 'Galvaniz krom', 'Yükseklik': '20-80 cm', 'Aydınlatma': 'LED', 'Üretim': '6-8 iş günü' } },
  // Totem
  { id: 'p4', cat: 'tabela', sub: 'totem-tabela', name: 'Çift Yüzlü LED Totem', desc: 'Dış mekan, iki yüzlü, çelik konstrüksiyon.', img: 'https://images.unsplash.com/photo-1604782206219-3b9576575203?w=1200&q=80', specs: { 'Yükseklik': '2.5-4 m', 'Aydınlatma': 'LED', 'Üretim': '10-14 iş günü', 'Montaj': 'Dahil' } },
  { id: 'p5', cat: 'tabela', sub: 'totem-tabela', name: 'Kompozit Totem', desc: 'Modern hat, kompozit yüzey kaplama.', img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80', specs: { 'Yükseklik': '2-3.5 m', 'Yüzey': 'Kompozit', 'Üretim': '8-12 iş günü', 'Montaj': 'Dahil' } },
  // Işıklı
  { id: 'p6', cat: 'tabela', sub: 'isikli-tabela', name: 'Vakum Işıklı Tabela', desc: 'Vakumlu pleksi yüzey, eşit ışık dağılımı.', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80', specs: { 'Yüzey': 'Pleksi vakum', 'Aydınlatma': 'LED', 'Üretim': '7-9 iş günü' } },
  // LED
  { id: 'p7', cat: 'tabela', sub: 'led-tabela', name: 'Hareketli LED Yazı Panosu', desc: 'Programlanabilir, mobil uyumlu kontrol.', img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80', specs: { 'Renk': 'Kırmızı / Tam Renk', 'Genişlik': '100-300 cm', 'Üretim': '5-7 iş günü' } },
  // Vinil baskı
  { id: 'p8', cat: 'dijital-baski', sub: 'vinil-baski', name: 'Premium Vinil Baskı', desc: 'Yüksek çözünürlük, dış mekan UV dayanımı.', img: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=1200&q=80', specs: { 'Malzeme': 'Avrupa vinil', 'Çözünürlük': '1440 dpi', 'Garanti': '3 yıl' } },
  { id: 'p9', cat: 'dijital-baski', sub: 'folyo-baski', name: 'Oracal Folyo Baskı', desc: 'Cam giydirme, araç kaplama için ideal.', img: 'https://images.unsplash.com/photo-1601933513793-fa629c7b1f7e?w=1200&q=80', specs: { 'Marka': 'Oracal 641', 'Garanti': '5 yıl', 'Üretim': '2-3 iş günü' } },
  { id: 'p10', cat: 'dijital-baski', sub: 'lazer-kesim', name: 'Pleksi Lazer Kesim', desc: 'Hassas kesim, özel form ve logo.', img: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=1200&q=80', specs: { 'Kalınlık': '2-10 mm', 'Hassasiyet': '±0.1 mm', 'Üretim': '3-5 iş günü' } },
  // Kartvizit
  { id: 'p11', cat: 'matbaa', sub: 'kartvizit', name: 'Lüks Kuşe Kartvizit · Mat', desc: 'Çift yüz, 350 gr kuşe, mat selefon.', img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80', specs: { 'Kağıt': '350 gr Kuşe', 'Kaplama': 'Mat selefon', 'Adet': '500 / 1000', 'Üretim': '2 iş günü' } },
  { id: 'p12', cat: 'matbaa', sub: 'kartvizit', name: 'Altın Yaldız Kartvizit', desc: 'Sıcak baskı altın yaldız, premium dokunuş.', img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80', price: 'sipariş üzeri', specs: { 'Kağıt': '350 gr Kuşe', 'Kaplama': 'Mat + Sıcak Yaldız', 'Adet': '500 / 1000', 'Üretim': '4-5 iş günü' } },
  { id: 'p13', cat: 'matbaa', sub: 'brosur', name: 'A4 Üç Katlı Broşür', desc: '170 gr kuşe, çift yüz renkli.', img: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80', specs: { 'Boyut': 'A4', 'Kağıt': '170 gr Kuşe', 'Üretim': '3 iş günü' } },
  { id: 'p14', cat: 'matbaa', sub: 'davetiye', name: 'Lüks Düğün Davetiyesi', desc: 'Özel kesim, kabartma baskı, kurdele detay.', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80', specs: { 'Kağıt': '300 gr', 'Detay': 'Kabartma + kurdele', 'Üretim': '7-10 iş günü' } },
  // Promosyon
  { id: 'p15', cat: 'promosyon', sub: 'tisort', name: 'Kurumsal Logo Tişört', desc: 'Pamuk tişört, baskı veya nakış logo.', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80', specs: { 'Kumaş': '%100 Pamuk', 'Baskı': 'Baskı / Nakış', 'Min adet': '20' } },
  { id: 'p16', cat: 'promosyon', sub: 'bardak', name: 'Sublimasyon Bardak', desc: 'Tam renk, makinada yıkanabilir.', img: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=1200&q=80', specs: { 'Boyut': '11 oz', 'Baskı': 'Sublimasyon', 'Min adet': '10' } },
  { id: 'p17', cat: 'promosyon', sub: 'termos', name: 'Çelik Termos · Logolu', desc: 'Çift cidar, 12 saat sıcak/soğuk tutar.', img: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=1200&q=80', specs: { 'Hacim': '500 ml', 'Malzeme': '304 paslanmaz', 'Baskı': 'Lazer kazıma' } },
  { id: 'p18', cat: 'promosyon', sub: 'hediyelik-set', name: 'Premium Hediye Seti', desc: 'Kalem, defter, anahtarlık + özel kutu.', img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&q=80', specs: { 'İçerik': '3-5 ürün', 'Kişiselleştirme': 'Var', 'Min adet': '20' } },
  // Web
  { id: 'p19', cat: 'web-sitesi', sub: 'web-sitesi', name: 'Kurumsal Web Sitesi', desc: 'Modern tasarım, mobil uyumlu, hızlı yükleme.', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80', specs: { 'Sayfa': '5-10', 'Süre': '15-25 gün', 'Destek': '1 yıl ücretsiz' } },
  { id: 'p20', cat: 'web-sitesi', sub: 'sosyal-medya-uzmanligi', name: 'Sosyal Medya Yönetimi', desc: 'Aylık içerik üretimi, planlama ve raporlama.', img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80', specs: { 'Paket': 'Aylık 15-30 post', 'Kanal': 'Instagram + FB', 'Raporlama': 'Aylık' } },
  { id: 'p21', cat: 'web-sitesi', sub: 'fotograf-cekimi', name: 'Ürün Fotoğraf Çekimi', desc: 'Stüdyo veya mekânda profesyonel çekim.', img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80', specs: { 'Süre': '2-4 saat', 'Çıktı': 'Retuş + JPG/PNG', 'Min ürün': '5' } },
  { id: 'p22', cat: 'web-sitesi', sub: 'drone-cekimi', name: 'Drone Çekimi (4K)', desc: 'Tanıtım filmleri, inşaat takibi, etkinlik.', img: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=1200&q=80', specs: { 'Çözünürlük': '4K UHD', 'Süre': '1-3 saat', 'Lisans': 'TSHA izinli' } },
];

/* ---------- Storage layer ---------- */
const STORE_KEY = 'osea.products.v1';

function loadStoredProducts() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}

function saveProducts(arr) {
  localStorage.setItem(STORE_KEY, JSON.stringify(arr));
}

function getAllProducts() {
  const stored = loadStoredProducts();
  return stored || SEED_PRODUCTS;
}

function resetProducts() {
  localStorage.removeItem(STORE_KEY);
}

function findCategory(slug) { return CATEGORIES.find(c => c.slug === slug); }
function findSub(catSlug, subSlug) {
  const c = findCategory(catSlug);
  return c ? c.subs.find(s => s.slug === subSlug) : null;
}
function productsFor(cat, sub) {
  return getAllProducts().filter(p => p.cat === cat && (!sub || p.sub === sub));
}
function findProduct(id) { return getAllProducts().find(p => p.id === id); }

/* ---------- WhatsApp URL ---------- */
function waUrl(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

Object.assign(window, {
  WA_NUMBER, WA_DISPLAY, COMPANY, IMG, CATEGORIES, SEED_PRODUCTS,
  loadStoredProducts, saveProducts, getAllProducts, resetProducts,
  findCategory, findSub, productsFor, findProduct, waUrl,
});
