/* shared wireframe primitives */

const Box = ({ children, style, dashed, gold, thin, ...rest }) => (
  <div className={['sketch-box', dashed && 'dashed', gold && 'gold', thin && 'thin'].filter(Boolean).join(' ')}
       style={style} {...rest}>{children}</div>
);

const SketchImg = ({ label, style }) => (
  <div className="sketch-img" style={{ position: 'relative', ...style }}>
    <span className="x"></span>
    <span style={{ position:'relative', zIndex:1 }}>{label || 'GÖRSEL'}</span>
  </div>
);

const Btn = ({ children, gold, filled, wa, style }) => (
  <span className={['sketch-btn', gold && 'gold', filled && 'filled', wa && 'wa'].filter(Boolean).join(' ')}
        style={style}>
    {wa && <span style={{ fontSize: 14 }}>◉</span>}
    {children}
  </span>
);

const Line = ({ w = '100%', gold, thin, style }) => (
  <div className={['sketch-line', gold && 'gold', thin && 'thin'].filter(Boolean).join(' ')}
       style={{ width: w, ...style }} />
);

const Stamp = ({ children, color = 'var(--accent)', rotate = -4, style }) => (
  <div style={{
    display: 'inline-block', border: `2px solid ${color}`, color, padding: '4px 10px',
    fontFamily: 'Caveat', fontSize: 18, letterSpacing: 1, textTransform: 'uppercase',
    transform: `rotate(${rotate}deg)`, borderRadius: 3, ...style
  }}>{children}</div>
);

const Ann = ({ children, style }) => (
  <div className="ann" style={style}>{children}</div>
);

const Logo = ({ size = 60, style }) => (
  <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden',
    border: '2px solid var(--gold)', background: '#0a0a0a',
    display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
    <img src="assets/osea-logo.png" alt="OSEA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
);

const TopBar = ({ wide }) => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '14px 28px', borderBottom: '1.5px solid var(--rule)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <Logo size={42} />
      <div>
        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700, fontSize: 22, lineHeight: 1, letterSpacing: 1 }}>OSEA</div>
        <div style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 11, color: 'var(--ink-soft)' }}>Reklam & Organizasyon</div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 16, fontFamily: 'Kalam', fontSize: 13, color: 'var(--ink-soft)' }}>
      {(wide ? ['Anasayfa','Tabela','Dijital Baskı','Promosyon','Matbaa','Web','Hakkımızda','İletişim']
            : ['Anasayfa','Hizmetler','Hakkımızda','İletişim']).map(t => (
        <span key={t}>{t}</span>
      ))}
    </div>
    <Btn wa>WhatsApp</Btn>
  </div>
);

const Foot = () => (
  <div style={{
    borderTop: '1.5px solid var(--rule)', padding: '16px 28px',
    display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 18, fontSize: 11,
    fontFamily: 'Kalam', color: 'var(--ink-soft)'
  }}>
    <div>
      <Logo size={32} />
      <Line thin style={{ marginTop: 8, width: 120 }} />
      <Line thin style={{ marginTop: 4, width: 90 }} />
    </div>
    <div>
      <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700, color: 'var(--ink)' }}>Hizmetler</div>
      <Line thin style={{ marginTop: 6, width: 70 }} />
      <Line thin style={{ marginTop: 4, width: 60 }} />
      <Line thin style={{ marginTop: 4, width: 80 }} />
    </div>
    <div>
      <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700, color: 'var(--ink)' }}>İletişim</div>
      <div style={{ marginTop: 6 }}>+90 545 125 64 40</div>
      <div>Çukurova / Adana</div>
      <div>@oseareklam01</div>
    </div>
    <div>
      <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700, color: 'var(--ink)' }}>Sosyal</div>
      <Line thin style={{ marginTop: 6, width: 70 }} />
      <Line thin style={{ marginTop: 4, width: 60 }} />
    </div>
  </div>
);

const CAT_NAMES = ['Tabela','Dijital Baskı','Matbaa','Promosyon','Web Sitesi'];

Object.assign(window, { Box, SketchImg, Btn, Line, Stamp, Ann, Logo, TopBar, Foot, CAT_NAMES });
