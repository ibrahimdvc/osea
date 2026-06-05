/* ============ HOME PAGE — A · Klasik Katalog ============ */

const SLIDES = [
  {
    bg: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=1920&q=80',
    eyebrow: 'OSEA · Adana · Reklam',
    headline: ['Markanızın', 'sokaktaki', 'yüzü.'],
    gold: 2,
    sub: 'Tabela, dijital baskı ve matbaa — üretimden montaja kendi atölyemizde.',
    cta: { label: 'Tabela Kategorisi', path: '/kategori/tabela' },
  },
  {
    bg: 'https://images.unsplash.com/photo-1601933513793-fa629c7b1f7e?w=1920&q=80',
    eyebrow: 'Dijital Baskı · Yüksek Çözünürlük',
    headline: ['Renk', 'doğruluğu,', 'hızlı teslimat.'],
    gold: 0,
    sub: 'Folyo, vinil, billboard ve lazer kesim — her boyut, her malzeme.',
    cta: { label: 'Dijital Baskı', path: '/kategori/dijital-baski' },
  },
  {
    bg: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1920&q=80',
    eyebrow: 'Matbaa · Promosyon',
    headline: ['Kâğıttan', 'kurumsal', 'kimliğe.'],
    gold: 1,
    sub: 'Kartvizit, broşür, katalog ve promosyon ürünleri — ince işçilikle.',
    cta: { label: 'Matbaa & Promosyon', path: '/kategori/matbaa' },
  },
  {
    bg: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80',
    eyebrow: 'Web Sitesi · Dijital Varlık',
    headline: ['Dijital', 'dünyadaki', 'adresiniz.'],
    gold: 2,
    sub: 'Kurumsal web sitesi, sosyal medya yönetimi ve reklam danışmanlığı.',
    cta: { label: 'Web Hizmetleri', path: '/kategori/web-sitesi' },
  },
];

const CAT_ICONS = {
  'tabela': (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="4" y="10" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="12" y1="28" x2="10" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="28" y1="28" x2="30" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="8" y1="19" x2="13" y2="19" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="27" y1="19" x2="32" y2="19" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'dijital-baski': (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="6" y="8" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="10" y="17" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1"/>
      <line x1="27" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="27" y1="21" x2="31" y2="21" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="27" y1="24" x2="31" y2="24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="14" y1="34" x2="26" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="30" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'matbaa': (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="8" y="6" width="18" height="24" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="12" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="12" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="12" y1="20" x2="18" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <rect x="14" y="18" width="18" height="16" rx="1.5" fill="var(--bg-1)" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="18" y1="23" x2="28" y2="23" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="18" y1="27" x2="28" y2="27" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="18" y1="31" x2="24" y2="31" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  'promosyon': (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M20 8 L24 16 L34 17.5 L27 24 L28.5 34 L20 29.5 L11.5 34 L13 24 L6 17.5 L16 16 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  'web-sitesi': (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="5" y="8" width="30" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="5" y1="15" x2="35" y2="15" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="9" cy="11.5" r="1.2" fill="currentColor" opacity="0.6"/>
      <circle cx="13" cy="11.5" r="1.2" fill="currentColor" opacity="0.6"/>
      <circle cx="17" cy="11.5" r="1.2" fill="currentColor" opacity="0.6"/>
      <line x1="14" y1="34" x2="26" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="30" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="10" y="19" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1"/>
      <line x1="23" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="23" y1="23" x2="30" y2="23" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="23" y1="26" x2="27" y2="26" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
};

function HeroSlider({ onOpenWA }) {
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animDir, setAnimDir] = useState('next');
  const timerRef = useRef(null);

  const goTo = (idx, dir) => {
    setPrev(cur);
    setAnimDir(dir);
    setCur(idx);
  };

  const next = () => goTo((cur + 1) % SLIDES.length, 'next');
  const back = () => goTo((cur - 1 + SLIDES.length) % SLIDES.length, 'prev');

  useEffect(() => {
    timerRef.current = setInterval(next, 5200);
    return () => clearInterval(timerRef.current);
  }, [cur]);

  const s = SLIDES[cur];

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '80vh',
      minHeight: 520,
      maxHeight: 860,
      overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* BG images */}
      {SLIDES.map((sl, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${sl.bg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'grayscale(0.15) brightness(0.55)',
          opacity: i === cur ? 1 : 0,
          transition: 'opacity 0.85s ease',
          zIndex: 1,
        }} />
      ))}

      {/* gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(105deg, rgba(10,9,8,0.88) 0%, rgba(10,9,8,0.5) 55%, rgba(10,9,8,0.22) 100%)',
      }} />

      {/* Grain */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', mixBlendMode: 'overlay',
        backgroundImage: 'repeating-linear-gradient(0deg,rgba(255,255,255,0.016) 0 1px,transparent 1px 3px)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 4,
        height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '60px 80px',
        maxWidth: 900,
      }}>
        <div key={cur} style={{ animation: 'slideIn 0.7s cubic-bezier(.2,.7,.2,1) both' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{s.eyebrow}</div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond', fontWeight: 500,
            fontSize: 'clamp(56px, 8vw, 110px)',
            lineHeight: 0.95, letterSpacing: '-0.02em',
            margin: 0, color: 'var(--ink)',
          }}>
            {s.headline.map((word, wi) =>
              wi === s.gold
                ? <span key={wi} className="gold-text" style={{ display: 'block', fontStyle: 'italic' }}>{word}</span>
                : <span key={wi} style={{ display: 'block' }}>{word}</span>
            )}
          </h1>
          <span className="hr-gold" style={{ marginTop: 24, marginBottom: 20, display: 'block' }}></span>
          <p style={{ color: 'var(--ink-soft)', fontSize: 16, maxWidth: 500, lineHeight: 1.6, margin: '0 0 28px' }}>
            {s.sub}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn filled" onClick={() => navigate(s.cta.path)}>
              {s.cta.label} <span className="arrow">→</span>
            </button>
            <button className="btn wa" onClick={onOpenWA}>
              <WAIcon size={14} /> WhatsApp Teklif
            </button>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <button onClick={back} style={{
        position: 'absolute', left: 28, top: '50%', transform: 'translateY(-50%)',
        zIndex: 5, background: 'rgba(0,0,0,0.4)', border: '1px solid var(--line-2)',
        color: 'var(--ink-soft)', width: 48, height: 48, cursor: 'pointer',
        fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s',
      }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
         onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line-2)'}>‹</button>

      <button onClick={next} style={{
        position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)',
        zIndex: 5, background: 'rgba(0,0,0,0.4)', border: '1px solid var(--line-2)',
        color: 'var(--ink-soft)', width: 48, height: 48, cursor: 'pointer',
        fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s',
      }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
         onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line-2)'}>›</button>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: 28, right: 80, zIndex: 5,
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i, i > cur ? 'next' : 'prev')} style={{
            width: i === cur ? 32 : 8, height: 4,
            border: 'none', cursor: 'pointer',
            borderRadius: 2,
            background: i === cur ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
            transition: 'all 0.35s ease',
            padding: 0,
          }} />
        ))}
      </div>

      {/* Slide counter */}
      <div style={{
        position: 'absolute', top: 110, right: 80, zIndex: 5,
        fontFamily: 'Cormorant Garamond', fontSize: 13,
        color: 'var(--ink-faint)', letterSpacing: '0.18em',
      }}>
        <span style={{ color: 'var(--gold)', fontSize: 20 }}>0{cur + 1}</span>
        {' / 0'}{SLIDES.length}
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}

function CatCircles() {
  const [hovered, setHovered] = useState(null);
  return (
    <section style={{
      background: 'var(--bg-1)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '72px 0 80px',
      position: 'relative',
    }}>
      {/* top gold accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 80, height: 2, background: 'var(--gold-grad)',
      }} />

      <div className="wrap">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow">Hizmet Kategorileri</div>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(32px,4vw,52px)' }}>
            Ne <em className="gold-text">üretelim?</em>
          </h2>
          <p style={{ color: 'var(--ink-faint)', fontSize: 14, maxWidth: 480, margin: '14px auto 0', lineHeight: 1.6 }}>
            Bir kategoriye tıklayın — alt kategoriler ve ürünler sizi bekliyor.
          </p>
        </div>

        {/* 5 circles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 12,
          alignItems: 'start',
        }}>
          {CATEGORIES.map((c, i) => {
            const isHov = hovered === c.slug;
            return (
              <div key={c.slug}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, cursor: 'pointer' }}
                onClick={() => navigate(`/kategori/${c.slug}`)}
                onMouseEnter={() => setHovered(c.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Outer ring + circle */}
                <div style={{
                  position: 'relative',
                  width: 148, height: 148,
                  borderRadius: '50%',
                  padding: 5,
                  background: isHov
                    ? 'conic-gradient(var(--gold-3), var(--gold), var(--gold-2), var(--gold), var(--gold-3))'
                    : 'transparent',
                  border: isHov ? 'none' : '1.5px solid var(--line-2)',
                  transition: 'all 0.32s ease',
                  transform: isHov ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
                  boxShadow: isHov ? '0 20px 50px -20px rgba(217,183,105,0.45)' : 'none',
                }}>
                  {/* Inner circle with image */}
                  <div style={{
                    width: '100%', height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'var(--bg-2)',
                  }}>
                    {/* Category image */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `url(${c.cover})`,
                      backgroundSize: 'cover', backgroundPosition: 'center',
                      filter: `grayscale(${isHov ? 0 : 0.65}) brightness(${isHov ? 0.75 : 0.5})`,
                      transition: 'filter 0.4s ease',
                    }} />
                    {/* icon overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isHov ? 'var(--gold-3)' : 'rgba(255,255,255,0.55)',
                      transition: 'color 0.32s ease',
                    }}>
                      <div style={{ width: 44, height: 44, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}>
                        {CAT_ICONS[c.slug]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text block */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond', fontStyle: 'italic',
                    fontSize: 12, color: 'var(--gold)', letterSpacing: '0.18em', marginBottom: 5,
                  }}>0{i + 1}</div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond', fontWeight: 700,
                    fontSize: 24, lineHeight: 1.05,
                    color: isHov ? 'var(--gold)' : 'var(--ink)',
                    transition: 'color 0.28s ease',
                  }}>{c.name}</div>
                  <div style={{
                    marginTop: 6, fontSize: 11, letterSpacing: '0.22em',
                    textTransform: 'uppercase', color: 'var(--ink-faint)',
                    lineHeight: 1.4,
                  }}>
                    {c.subs.length} alt kategori
                  </div>
                  <div style={{
                    marginTop: 12,
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: isHov ? 'var(--gold)' : 'transparent',
                    transition: 'color 0.28s ease',
                  }}>
                    Keşfet <span style={{ fontSize: 14 }}>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HomePage({ onOpenWA, onOrder }) {
  const featured = [
    findProduct('p1'), findProduct('p4'), findProduct('p11'), findProduct('p12'),
    findProduct('p8'), findProduct('p15'), findProduct('p18'), findProduct('p19'),
  ].filter(Boolean);

  return (
    <div className="page-enter">
      {/* SLIDER */}
      <HeroSlider onOpenWA={onOpenWA} />

      {/* 5 CIRCULAR CATEGORIES */}
      <CatCircles />

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map(loop => (
            <div className="marquee-item" key={loop}>
              <span>Tabela</span><span className="dot">✦</span>
              <span>Kutu Harf</span><span className="dot">✦</span>
              <span>Dijital Baskı</span><span className="dot">✦</span>
              <span>Kartvizit</span><span className="dot">✦</span>
              <span>Totem</span><span className="dot">✦</span>
              <span>LED Tabela</span><span className="dot">✦</span>
              <span>Promosyon</span><span className="dot">✦</span>
              <span>Web Sitesi</span><span className="dot">✦</span>
              <span>Matbaa</span><span className="dot">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS — 4 col grid */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="title">
              <div className="eyebrow">Öne Çıkan Ürünler</div>
              <h2 style={{ marginTop: 12 }}>
                Atölyeden <em className="gold-text">seçtiklerimiz</em>
              </h2>
            </div>
            <button className="btn ghost" onClick={() => navigate('/kategori/tabela')}>
              Tüm Kategoriler <span className="arrow">→</span>
            </button>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}>
            {featured.slice(0, 8).map(p => (
              <ProductCard key={p.id} product={p} onOrder={onOrder} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="wrap">
          <div className="stats">
            <div className="stat">
              <div className="num">15<span style={{ fontSize: 28, color: 'var(--gold-2)' }}>+</span></div>
              <div className="label">Yıl Tecrübe</div>
            </div>
            <div className="stat">
              <div className="num">500<span style={{ fontSize: 28, color: 'var(--gold-2)' }}>+</span></div>
              <div className="label">Tamamlanan Proje</div>
            </div>
            <div className="stat">
              <div className="num">48<span style={{ fontSize: 28, color: 'var(--gold-2)' }}>s</span></div>
              <div className="label">Hızlı Teslim</div>
            </div>
            <div className="stat">
              <div className="num">5</div>
              <div className="label">Ana Hizmet Alanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="band-dark section">
        <div className="wrap about-block">
          <div className="image" style={{ backgroundImage: `url(${IMG.workshop})` }}></div>
          <div className="text">
            <div className="eyebrow">Hakkımızda</div>
            <h2 style={{ marginTop: 12 }}>
              Adana'da <em className="gold-text">üretim,</em><br />tasarım ve titizlik.
            </h2>
            <p>
              OSEA Reklam & Organizasyon olarak Çukurova bölgesinde, kendi atölyemizde,
              kutu harf tabeladan totem montajına; davetiyeden lüks kartvizite kadar
              geniş bir üretim yelpazesinde hizmet veriyoruz.
            </p>
            <p>
              Her proje bizim için tek; tasarım, üretim ve montajın hiçbir aşamasını
              rastlantıya bırakmıyor; markanızın görünür yüzünü zanaatkâr özenle çiziyoruz.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
              <button className="btn" onClick={() => navigate('/hakkimizda')}>
                Hakkımızda <span className="arrow">→</span>
              </button>
              <button className="btn wa" onClick={onOpenWA}>
                <WAIcon size={14} /> İletişim
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="title">
              <div className="eyebrow">Süreç</div>
              <h2 style={{ marginTop: 12 }}>Nasıl <em className="gold-text">çalışıyoruz?</em></h2>
            </div>
          </div>
          <div className="process">
            {[
              { n: '01', t: 'WhatsApp', d: 'İhtiyacınızı dakikalar içinde bize ulaştırın.' },
              { n: '02', t: 'Teklif & Tasarım', d: 'Detaylı teklif + tasarım önerileri hazırlanır.' },
              { n: '03', t: 'Üretim', d: 'Kendi atölyemizde, malzemenin en iyisiyle.' },
              { n: '04', t: 'Montaj / Teslim', d: 'Yerinde montaj ya da hızlı kargo teslimi.' },
            ].map(s => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <div className="t">{s.t}</div>
                <div className="d">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="divider-fancy" style={{ maxWidth: 200, margin: '0 auto 24px' }}>
          <span>✦</span>
        </div>
        <h2>Projenizi <em className="gold-text">konuşalım.</em></h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 540, margin: '16px auto 32px', fontSize: 15 }}>
          7/24 WhatsApp · {COMPANY.phone} · Çukurova / Adana atölyemizden Türkiye'ye hizmet.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn wa lg" onClick={onOpenWA}>
            <WAIcon /> WhatsApp ile Konuş
          </button>
          <button className="btn ghost lg" onClick={() => navigate('/iletisim')}>
            İletişim Bilgileri
          </button>
        </div>
      </section>
    </div>
  );
}

window.HeroSlider = HeroSlider;
window.CatCircles = CatCircles;
window.HomePage = HomePage;
