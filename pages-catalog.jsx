/* ============ CATALOG PAGES ============ */

function CategoryPage({ catSlug, onOrder }) {
  const cat = findCategory(catSlug);
  if (!cat) return <NotFound />;
  const idx = CATEGORIES.indexOf(cat);

  return (
    <div className="page-enter">
      <header className="page-head">
        <div className="wrap">
          <Crumb items={[
            { label: 'Anasayfa', path: '/' },
            { label: cat.name },
          ]} />
          <div className="cat-page-header-inner">
            <div style={{ maxWidth: 720 }}>
              <div className="eyebrow">Kategori · 0{idx + 1} / 0{CATEGORIES.length}</div>
              <h1>{cat.name}</h1>
              <p className="lede">{cat.description}</p>
            </div>
            <div className="cat-count" style={{ textAlign: 'right' }}>
              <div className="eyebrow muted">Alt Kategori</div>
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 56, color: 'var(--gold)', lineHeight: 1 }}>
                {cat.subs.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sub grid */}
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="title">
              <div className="eyebrow">Alt Kategoriler</div>
              <h2 style={{ marginTop: 12, fontSize: 'clamp(28px,4vw,48px)' }}>
                <em className="gold-text">{cat.tagline}</em>
              </h2>
            </div>
          </div>
          <div className="sub-grid">
            {cat.subs.map((s, i) => {
              const count = productsFor(cat.slug, s.slug).length;
              return (
                <div key={s.slug} className="sub-tile" onClick={() => navigate(`/alt/${cat.slug}/${s.slug}`)}>
                  <div className="img" style={{ backgroundImage: `url(${s.cover})` }}></div>
                  <div className="ov">
                    <div className="num">— 0{i + 1}</div>
                    <h3>{s.name}</h3>
                    <div className="count">
                      <span>{count > 0 ? `${count} ürün` : 'Teklif alın'}</span>
                      <span className="gold-text">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-band">
        <h2 style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
          Aradığınız ürün <em className="gold-text">listede yok mu?</em>
        </h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 540, margin: '16px auto 28px' }}>
          Özel üretim talepleriniz için WhatsApp'tan ulaşın — atölyemizden cevap dakikalar içinde.
        </p>
        <button className="btn wa lg" onClick={() => onOrder(null)}>
          <WAIcon /> Özel Üretim Teklifi
        </button>
      </section>
    </div>
  );
}

function SubcategoryPage({ catSlug, subSlug, onOrder }) {
  const cat = findCategory(catSlug);
  const sub = findSub(catSlug, subSlug);
  if (!cat || !sub) return <NotFound />;
  const products = productsFor(catSlug, subSlug);

  return (
    <div className="page-enter">
      <header className="page-head">
        <div className="wrap">
          <Crumb items={[
            { label: 'Anasayfa', path: '/' },
            { label: cat.name, path: `/kategori/${cat.slug}` },
            { label: sub.name },
          ]} />
          <div className="sub-header-grid">
            <div>
              <div className="eyebrow">{cat.name}</div>
              <h1>{sub.name}</h1>
              <p className="lede">
                {sub.name} kategorisindeki ürünlerimiz. Tasarım, üretim ve teslimat
                ekibimizden — kişiselleştirilmiş çözümler için WhatsApp'a yazın.
              </p>
            </div>
            <div className="sub-tile sub-tile-preview" style={{ aspectRatio: '4/3' }}>
              <div className="img" style={{ backgroundImage: `url(${sub.cover})` }}></div>
              <div className="ov" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85))' }}>
                <span className="eyebrow">{sub.name.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 80 }}>
        <div className="wrap">
          {products.length === 0 ? (
            <div className="empty">
              <h3>Bu kategori için henüz ürün eklenmedi.</h3>
              <p>Aradığınız ürün için WhatsApp'tan doğrudan teklif alabilirsiniz.</p>
              <div style={{ marginTop: 24 }}>
                <button className="btn wa" onClick={() => onOrder(null)}>
                  <WAIcon /> WhatsApp ile İletişim
                </button>
              </div>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
                <div className="eyebrow">{products.length} ürün listeleniyor</div>
                <div className="eyebrow muted">Online satış yok · WhatsApp sipariş</div>
              </div>
              <div className="products-grid">
                {products.map(p => (
                  <ProductCard key={p.id} product={p} onOrder={onOrder} />
                ))}
              </div>
            </>
          )}

          {/* Other subs in this cat */}
          <div style={{ marginTop: 100, paddingTop: 60, borderTop: '1px solid var(--line)' }}>
            <div className="eyebrow">{cat.name} · Diğer Alt Kategoriler</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
              {cat.subs.filter(s => s.slug !== subSlug).map(s => (
                <a key={s.slug} className="btn ghost sm" onClick={() => navigate(`/alt/${cat.slug}/${s.slug}`)}>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductPage({ productId, onOrder }) {
  const product = findProduct(productId);
  if (!product) return <NotFound />;
  const cat = findCategory(product.cat);
  const sub = cat?.subs.find(s => s.slug === product.sub);
  const [activeImg, setActiveImg] = useState(0);
  const related = useMemo(() =>
    getAllProducts().filter(p => p.id !== product.id && (p.sub === product.sub || p.cat === product.cat)).slice(0, 4),
    [product.id]
  );

  // For demo, we'll use same image as thumbs
  const images = [product.img, product.img, product.img, product.img];

  return (
    <div className="page-enter">
      <header className="page-head" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <Crumb items={[
            { label: cat?.name, path: `/kategori/${cat.slug}` },
            { label: sub?.name, path: `/alt/${cat.slug}/${sub.slug}` },
            { label: product.name },
          ]} />
        </div>
      </header>

      <section className="product-detail-wrap">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="product-detail">
            {/* Gallery */}
            <div className="gallery">
              <div className="main" style={{ backgroundImage: `url(${images[activeImg]})` }}></div>
              <div className="thumbs">
                {images.map((src, i) => (
                  <div key={i}
                       className={`thumb ${i === activeImg ? 'active' : ''}`}
                       style={{ backgroundImage: `url(${src})` }}
                       onClick={() => setActiveImg(i)}></div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="eyebrow">{cat.name} · {sub.name}</div>
              <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', marginTop: 14, lineHeight: 1.0 }}>{product.name}</h1>
              <span className="hr-gold" style={{ marginTop: 18 }}></span>
              <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.65 }}>{product.desc}</p>

              {product.specs && (
                <dl className="specs">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <React.Fragment key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              )}

              {product.price && (
                <div className="price-block">
                  <div className="label">Fiyat</div>
                  <div className="val">{product.price}</div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
                <button className="btn wa lg" onClick={() => onOrder(product)}>
                  <WAIcon /> WhatsApp ile Sipariş Ver
                </button>
                <a className="btn ghost" href={waUrl(`Merhaba, "${product.name}" için tasarım dosyamı paylaşmak istiyorum.`)} target="_blank" rel="noopener">
                  Tasarımımı Gönder <span className="arrow">↗</span>
                </a>
              </div>


            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section band-dark" style={{ paddingTop: 80, paddingBottom: 100 }}>
          <div className="wrap">
            <div className="section-head">
              <div className="title">
                <div className="eyebrow">Benzer Ürünler</div>
                <h2 style={{ marginTop: 12, fontSize: 'clamp(28px,4vw,48px)' }}>
                  Bu kategoride <em className="gold-text">başkaları</em>
                </h2>
              </div>
            </div>
            <div className="products-grid">
              {related.map(p => (
                <ProductCard key={p.id} product={p} onOrder={onOrder} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function NotFound() {
  return (
    <div className="page-enter" style={{ padding: '180px 24px 100px', textAlign: 'center' }}>
      <div className="eyebrow">404</div>
      <h1 style={{ marginTop: 16, fontSize: 'clamp(48px,8vw,120px)' }}>Sayfa <em className="gold-text">bulunamadı</em></h1>
      <p style={{ color: 'var(--ink-soft)', maxWidth: 480, margin: '20px auto 32px' }}>
        Aradığınız sayfa kaldırılmış ya da hiç var olmamış olabilir.
      </p>
      <button className="btn filled" onClick={() => navigate('/')}>Anasayfaya Dön</button>
    </div>
  );
}

Object.assign(window, { CategoryPage, SubcategoryPage, ProductPage, NotFound });
