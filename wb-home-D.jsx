/* D — DIRECT / BÜYÜK KARTLAR: minimal hero, kategoriler hero gibi */
function HomeD() {
  const W = 960;
  return (
    <div className="wb" style={{ width: W, minHeight: 1600 }}>
      <div className="frame"></div>
      <span className="tag">D · Direkt / Büyük Kartlar</span>

      <TopBar />

      {/* Mini hero — sadece tipografi */}
      <div style={{ padding: '40px 28px 24px', textAlign:'center' }}>
        <Stamp>OSEA · Reklam · Organizasyon</Stamp>
        <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 56, lineHeight: 1.05, marginTop: 14 }}>
          Ne üretelim<br/><em style={{ color:'var(--gold)' }}>sizin için?</em>
        </div>
        <Line gold w={60} style={{ margin: '14px auto' }} />
        <div style={{ fontFamily:'Kalam', fontSize: 15, color:'var(--ink-soft)', maxWidth: 460, margin:'10px auto' }}>
          Aşağıdaki 5 kategoriden ihtiyacınızı seçin · WhatsApp'tan hızlı teklif alın
        </div>
        <Ann style={{ marginTop: 8 }}>↓ navigasyon = sayfanın kendisi</Ann>
      </div>

      {/* 5 büyük kategori kartı — alt + 1 büyük üst */}
      <div style={{ padding: '0 28px' }}>
        {/* Big featured — Tabela */}
        <div style={{ position:'relative', height: 280, marginBottom: 16,
              border:'1.5px solid var(--rule)',
              background:'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 14px), var(--paper-2)',
              overflow:'hidden', display:'flex' }}>
          <div style={{ flex: 1, padding: 32 }}>
            <div className="lbl">01 · EN ÇOK TERCİH EDİLEN</div>
            <Line gold w={40} style={{ marginTop: 6 }} />
            <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 56, marginTop: 10 }}>Tabela</div>
            <div style={{ fontFamily:'Kalam', fontSize: 14, color:'var(--ink-soft)', maxWidth: 320, marginTop: 6 }}>
              Kutu harf, totem, ışıklı, kompozit, LED, fener, vinil… 11 alt kategori.
            </div>
            <div style={{ marginTop: 18, display:'flex', gap: 10 }}>
              <Btn filled>Tabela Ürünleri →</Btn>
              <Btn wa>Teklif Al</Btn>
            </div>
          </div>
          <SketchImg label="HERO · tabela" style={{ width: 340 }} />
        </div>

        {/* 2x2 grid for the other 4 */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16 }}>
          {CAT_NAMES.slice(1).map((n,i) => (
            <div key={n} style={{ position:'relative', height: 200, border:'1.5px solid var(--rule)',
                background:'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 14px), var(--paper-2)',
                display:'flex' }}>
              <div style={{ flex: 1, padding: 18 }}>
                <div className="lbl">0{i+2}</div>
                <div style={{ fontFamily:'Cormorant Garamond', fontWeight: 700, fontSize: 30, marginTop: 4 }}>{n}</div>
                <Line gold w={36} style={{ marginTop: 6 }} />
                <div style={{ fontFamily:'Kalam', fontSize: 12, color:'var(--ink-soft)', marginTop: 10 }}>
                  {[12,11,11,8][i]} alt kategori
                </div>
                <div style={{ marginTop: 14 }}>
                  <Btn>Görüntüle →</Btn>
                </div>
              </div>
              <SketchImg style={{ width: 130 }} />
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp şerit */}
      <div style={{ margin: '28px 28px 0', padding: 22, background:'#1a1a1a', color:'#ece6d6',
            display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20 }}>
        <div>
          <div style={{ fontFamily:'Cormorant Garamond', fontSize: 26, fontStyle:'italic' }}>Aklında bir proje mi var?</div>
          <Line gold w={50} style={{ marginTop: 8 }} />
          <div style={{ fontFamily:'Kalam', fontSize: 13, marginTop: 8, color:'#cfc8b6' }}>
            7/24 WhatsApp · +90 545 125 64 40
          </div>
        </div>
        <Btn wa style={{ fontSize: 16, padding:'12px 22px' }}>Hemen Mesaj At →</Btn>
      </div>

      {/* Mini SSS */}
      <div style={{ padding: '32px 28px' }}>
        <div style={{ fontFamily:'Cormorant Garamond', fontSize: 24, fontWeight: 700 }}>Sık Sorulanlar</div>
        <Line gold w={50} style={{ marginTop: 6 }} />
        <div style={{ marginTop: 16 }}>
          {['Üretim süresi ne kadar?', 'Hangi şehirlere hizmet veriyorsunuz?', 'Tasarım ücreti var mı?'].map(q => (
            <div key={q} style={{ padding: '14px 0', borderBottom: '1px dashed var(--ink-faint)',
                display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span style={{ fontFamily:'Cormorant Garamond', fontSize: 17 }}>{q}</span>
              <span style={{ color:'var(--gold)', fontSize: 22 }}>+</span>
            </div>
          ))}
        </div>
      </div>

      <Foot />

      <Ann style={{ position:'absolute', top: 360, left: -170, width: 160, transform:'rotate(-3deg)' }}>
        direkt · az slider<br/>kategori = içerik
      </Ann>
    </div>
  );
}
window.HomeD = HomeD;
