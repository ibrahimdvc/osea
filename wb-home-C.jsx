/* C — ATÖLYE MOZAİK: split hero + horizontal scroll category cards */
function HomeC() {
  const W = 960;
  return (
    <div className="wb" style={{ width: W, minHeight: 1600 }}>
      <div className="frame"></div>
      <span className="tag">C · Atölye Mozaik</span>

      <TopBar wide />

      {/* Split hero */}
      <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 14, padding: '24px 28px' }}>
        <div style={{ paddingTop: 30 }}>
          <div className="lbl" style={{ fontSize: 11 }}>OSEA · Adana · 01</div>
          <Line gold w={40} style={{ marginTop: 8 }} />
          <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 64, lineHeight: 1.0, marginTop: 16 }}>
            Tabeladan<br/>kartvizite<br/><em style={{ color:'var(--gold)' }}>tek</em> adres.
          </div>
          <div style={{ marginTop: 18, fontFamily:'Kalam', fontSize: 15, color:'var(--ink-soft)', maxWidth: 360 }}>
            Üretim, montaj ve teslimat — Çukurova'da kendi atölyemizde. WhatsApp'tan hızlı teklif.
          </div>
          <div style={{ marginTop: 22, display:'flex', gap: 10 }}>
            <Btn filled>Kategoriler ↓</Btn>
            <Btn wa>WhatsApp ile Konuş</Btn>
          </div>
          <div style={{ marginTop: 30, display:'flex', gap: 24, fontFamily:'Cormorant Garamond' }}>
            <div><div style={{ fontSize: 30, fontWeight: 700, color:'var(--gold)' }}>15+</div><div className="lbl" style={{ fontSize: 9 }}>yıl tecrübe</div></div>
            <div><div style={{ fontSize: 30, fontWeight: 700, color:'var(--gold)' }}>500+</div><div className="lbl" style={{ fontSize: 9 }}>proje</div></div>
            <div><div style={{ fontSize: 30, fontWeight: 700, color:'var(--gold)' }}>48s</div><div className="lbl" style={{ fontSize: 9 }}>hızlı teslim</div></div>
          </div>
        </div>
        {/* Mosaic */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr 1fr', gap: 8, height: 460 }}>
          <SketchImg label="kutu harf" style={{ gridRow:'1/3' }} />
          <SketchImg label="vinil" />
          <SketchImg label="totem" />
          <SketchImg label="led" style={{ gridColumn:'1/3', gridRow:'3' }} />
        </div>
        <div className="arrow" style={{ top: 360, right: -10, width: 110 }}>
          mozaik portföy →<br/>2x3 ızgara
        </div>
      </div>

      {/* Horizontal scroll categories */}
      <div style={{ borderTop: '1.5px dashed var(--rule)', padding: '24px 0 28px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', padding:'0 28px', alignItems:'baseline' }}>
          <div>
            <div style={{ fontFamily:'Cormorant Garamond', fontSize: 26, fontWeight: 700 }}>Kategoriler</div>
            <Line gold w={40} style={{ marginTop: 6 }} />
          </div>
          <div style={{ display:'flex', gap: 8 }}>
            <span style={{ width: 36, height: 36, border:'1.5px solid var(--ink)', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center' }}>←</span>
            <span style={{ width: 36, height: 36, border:'1.5px solid var(--ink)', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center', background:'var(--ink)', color:'var(--paper)' }}>→</span>
          </div>
        </div>
        <div style={{ display:'flex', gap: 14, padding:'18px 28px', overflow:'hidden' }}>
          {CAT_NAMES.map((n,i) => (
            <Box key={n} style={{ minWidth: 220, background:'var(--paper-2)' }}>
              <SketchImg label={n.toUpperCase()} style={{ height: 200, borderLeft: 'none', borderRight:'none', borderTop:'none' }} />
              <div style={{ padding: 14 }}>
                <div className="lbl" style={{ fontSize: 9 }}>0{i+1} · KATEGORİ</div>
                <div style={{ fontFamily:'Cormorant Garamond', fontSize: 22, fontWeight: 700, marginTop: 4 }}>{n}</div>
                <Line thin w="50%" style={{ marginTop: 6 }} />
                <div style={{ marginTop: 12, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span className="lbl" style={{ fontSize: 9 }}>{[11,12,11,11,8][i]} ürün</span>
                  <span style={{ color:'var(--gold)', fontFamily:'Caveat', fontSize: 22 }}>→</span>
                </div>
              </div>
            </Box>
          ))}
        </div>
      </div>

      {/* Süreç şeridi */}
      <div style={{ padding: '24px 28px', background:'var(--paper-2)' }}>
        <div style={{ fontFamily:'Cormorant Garamond', fontSize: 22, fontStyle:'italic', textAlign:'center' }}>
          Nasıl çalışıyoruz
        </div>
        <Line gold w={50} style={{ margin: '8px auto' }} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 14, marginTop: 18, alignItems:'start' }}>
          {[['01','WhatsApp\'tan ulaş'],['02','Teklif & tasarım'],['03','Üretim'],['04','Montaj / Teslim']].map(([n,t]) => (
            <div key={n} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 30, color:'var(--gold)' }}>{n}</div>
              <div style={{ fontFamily:'Cormorant Garamond', fontSize: 16, marginTop: 4 }}>{t}</div>
              <Line thin w={60} style={{ margin: '6px auto' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Müşteri logoları */}
      <div style={{ padding: '24px 28px' }}>
        <div className="lbl" style={{ textAlign:'center' }}>çalıştığımız markalar</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap: 14, marginTop: 14 }}>
          {[0,1,2,3,4,5].map(i => (
            <Box key={i} dashed thin style={{ height: 60, display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:'Architects Daughter', color:'var(--ink-faint)', fontSize: 11 }}>logo</Box>
          ))}
        </div>
      </div>

      <Foot />

      <Ann style={{ position:'absolute', top: 510, left: -170, width: 160, transform:'rotate(-3deg)' }}>
        atölye · ürün odaklı<br/>yatay kaydırma
      </Ann>
    </div>
  );
}
window.HomeC = HomeC;
