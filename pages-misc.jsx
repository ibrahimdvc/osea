/* ============ ABOUT + CONTACT ============ */

function AboutPage({ onOpenWA }) {
  return (
    <div className="page-enter">
      <header className="page-head">
        <div className="wrap">
          <Crumb items={[{ label: 'Anasayfa', path: '/' }, { label: 'Hakkımızda' }]} />
          <div className="eyebrow">Hakkımızda</div>
          <h1>Adana'da <em className="gold-text">üretim,</em><br/>tasarım ve titizlik.</h1>
          <p className="lede">
            OSEA Reklam & Organizasyon — Çukurova'da kendi atölyemizde, 15 yıldır markaların
            sokaktaki yüzünü çiziyor, detaylarda kalan tüm ürünleri ekibimizle üretiyoruz.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap about-block">
          <div className="image" style={{ backgroundImage: `url(${IMG.workshop})` }}></div>
          <div className="text">
            <div className="eyebrow">Hikâyemiz</div>
            <h2 style={{ marginTop: 12, fontSize: 'clamp(28px,4vw,48px)' }}>Bir tabela, bin <em className="gold-text">karar</em></h2>
            <p>
              Her tabela — yazı tipinden derinliğine, LED renginden montaj açısına kadar —
              binlerce küçük karardan oluşur. OSEA'da bu kararları sizinle birlikte alıyor;
              tasarım, üretim ve montajın hiçbir aşamasını rastlantıya bırakmıyoruz.
            </p>
            <p>
              Adana ve Çukurova bölgesinde KOBİ'lerden büyük markalara kadar geniş bir
              müşteri portföyüne hizmet veriyor; tabelanın yanında matbaa, dijital baskı,
              promosyon ve dijital hizmetlerimizle 360° reklam çözümü sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="band-dark section">
        <div className="wrap">
          <div className="section-head">
            <div className="title">
              <div className="eyebrow">Değerlerimiz</div>
              <h2 style={{ marginTop: 12 }}>Bizi <em className="gold-text">biz yapan</em></h2>
            </div>
          </div>
          <div className="process">
            {[
              { n: '✦', t: 'Zanaat', d: 'Üretimin her aşamasında, makinaya bırakmadan, ekibimizin elinden geçiyor.' },
              { n: '✦', t: 'Hız', d: 'Acil işlerde 48 saat içinde teslim — kalite ödün vermeden.' },
              { n: '✦', t: 'Şeffaflık', d: 'Teklif öncesi, sırası, sonrası — her detay açıkça konuşulur.' },
              { n: '✦', t: 'Garanti', d: 'Tabela ve baskılarımızda malzeme ve işçilik garantisi standarttır.' },
            ].map(v => (
              <div className="step" key={v.t}>
                <div className="n" style={{ fontSize: 20 }}>{v.n}</div>
                <div className="t">{v.t}</div>
                <div className="d">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="wrap">
          <div className="stats">
            <div className="stat"><div className="num">15<span style={{ fontSize: 28, color: 'var(--gold-2)' }}>+</span></div><div className="label">Yıl Tecrübe</div></div>
            <div className="stat"><div className="num">500<span style={{ fontSize: 28, color: 'var(--gold-2)' }}>+</span></div><div className="label">Tamamlanan Proje</div></div>
            <div className="stat"><div className="num">5</div><div className="label">Ana Hizmet Alanı</div></div>
            <div className="stat"><div className="num">48<span style={{ fontSize: 28, color: 'var(--gold-2)' }}>s</span></div><div className="label">Hızlı Teslim</div></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Bir projeyi <em className="gold-text">birlikte yapalım.</em></h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 540, margin: '16px auto 28px' }}>
          Hayalinizdeki tabela, davetiye ya da ofis kataloğu — fark etmez. Konuşalım.
        </p>
        <button className="btn wa lg" onClick={onOpenWA}>
          <WAIcon /> WhatsApp ile Konuş
        </button>
      </section>
    </div>
  );
}

function ContactPage({ onOpenWA }) {
  const mapQ = encodeURIComponent(COMPANY.address);
  return (
    <div className="page-enter">
      <header className="page-head">
        <div className="wrap">
          <Crumb items={[{ label: 'Anasayfa', path: '/' }, { label: 'İletişim' }]} />
          <div className="eyebrow">İletişim</div>
          <h1>Bize <em className="gold-text">ulaşın.</em></h1>
          <p className="lede">
            Atölyemiz Çukurova / Adana'da. WhatsApp ile dakikalar içinde, telefon ile mesai
            saatlerinde, ya da Instagram'dan mesajla — tercih sizin.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 80 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div className="eyebrow">Adres</div>
            <h3 style={{ marginTop: 12, fontSize: 28 }}>Atölye & Showroom</h3>
            <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 16, lineHeight: 1.7 }}>
              {COMPANY.address}
            </p>

            <div className="eyebrow" style={{ marginTop: 36 }}>İletişim</div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={waUrl('Merhaba OSEA, bilgi almak istiyorum.')} target="_blank" rel="noopener"
                 style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', border: '1px solid var(--line)', color: 'var(--ink)' }}>
                <span style={{ color: 'var(--wa)' }}><WAIcon size={22} /></span>
                <span>
                  <div className="eyebrow" style={{ color: 'var(--wa)', fontSize: 10 }}>WhatsApp</div>
                  <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: 'var(--ink)' }}>{COMPANY.phone}</div>
                </span>
              </a>
              <a href={`tel:${WA_NUMBER}`}
                 style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', border: '1px solid var(--line)', color: 'var(--ink)' }}>
                <span style={{ color: 'var(--gold)' }}><PhoneIcon size={22} /></span>
                <span>
                  <div className="eyebrow" style={{ fontSize: 10 }}>Telefon</div>
                  <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: 'var(--ink)' }}>{COMPANY.phone}</div>
                </span>
              </a>
              <a href={COMPANY.instagramUrl} target="_blank" rel="noopener"
                 style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', border: '1px solid var(--line)', color: 'var(--ink)' }}>
                <span style={{ color: 'var(--gold)' }}><IGIcon size={22} /></span>
                <span>
                  <div className="eyebrow" style={{ fontSize: 10 }}>Instagram</div>
                  <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: 'var(--ink)' }}>@{COMPANY.instagram}</div>
                </span>
              </a>
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 10 }}>
              <button className="btn wa" onClick={onOpenWA}>
                <WAIcon /> Hızlı Mesaj
              </button>
            </div>
          </div>

          <div>
            <div className="eyebrow">Konum</div>
            <h3 style={{ marginTop: 12, fontSize: 28 }}>Çukurova / Adana</h3>
            <div style={{ marginTop: 16, position: 'relative', aspectRatio: '4/5', border: '1px solid var(--line)', overflow: 'hidden' }}>
              <iframe
                title="OSEA Konum"
                src={`https://maps.google.com/maps?q=${mapQ}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(0.6) invert(0.92) hue-rotate(180deg)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* hours */}
      <section className="band-dark section">
        <div className="wrap">
          <div className="section-head">
            <div className="title">
              <div className="eyebrow">Çalışma Saatleri</div>
              <h2 style={{ marginTop: 12, fontSize: 'clamp(28px,4vw,48px)' }}>Atölyemiz <em className="gold-text">açık</em></h2>
            </div>
            <div className="lede">WhatsApp 7/24 mesajlarınızı toplar — telefonu mesai saatlerinde açıyoruz.</div>
          </div>
          <div className="stats">
            <div className="stat"><div className="num" style={{ fontSize: 36 }}>Pzt-Cum</div><div className="label">09:00 — 19:00</div></div>
            <div className="stat"><div className="num" style={{ fontSize: 36 }}>Cumartesi</div><div className="label">10:00 — 17:00</div></div>
            <div className="stat"><div className="num" style={{ fontSize: 36 }}>Pazar</div><div className="label">Yalnızca WhatsApp</div></div>
            <div className="stat"><div className="num" style={{ fontSize: 36 }}>WhatsApp</div><div className="label">7/24 Aktif</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage, ContactPage });
