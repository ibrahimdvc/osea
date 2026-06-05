/* ============ SHARED COMPONENTS ============ */
const { useState, useEffect, useRef, useMemo } = React;

/* ---- Routing helpers ---- */
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const onChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function navigate(path) {
  window.location.hash = path;
  // also scroll top
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 10);
}

function parseRoute(hash) {
  const h = (hash || '#/').replace(/^#/, '');
  const parts = h.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'kategori' && parts[1]) return { name: 'category', cat: parts[1] };
  if (parts[0] === 'alt' && parts[1] && parts[2]) return { name: 'sub', cat: parts[1], sub: parts[2] };
  if (parts[0] === 'urun' && parts[1]) return { name: 'product', id: parts[1] };
  if (parts[0] === 'hakkimizda') return { name: 'about' };
  if (parts[0] === 'iletisim') return { name: 'contact' };
  if (parts[0] === 'admin') return { name: 'admin' };
  return { name: 'home' };
}

/* ---- Brand ---- */
function Brand({ small, footer }) {
  return (
    <div className="brand" onClick={() => navigate('/')}>
      <div className="brand-mark" style={small ? { width: 36, height: 36 } : null}>
        <img src="assets/osea-logo.png" alt="OSEA" />
      </div>
      <div className="brand-text">
        <div className="name" style={small ? { fontSize: 18 } : null}>OSEA</div>
        <div className="sub">{footer ? 'Reklam · Adana' : 'Reklam & Organizasyon'}</div>
      </div>
    </div>
  );
}

/* ---- Header ---- */
function Header({ route, onOpenWA, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { path: '/', label: 'Anasayfa' },
    ...CATEGORIES.map(c => ({ path: `/kategori/${c.slug}`, label: c.name })),
    { path: '/hakkimizda', label: 'Hakkımızda' },
    { path: '/iletisim', label: 'İletişim' },
  ];

  const active = (path) => {
    const cur = window.location.hash.replace(/^#/, '') || '/';
    if (path === '/') return cur === '/';
    return cur.startsWith(path);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Brand />
      <nav className="nav">
        {links.map(l => (
          <a key={l.path} className={`nav-link ${active(l.path) ? 'active' : ''}`}
             onClick={(e) => { e.preventDefault(); navigate(l.path); }}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="header-right">
        <button className="menu-btn" onClick={onOpenMenu}>
          <span>≡</span> Menü
        </button>
        <button className="btn sm wa" onClick={onOpenWA}>
          <WAIcon size={14} /> Sipariş
        </button>
      </div>
    </header>
  );
}

function WAIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2.1-.3 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.5-.5-.7-.5-.2 0-.4 0-.5 0-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.2.4 1.6.5.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3.1 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  );
}

function IGIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MapIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

/* ---- Drawer ---- */
function Drawer({ open, onClose, onOpenWA }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={`drawer ${open ? 'open' : ''}`}>
      <div className="drawer-backdrop" onClick={onClose}></div>
      <div className="drawer-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <Brand small />
          <button className="drawer-close" onClick={onClose}>Kapat</button>
        </div>
        <div className="eyebrow muted">Menü</div>
        <div style={{ borderTop: '1px solid var(--line)', marginTop: 10 }}>
          {[
            { path: '/', label: 'Anasayfa' },
            { path: '/hakkimizda', label: 'Hakkımızda' },
            { path: '/iletisim', label: 'İletişim' },
          ].map(l => (
            <a key={l.path} onClick={(e) => { e.preventDefault(); navigate(l.path); onClose(); }}
               style={{ display: 'block', padding: '16px 0', borderBottom: '1px solid var(--line)',
                 fontFamily: 'Cormorant Garamond', fontSize: 22, color: 'var(--ink)' }}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="eyebrow muted" style={{ marginTop: 28 }}>Kategoriler</div>
        <div style={{ borderTop: '1px solid var(--line)', marginTop: 10 }}>
          {CATEGORIES.map((c, i) => (
            <a key={c.slug} onClick={(e) => { e.preventDefault(); navigate(`/kategori/${c.slug}`); onClose(); }}
               style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                 padding: '14px 0', borderBottom: '1px solid var(--line)', cursor: 'pointer' }}>
              <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 22, color: 'var(--ink)' }}>{c.name}</span>
              <span style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--gold)' }}>0{i + 1}</span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <button className="btn wa" style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => { onClose(); onOpenWA(); }}>
            <WAIcon /> WhatsApp ile Sipariş
          </button>
        </div>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13, color: 'var(--ink-faint)' }}>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><PhoneIcon /> {COMPANY.phone}</span>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><MapIcon /> Çukurova / Adana</span>
          <a href={COMPANY.instagramUrl} target="_blank" rel="noopener" style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--gold)' }}>
            <IGIcon /> @{COMPANY.instagram}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---- FAB WhatsApp ---- */
function FloatingWA({ onClick }) {
  return (
    <button className="fab-wa" aria-label="WhatsApp ile iletişim" onClick={onClick}>
      <WAIcon size={26} color="#fff" />
    </button>
  );
}

/* ---- WhatsApp order modal ---- */
function WAModal({ open, onClose, product }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!open) { setName(''); setPhone(''); setNote(''); }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const subject = product ? `"${product.name}"` : 'hizmetleriniz';

  const message =
    `Merhaba OSEA Reklam,\n` +
    `${subject} hakkında bilgi almak istiyorum.\n\n` +
    (name ? `Ad: ${name}\n` : '') +
    (phone ? `Telefon: ${phone}\n` : '') +
    (note ? `Notum: ${note}\n` : '');

  const onSend = () => {
    window.open(waUrl(message), '_blank');
    onClose();
  };

  return (
    <div className="modal-back" onClick={(e) => { if (e.target.classList.contains('modal-back')) onClose(); }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="eyebrow" style={{ color: 'var(--wa)' }}>WhatsApp · Sipariş</div>
        <h3 style={{ marginTop: 10, fontSize: 32 }}>Mesajınızı hazırlıyoruz</h3>
        <p style={{ fontSize: 13, color: 'var(--ink-faint)', margin: '6px 0 0' }}>
          Aşağıdaki bilgileri doldurun, hazır mesajla WhatsApp'a yönlendireceğiz.
        </p>

        <div className="field" style={{ marginTop: 20 }}>
          <label>Adınız Soyadınız</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Adınız" />
        </div>
        <div className="field">
          <label>Telefon (opsiyonel)</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+90 ..." />
        </div>
        <div className="field">
          <label>Notunuz</label>
          <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Adet, ölçü, teslim tarihi, özel istekler..." />
        </div>

        <div className="eyebrow muted" style={{ marginTop: 14 }}>Önizleme</div>
        <div className="preview-msg">{message}</div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
          <button className="btn ghost" onClick={onClose}>İptal</button>
          <button className="btn wa" onClick={onSend}>
            <WAIcon /> WhatsApp'ı Aç
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- Footer ---- */
function Footer() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div className="brand-block">
          <Brand footer />
          <p className="blurb">
            Adana'da reklam üretimi · 15 yıldır aynı titizlikle. Tabela, dijital baskı,
            matbaa ve promosyon hizmetlerinde güvenilir adres.
          </p>
        </div>
        <div>
          <h4>Hizmetler</h4>
          <ul>
            {CATEGORIES.map(c => (
              <li key={c.slug} onClick={() => navigate(`/kategori/${c.slug}`)}>{c.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Kurumsal</h4>
          <ul>
            <li onClick={() => navigate('/hakkimizda')}>Hakkımızda</li>
            <li onClick={() => navigate('/iletisim')}>İletişim</li>
            <li><a href={COMPANY.instagramUrl} target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4>İletişim</h4>
          <ul>
            <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <MapIcon /> <span>{COMPANY.address}</span>
            </li>
            <li style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--gold)' }}>
              <PhoneIcon /> {COMPANY.phone}
            </li>
            <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <IGIcon /> @{COMPANY.instagram}
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} OSEA Reklam & Organizasyon · Tüm hakları saklıdır.</span>
        <span>Adana · Türkiye</span>
      </div>
    </footer>
  );
}

/* ---- Product card ---- */
function ProductCard({ product, onOrder }) {
  return (
    <article className="product-card" onClick={() => navigate(`/urun/${product.id}`)}>
      <div className="img" style={{ backgroundImage: `url(${product.img})` }}></div>
      <div className="body">
        <div className="meta">
          <span className="eyebrow">{findCategory(product.cat)?.name}</span>
        </div>
        <h3 className="name">{product.name}</h3>
        <p className="desc">{product.desc}</p>
        <div className="row">
          <span className="detail-link">Detay <span>→</span></span>
          <button className="btn sm wa" onClick={(e) => { e.stopPropagation(); onOrder(product); }}>
            <WAIcon size={12} /> Sipariş
          </button>
        </div>
      </div>
    </article>
  );
}

/* ---- Breadcrumb ---- */
function Crumb({ items }) {
  return (
    <div className="crumb">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {it.path
            ? <a onClick={() => navigate(it.path)}>{it.label}</a>
            : <span className="now">{it.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

Object.assign(window, {
  useHashRoute, navigate, parseRoute,
  Header, Footer, Drawer, FloatingWA, WAModal, Brand,
  WAIcon, IGIcon, PhoneIcon, MapIcon,
  ProductCard, Crumb,
});
