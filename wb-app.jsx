/* Mount the canvas with all wireframes */

function App() {
  return (
    <DesignCanvas>
      <DCSection id="home" title="Anasayfa — 4 yön" subtitle="Sketchy wireframe · low-fi · yönü seç, sonra hi-fi'a geçeriz">
        <DCArtboard id="home-a" label="A · Klasik Katalog" width={960} height={1500}><HomeA /></DCArtboard>
        <DCArtboard id="home-b" label="B · Editorial / Galeri" width={960} height={1600}><HomeB /></DCArtboard>
        <DCArtboard id="home-c" label="C · Atölye Mozaik" width={960} height={1600}><HomeC /></DCArtboard>
        <DCArtboard id="home-d" label="D · Direkt / Büyük Kartlar" width={960} height={1600}><HomeD /></DCArtboard>
      </DCSection>

      <DCSection id="flow" title="Sipariş akışı" subtitle="Anasayfa → Kategori → Alt kategori → Ürün → WhatsApp">
        <DCArtboard id="cat" label="1 · Kategori" width={720} height={900}><CategoryPage /></DCArtboard>
        <DCArtboard id="sub" label="2 · Alt kategori" width={720} height={900}><SubcategoryPage /></DCArtboard>
        <DCArtboard id="prod" label="3 · Ürün detay" width={720} height={900}><ProductPage /></DCArtboard>
        <DCArtboard id="wa" label="4 · WhatsApp modal" width={720} height={720}><WAModal /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
