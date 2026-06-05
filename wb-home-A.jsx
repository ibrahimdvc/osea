/* A — KLASIK KATALOG: slider + circle nav + grid */
function HomeA() {
  const W = 960;
  return (
    <div className="wb" style={{ width: W, minHeight: 1500 }}>
      <div className="frame"></div>
      <span className="tag">A · Klasik Katalog</span>

      <TopBar wide />

      {/* Hero slider */}
      <div style={{ padding: '20px 28px' }}>
        <div style={{ position: 'relative', height: 360, border: '1.5px solid var(--rule)',
            background: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 14px), var(--paper-2)',
            display:'flex', alignItems:'center', padding: 36 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily:'Cormorant Garamond', fontStyle:'italic', color:'var(--gold)', fontSize: 18 }}>Premium Reklam & Tasarım</div>
            <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 44, lineHeight: 1.05, marginTop: 6 }}>
              Markanızı<br/>Görünür <em style={{ color:'var(--gold)' }}>Kılıyoruz</em>
            </div>
            <Line thin w={220} style={{ marginTop: 14 }} />
            <Line thin w={180} style={{ marginTop: 6 }} />
            <div style={{ marginTop: 18, display:'flex', gap: 10 }}>
              <Btn filled>Hizmetlerimiz →</Btn>
              <Btn wa>WhatsApp Teklif</Btn>
            </div>
          </div>
          <SketchImg label="HERO GÖRSEL · slider" style={{ width: 280, height: 260 }} />
          {/* dots */}
          <div style={{ position:'absolute', bottom: 14, left: 0, right: 0, display:'flex', justifyContent:'center', gap: 8 }}>
            {[0,1,2,3].map(i => <span key={i} style={{ width: 24, height: 4, background: i===0 ? 'var(--gold)' : 'var(--ink-faint)' }} />)}
          </div>
        </div>
        <div className="arrow" style={{ top: 230, right: 0, width: 110 }}>
          ← tam ekran<br/>foto slider<br/>3-5 görsel
        </div>
      </div>

      {/* 5 circular categories */}
      <div style={{ padding: '32px 28px 24px' }}>
        <div style={{ textAlign:'center', fontFamily:'Cormorant Garamond', fontSize: 28, fontStyle:'italic' }}>Hizmet Kategorilerimiz</div>
        <Line gold w={60} style={{ margin: '8px auto' }} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 18, marginTop: 22 }}>
          {CAT_NAMES.map((n,i) => (
            <div key={n} style={{ textAlign:'center' }}>
              <div style={{ width: 110, height: 110, borderRadius: '50%', border: '2px solid var(--gold)',
                margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center',
                background: 'var(--paper-2)', fontFamily:'Architects Daughter', fontSize: 11, color:'var(--ink-faint)' }}>
                ikon
              </div>
              <div style={{ marginTop: 10, fontFamily:'Cormorant Garamond', fontSize: 18, fontWeight: 700 }}>{n}</div>
              <div className="lbl" style={{ fontSize: 9, marginTop: 2 }}>{[11,12,11,11,8][i]} alt kategori</div>
            </div>
          ))}
        </div>
        <Ann style={{ marginTop: 14, textAlign:'center' }}>↑ tıkla → kategori sayfasına git</Ann>
      </div>

      {/* Öne çıkan işler */}
      <div style={{ padding: '24px 28px', borderTop: '1.5px dashed var(--rule)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <div style={{ fontFamily:'Cormorant Garamond', fontSize: 26, fontWeight: 700 }}>Öne Çıkan İşler</div>
          <span className="lbl">tümünü gör →</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 14, marginTop: 14 }}>
          {[0,1,2,3].map(i => (
            <Box key={i} thin style={{ padding: 8 }}>
              <SketchImg style={{ height: 140 }} />
              <div style={{ marginTop: 8 }}><Line w="70%" /></div>
              <div style={{ marginTop: 6 }}><Line thin w="50%" /></div>
              <div style={{ marginTop: 10, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontFamily:'Cormorant Garamond', fontSize: 14, color:'var(--gold)' }}>Detay</span>
                <Btn wa>Sipariş</Btn>
              </div>
            </Box>
          ))}
        </div>
      </div>

      {/* Neden biz şerit */}
      <div style={{ padding: '24px 28px', background:'var(--paper-2)', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 18 }}>
        {['15+ Yıl','500+ Proje','Hızlı Üretim','Premium Kalite'].map(t => (
          <div key={t} style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'Cormorant Garamond', fontSize: 26, fontWeight: 700, color:'var(--gold)' }}>{t}</div>
            <Line thin w={80} style={{ margin: '6px auto' }} />
            <Line thin w={60} style={{ margin: '4px auto' }} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: '28px', textAlign:'center' }}>
        <div style={{ fontFamily:'Cormorant Garamond', fontStyle:'italic', fontSize: 28 }}>Projenizi konuşalım.</div>
        <Line gold w={60} style={{ margin: '10px auto' }} />
        <div style={{ marginTop: 12, display:'flex', justifyContent:'center', gap: 10 }}>
          <Btn wa>+90 545 125 64 40</Btn>
          <Btn gold>Teklif Formu</Btn>
        </div>
      </div>

      <Foot />

      <Ann style={{ position:'absolute', top: 460, left: -160, width: 150, transform:'rotate(-3deg)' }}>
        klasik · güvenli<br/>kategorileri net gösterir
      </Ann>
    </div>
  );
}
window.HomeA = HomeA;
