/* Flow: Category page → Subcategory listing → Product detail → WhatsApp modal */

function CategoryPage() {
  return (
    <div className="wb" style={{ width: 720, minHeight: 900 }}>
      <div className="frame"></div>
      <span className="tag">1 · Kategori sayfası</span>
      <TopBar />
      {/* Breadcrumb */}
      <div style={{ padding:'14px 24px', fontFamily:'Kalam', fontSize: 12, color:'var(--ink-soft)' }}>
        Anasayfa <span style={{ color:'var(--gold)' }}>/</span> <b style={{ color:'var(--ink)' }}>Tabela</b>
      </div>
      {/* Hero band */}
      <div style={{ margin:'0 24px', padding: 20, border:'1.5px solid var(--rule)',
            background:'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 14px), var(--paper-2)' }}>
        <Stamp>KATEGORİ · 01</Stamp>
        <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 44, marginTop: 8 }}>Tabela</div>
        <Line gold w={50} style={{ marginTop: 6 }} />
        <Line thin w="55%" style={{ marginTop: 10 }} />
        <Line thin w="45%" style={{ marginTop: 4 }} />
      </div>

      {/* 11 subcategory tiles */}
      <div style={{ padding: '20px 24px' }}>
        <div className="lbl">alt kategoriler · 11</div>
        <Line gold w={40} style={{ marginTop: 6 }} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 12, marginTop: 14 }}>
          {['Cephe Kaplama','Kutu Harf Tabela','Totem Tabela','Vinil Tabela','Kompozit Tabela','Kompozit Oyma','Işıklı Tabela','Fener Tabela','Light Box','LED Tabela','Duba Bayrak'].map((n,i) => (
            <Box key={n} thin style={{ padding: 10 }}>
              <SketchImg style={{ height: 90 }} />
              <div style={{ marginTop: 8, fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 15 }}>{n}</div>
              <div style={{ marginTop: 4, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span className="lbl" style={{ fontSize: 9 }}>{8 + (i%5)} ürün</span>
                <span style={{ color:'var(--gold)', fontFamily:'Caveat', fontSize: 18 }}>→</span>
              </div>
            </Box>
          ))}
        </div>
        <Ann style={{ marginTop: 12 }}>↑ tıkla → alt kategori sayfasına</Ann>
      </div>

      <Foot />
    </div>
  );
}

function SubcategoryPage() {
  return (
    <div className="wb" style={{ width: 720, minHeight: 900 }}>
      <div className="frame"></div>
      <span className="tag">2 · Alt kategori (ürün listesi)</span>
      <TopBar />
      <div style={{ padding:'14px 24px', fontFamily:'Kalam', fontSize: 12, color:'var(--ink-soft)' }}>
        Anasayfa <span style={{ color:'var(--gold)' }}>/</span> Tabela <span style={{ color:'var(--gold)' }}>/</span> <b style={{ color:'var(--ink)' }}>Kutu Harf Tabela</b>
      </div>

      {/* Header */}
      <div style={{ padding:'0 24px', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div>
          <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 36 }}>Kutu Harf Tabela</div>
          <Line gold w={50} style={{ marginTop: 6 }} />
          <Line thin w={200} style={{ marginTop: 8 }} />
        </div>
        {/* Filtre */}
        <div style={{ display:'flex', gap: 8 }}>
          <Box thin style={{ padding:'6px 10px', fontFamily:'Kalam', fontSize: 12 }}>Sırala ▾</Box>
          <Box thin style={{ padding:'6px 10px', fontFamily:'Kalam', fontSize: 12 }}>Filtrele ▾</Box>
        </div>
      </div>

      {/* Product grid — using card style A */}
      <div style={{ padding: '20px 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 14 }}>
          {[0,1,2,3,4,5].map(i => (
            <Box key={i} thin style={{ padding: 10 }}>
              <SketchImg style={{ height: 110 }} />
              <div style={{ marginTop: 8 }}>
                <Line w="80%" />
                <Line thin w="50%" style={{ marginTop: 6 }} />
              </div>
              <div style={{ marginTop: 10, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontFamily:'Cormorant Garamond', fontSize: 13, color:'var(--gold)' }}>Detay →</span>
                <Btn wa>Sipariş</Btn>
              </div>
            </Box>
          ))}
        </div>
        <Ann style={{ marginTop: 12 }}>↑ kart stili 0 (seçtiğiniz) · WA butonlu</Ann>
      </div>

      {/* Pagination */}
      <div style={{ padding: '0 24px 20px', display:'flex', justifyContent:'center', gap: 8 }}>
        {['←','1','2','3','→'].map((n,i) => (
          <span key={i} style={{ width: 32, height: 32, border:'1.5px solid var(--ink)', borderRadius: 4,
              display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Kalam',
              background: n==='1' ? 'var(--ink)' : 'var(--paper)', color: n==='1' ? 'var(--paper)' : 'var(--ink)' }}>{n}</span>
        ))}
      </div>

      <Foot />
    </div>
  );
}

function ProductPage() {
  return (
    <div className="wb" style={{ width: 720, minHeight: 900 }}>
      <div className="frame"></div>
      <span className="tag">3 · Ürün detay</span>
      <TopBar />
      <div style={{ padding:'14px 24px', fontFamily:'Kalam', fontSize: 12, color:'var(--ink-soft)' }}>
        Tabela <span style={{ color:'var(--gold)' }}>/</span> Kutu Harf <span style={{ color:'var(--gold)' }}>/</span> <b style={{ color:'var(--ink)' }}>Pleksi Kutu Harf · Altın</b>
      </div>

      <div style={{ padding:'0 24px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }}>
        {/* Gallery */}
        <div>
          <SketchImg label="ürün ana görsel" style={{ height: 280 }} />
          <div style={{ display:'flex', gap: 8, marginTop: 8 }}>
            {[0,1,2,3].map(i => <SketchImg key={i} style={{ height: 60, flex: 1 }} />)}
          </div>
        </div>
        {/* Info */}
        <div>
          <div className="lbl">tabela · kutu harf</div>
          <Line gold w={30} style={{ marginTop: 4 }} />
          <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 28, marginTop: 8 }}>Pleksi Kutu Harf · Altın</div>
          <Line thin w="70%" style={{ marginTop: 10 }} />
          <Line thin w="60%" style={{ marginTop: 4 }} />
          <Line thin w="80%" style={{ marginTop: 4 }} />

          {/* specs */}
          <div style={{ marginTop: 16, display:'grid', gridTemplateColumns:'80px 1fr', rowGap: 8,
              fontFamily:'Kalam', fontSize: 13 }}>
            <div style={{ color:'var(--ink-soft)' }}>Malzeme</div><div>Pleksi · 5 mm</div>
            <div style={{ color:'var(--ink-soft)' }}>Yükseklik</div><div>30-100 cm</div>
            <div style={{ color:'var(--ink-soft)' }}>Aydınlatma</div><div>LED</div>
            <div style={{ color:'var(--ink-soft)' }}>Üretim</div><div>5-7 iş günü</div>
          </div>

          {/* opsiyonel fiyat */}
          <div style={{ marginTop: 16, padding: 10, border:'1.5px dashed var(--gold)', display:'inline-block' }}>
            <span className="lbl" style={{ fontSize: 9 }}>fiyat (opsiyonel)</span>
            <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 22, color:'var(--gold)' }}>₺ — / cm'den</div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 18, display:'flex', flexDirection:'column', gap: 8 }}>
            <Btn wa style={{ fontSize: 15, padding:'10px 16px', justifyContent:'center' }}>WhatsApp ile Sipariş ver →</Btn>
            <Btn>Tasarım Yükle / Teklif Formu</Btn>
          </div>
          <Ann style={{ marginTop: 10 }}>↑ tıklayınca → WhatsApp ön-doldurulmuş mesaj</Ann>
        </div>
      </div>

      {/* Related */}
      <div style={{ padding: '24px', borderTop:'1.5px dashed var(--rule)', marginTop: 24 }}>
        <div className="lbl">benzer ürünler</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 12, marginTop: 10 }}>
          {[0,1,2,3].map(i => (
            <Box key={i} thin style={{ padding: 8 }}>
              <SketchImg style={{ height: 80 }} />
              <Line w="70%" style={{ marginTop: 6 }} />
            </Box>
          ))}
        </div>
      </div>
      <Foot />
    </div>
  );
}

function WAModal() {
  return (
    <div className="wb" style={{ width: 720, minHeight: 720 }}>
      <div className="frame"></div>
      <span className="tag">4 · WhatsApp akışı</span>

      <div style={{ position:'absolute', inset:0, background:'rgba(20,20,20,0.55)', display:'flex',
          alignItems:'center', justifyContent:'center', padding: 30 }}>
        <div style={{ background:'var(--paper)', border:'2px solid var(--ink)', borderRadius: 8,
            width: 480, padding: 28, position:'relative' }}>
          <div style={{ position:'absolute', top: 10, right: 14, fontFamily:'Kalam', fontSize: 14, color:'var(--ink-soft)' }}>×</div>
          <Stamp color="#1f6b3a">WHATSAPP SİPARİŞ</Stamp>
          <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 24, marginTop: 10 }}>
            Mesajınızı hazırlıyoruz
          </div>
          <Line gold w={40} style={{ marginTop: 6 }} />

          {/* Pre-filled preview */}
          <div style={{ marginTop: 14, padding: 14, background:'#e8f5e9', border:'1.5px solid #1f6b3a',
              borderRadius: 6, fontFamily:'Kalam', fontSize: 12 }}>
            <div style={{ color:'#1f6b3a', fontWeight: 700 }}>Önizleme</div>
            <div style={{ marginTop: 8, color:'#1a3a23', lineHeight: 1.4 }}>
              Merhaba OSEA,<br/>
              <b>"Pleksi Kutu Harf · Altın"</b> ürünü hakkında bilgi almak istiyorum.<br/>
              · Ad: [ad]<br/>
              · Telefon: [telefon]<br/>
              · Notum: [not]
            </div>
          </div>

          {/* Form fields */}
          <div style={{ marginTop: 16, display:'flex', flexDirection:'column', gap: 10 }}>
            <Box thin style={{ padding: '10px 12px', fontFamily:'Kalam', fontSize: 13, color:'var(--ink-faint)' }}>Adınız Soyadınız</Box>
            <Box thin style={{ padding: '10px 12px', fontFamily:'Kalam', fontSize: 13, color:'var(--ink-faint)' }}>Telefon (opsiyonel)</Box>
            <Box thin style={{ padding: '10px 12px', fontFamily:'Kalam', fontSize: 13, color:'var(--ink-faint)', height: 60 }}>Eklemek istediğiniz not</Box>
          </div>

          <div style={{ marginTop: 18, display:'flex', gap: 10, justifyContent:'flex-end' }}>
            <Btn>İptal</Btn>
            <Btn wa>WhatsApp'ı Aç →</Btn>
          </div>

          <Ann style={{ marginTop: 12, textAlign:'right' }}>wa.me/905451256440?text=...</Ann>
        </div>
      </div>
    </div>
  );
}

window.CategoryPage = CategoryPage;
window.SubcategoryPage = SubcategoryPage;
window.ProductPage = ProductPage;
window.WAModal = WAModal;
