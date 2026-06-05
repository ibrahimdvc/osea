/* B — EDITORIAL / GALERI: full-bleed image hero, sticky side nav, portfolio-led */
function HomeB() {
  const W = 960;
  return (
    <div className="wb" style={{ width: W, minHeight: 1600 }}>
      <div className="frame"></div>
      <span className="tag">B · Editorial / Galeri</span>

      {/* Minimal top bar — logo center, menu icon left, WA right */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 28px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10, fontFamily:'Kalam', fontSize: 13 }}>
          <span style={{ fontSize: 18 }}>≡</span> MENÜ
        </div>
        <Logo size={44} />
        <Btn wa>Sipariş</Btn>
      </div>

      {/* Full-bleed hero image */}
      <div style={{ margin: '0 28px', position:'relative', height: 460,
          background: 'repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 14px), var(--paper-2)',
          border: '1.5px solid var(--rule)', overflow:'hidden' }}>
        <span style={{ position:'absolute', top: 10, left: 10, color: 'var(--ink-faint)', fontFamily:'Architects Daughter', fontSize: 11 }}>FULL-BLEED HERO · tabela üretim atölyesi</span>
        <div style={{ position:'absolute', inset: 0, display:'flex', alignItems:'flex-end', padding: 40 }}>
          <div>
            <Stamp>ESTABLISHED ADANA</Stamp>
            <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 72, lineHeight: 0.95, marginTop: 14,
                color: 'var(--ink)' }}>
              Reklamın<br/><em style={{ color:'var(--gold)' }}>zanaatkâr</em><br/>tarafı.
            </div>
            <Line thin w={260} style={{ marginTop: 16 }} />
            <div style={{ marginTop: 14, display:'flex', gap: 10 }}>
              <Btn filled>Portföy →</Btn>
              <Btn gold>Kategoriler</Btn>
            </div>
          </div>
        </div>
        <div className="arrow" style={{ top: 20, right: -10, width: 130 }}>
          devasa serif<br/>başlık · editorial<br/>hava
        </div>
      </div>

      {/* Sticky category rail + content */}
      <div style={{ display:'grid', gridTemplateColumns: '220px 1fr', gap: 0, marginTop: 28 }}>
        {/* Side rail */}
        <div style={{ borderRight: '1.5px solid var(--rule)', padding: '12px 22px' }}>
          <div className="lbl" style={{ fontSize: 11 }}>kategoriler</div>
          <Line gold w={40} style={{ marginTop: 6 }} />
          {CAT_NAMES.map((n,i) => (
            <div key={n} style={{ padding: '14px 0', borderBottom: '1px dashed var(--ink-faint)',
                display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontFamily:'Cormorant Garamond', fontSize: 22, fontWeight: 700,
                    color: i===0 ? 'var(--gold)' : 'var(--ink)' }}>0{i+1}</div>
                <div style={{ fontFamily:'Cormorant Garamond', fontSize: 16 }}>{n}</div>
              </div>
              <span style={{ color: 'var(--gold)', fontFamily:'Caveat', fontSize: 22 }}>→</span>
            </div>
          ))}
          <Ann style={{ marginTop: 12, fontSize: 14 }}>sticky · scroll'da sabit</Ann>
        </div>

        {/* Editorial content */}
        <div style={{ padding: '12px 28px' }}>
          <div className="lbl" style={{ fontSize: 11 }}>seçilmiş işler · 2026</div>
          <Line gold w={40} style={{ marginTop: 6 }} />
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gridTemplateRows:'auto auto', gap: 12, marginTop: 14 }}>
            <SketchImg label="featured · büyük" style={{ height: 280, gridRow:'1 / span 2' }} />
            <SketchImg style={{ height: 134 }} />
            <SketchImg style={{ height: 134 }} />
          </div>
          <div style={{ marginTop: 18, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
            <div style={{ fontFamily:'Cormorant Garamond', fontStyle:'italic', fontSize: 22 }}>
              "Bir markanın tabelası, onun sokaktaki yüzüdür."
            </div>
            <span className="lbl">— OSEA</span>
          </div>

          {/* Mini products preview */}
          <div style={{ marginTop: 22, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 12 }}>
            {[0,1,2].map(i => (
              <Box key={i} thin style={{ padding: 8 }}>
                <SketchImg style={{ height: 110 }} />
                <div style={{ marginTop: 6, fontFamily:'Cormorant Garamond', fontWeight: 700 }}>Kutu Harf Tabela</div>
                <Line thin w="60%" style={{ marginTop: 4 }} />
                <div style={{ marginTop: 8 }}><Btn wa>WhatsApp</Btn></div>
              </Box>
            ))}
          </div>
        </div>
      </div>

      {/* Hakkımızda strip */}
      <div style={{ margin: '32px 28px 0', padding: 22, background:'#1a1a1a', color:'#ece6d6',
          display:'grid', gridTemplateColumns:'1fr 1fr', gap: 28, alignItems:'center', border:'1.5px solid #000' }}>
        <div>
          <Stamp color="#d9b769" rotate={-2}>HAKKIMIZDA</Stamp>
          <div style={{ fontFamily:'Cormorant Garamond', fontSize: 30, fontStyle:'italic', marginTop: 10, lineHeight: 1.2 }}>
            Adana'da reklam üretimi · 15 yıldır aynı titizlikle.
          </div>
          <Line gold w={60} style={{ marginTop: 10 }} />
          <Line thin w="70%" style={{ marginTop: 10, background:'#ece6d6' }} />
          <Line thin w="60%" style={{ marginTop: 6, background:'#ece6d6' }} />
        </div>
        <SketchImg label="atölye fotoğrafı" style={{ height: 180, background:'#2a2a2a', borderColor:'#555', color:'#888' }} />
      </div>

      <div style={{ height: 28 }} />
      <Foot />

      <Ann style={{ position:'absolute', top: 540, left: -170, width: 160, transform:'rotate(-3deg)' }}>
        editorial · galeri<br/>portföy ön planda
      </Ann>
    </div>
  );
}
window.HomeB = HomeB;
