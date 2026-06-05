/* ============ ADMIN — ürün yönetimi (localStorage) ============ */

function AdminPage() {
  const [products, setProducts] = useState(() => getAllProducts());
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blankForm());
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('osea-admin') === '1');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');

  function blankForm() {
    return { id: '', name: '', cat: 'tabela', sub: '', img: '', desc: '', price: '', specs: [['', '']] };
  }

  const refresh = () => setProducts(getAllProducts());

  const onUnlock = (e) => {
    e.preventDefault();
    // demo password — change to real one before publishing
    if (pwd === 'osea2026') {
      sessionStorage.setItem('osea-admin', '1');
      setUnlocked(true);
      setErr('');
    } else {
      setErr('Hatalı şifre');
    }
  };

  const startEdit = (p) => {
    setEditing(p.id);
    setForm({
      id: p.id,
      name: p.name,
      cat: p.cat,
      sub: p.sub,
      img: p.img,
      desc: p.desc,
      price: p.price || '',
      specs: p.specs ? Object.entries(p.specs) : [['', '']],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => { setEditing(null); setForm(blankForm()); };

  const onSave = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.cat || !form.sub) {
      alert('Ürün adı, kategori ve alt kategori zorunlu.');
      return;
    }
    const specsObj = {};
    form.specs.forEach(([k, v]) => { if (k.trim() && v.trim()) specsObj[k.trim()] = v.trim(); });

    const next = {
      id: form.id || ('u' + Date.now()),
      cat: form.cat,
      sub: form.sub,
      name: form.name.trim(),
      desc: form.desc.trim(),
      img: form.img.trim() || 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80',
      price: form.price.trim() || undefined,
      specs: Object.keys(specsObj).length ? specsObj : undefined,
    };

    let all = getAllProducts().slice();
    const idx = all.findIndex(p => p.id === next.id);
    if (idx >= 0) all[idx] = next;
    else all.unshift(next);
    saveProducts(all);
    refresh();
    cancelEdit();
  };

  const onDelete = (id) => {
    if (!confirm('Bu ürün silinsin mi?')) return;
    saveProducts(getAllProducts().filter(p => p.id !== id));
    refresh();
  };

  const onReset = () => {
    if (!confirm('Tüm ürünler fabrika ayarlarına döndürülsün mü? (eklediğiniz ürünler silinir)')) return;
    resetProducts();
    refresh();
  };

  // file → base64 (small)
  const onPickFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (f.size > 600 * 1024) {
      if (!confirm('Görsel 600 KB üzeri. Yine de yüklensin mi? (büyük dosyalar tarayıcı belleğini doldurabilir)')) return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, img: reader.result });
    reader.readAsDataURL(f);
  };

  const updateSpec = (i, idx, val) => {
    const specs = form.specs.slice();
    specs[i] = specs[i].slice();
    specs[i][idx] = val;
    setForm({ ...form, specs });
  };

  const addSpec = () => setForm({ ...form, specs: [...form.specs, ['', '']] });
  const removeSpec = (i) => setForm({ ...form, specs: form.specs.filter((_, idx) => idx !== i) });

  const cat = findCategory(form.cat);

  if (!unlocked) {
    return (
      <div className="page-enter" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
        <form onSubmit={onUnlock} style={{ width: 360, background: 'var(--bg-1)', border: '1px solid var(--line)', padding: 36 }}>
          <div className="eyebrow">Admin Panel</div>
          <h2 style={{ marginTop: 12, fontSize: 36 }}>Giriş</h2>
          <p style={{ color: 'var(--ink-faint)', fontSize: 13, marginTop: 8 }}>
            Bu panel gizli bir URL'dedir. Şifreyi girip ürün yönetebilirsiniz.
          </p>
          <div className="field" style={{ marginTop: 20 }}>
            <label>Şifre</label>
            <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} autoFocus />
          </div>
          {err && <div style={{ color: '#c44a2e', fontSize: 12 }}>{err}</div>}
          <button type="submit" className="btn filled" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
            Giriş Yap
          </button>
          <div style={{ marginTop: 16, fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.06em', textAlign: 'center' }}>
            Demo şifre: <code style={{ color: 'var(--gold)' }}>osea2026</code>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <div className="admin-wrap">
        {/* Form */}
        <form className="admin-form" onSubmit={onSave}>
          <div className="eyebrow">{editing ? 'Düzenle' : 'Yeni Ürün'}</div>
          <h3 style={{ marginTop: 12, fontSize: 26 }}>
            {editing ? 'Ürün düzenle' : 'Ürün ekle'}
          </h3>

          <div className="field" style={{ marginTop: 18 }}>
            <label>Ürün Adı *</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="field">
              <label>Kategori *</label>
              <select value={form.cat} onChange={e => setForm({ ...form, cat: e.target.value, sub: '' })}>
                {CATEGORIES.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Alt Kategori *</label>
              <select value={form.sub} onChange={e => setForm({ ...form, sub: e.target.value })} required>
                <option value="">Seçin...</option>
                {cat?.subs.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label>Açıklama</label>
            <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows={3} />
          </div>

          <div className="field">
            <label>Görsel (URL veya dosya seç)</label>
            <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} placeholder="https://..." />
            <input type="file" accept="image/*" onChange={onPickFile} style={{ marginTop: 6, fontSize: 12, color: 'var(--ink-faint)' }} />
            {form.img && (
              <div style={{ marginTop: 8, width: '100%', aspectRatio: '4/3',
                background: `url(${form.img}) center/cover`, border: '1px solid var(--line)' }}></div>
            )}
          </div>

          <div className="field">
            <label>Fiyat (opsiyonel)</label>
            <input value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="₺ — / cm'den · sipariş üzeri · vb." />
          </div>

          <div className="field">
            <label>Özellikler (Spec)</label>
            {form.specs.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 6, marginBottom: 6 }}>
                <input placeholder="Anahtar (Malzeme)" value={row[0]} onChange={e => updateSpec(i, 0, e.target.value)} />
                <input placeholder="Değer (Pleksi 5mm)" value={row[1]} onChange={e => updateSpec(i, 1, e.target.value)} />
                <button type="button" className="icon-btn danger" onClick={() => removeSpec(i)}>×</button>
              </div>
            ))}
            <button type="button" className="icon-btn" onClick={addSpec} style={{ marginTop: 4 }}>+ Satır</button>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
            <button type="submit" className="btn filled" style={{ flex: 1, justifyContent: 'center' }}>
              {editing ? 'Güncelle' : 'Kaydet'}
            </button>
            {editing && <button type="button" className="btn ghost" onClick={cancelEdit}>İptal</button>}
          </div>
        </form>

        {/* Product list */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 }}>
            <div>
              <div className="eyebrow">Yönetim Paneli</div>
              <h2 style={{ marginTop: 8, fontSize: 36 }}>Tüm Ürünler</h2>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="icon-btn" onClick={() => { sessionStorage.removeItem('osea-admin'); setUnlocked(false); }}>Çıkış</button>
              <button className="icon-btn danger" onClick={onReset}>Fabrika Ayarları</button>
            </div>
          </div>

          <div className="admin-stats">
            <div className="admin-stat"><div className="n">{products.length}</div><div className="l">Toplam Ürün</div></div>
            <div className="admin-stat"><div className="n">{CATEGORIES.length}</div><div className="l">Kategori</div></div>
            <div className="admin-stat"><div className="n">{CATEGORIES.reduce((a,c) => a + c.subs.length, 0)}</div><div className="l">Alt Kategori</div></div>
          </div>

          <div className="admin-list">
            {products.map(p => {
              const c = findCategory(p.cat);
              const s = c?.subs.find(x => x.slug === p.sub);
              return (
                <div key={p.id} className="admin-row">
                  <div className="thumb" style={{ backgroundImage: `url(${p.img})` }}></div>
                  <div className="info">
                    <div className="n" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{p.name}</div>
                    <div className="c">{c?.name} · {s?.name}</div>
                  </div>
                  <div className="act">
                    <button className="icon-btn" onClick={() => navigate(`/urun/${p.id}`)}>Aç</button>
                    <button className="icon-btn" onClick={() => startEdit(p)}>Düzenle</button>
                    <button className="icon-btn danger" onClick={() => onDelete(p.id)}>Sil</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

window.AdminPage = AdminPage;
