/* ============ APP — router + mount ============ */

function App() {
  const hash = useHashRoute();
  const route = parseRoute(hash);
  const [waOpen, setWaOpen] = useState(false);
  const [waProduct, setWaProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openWA = () => { setWaProduct(null); setWaOpen(true); };
  const openOrder = (product) => { setWaProduct(product); setWaOpen(true); };

  // close drawer on route change
  useEffect(() => { setDrawerOpen(false); }, [hash]);

  const renderPage = () => {
    switch (route.name) {
      case 'home':
        return <HomePage onOpenWA={openWA} onOrder={openOrder} />;
      case 'category':
        return <CategoryPage catSlug={route.cat} onOrder={openOrder} />;
      case 'sub':
        return <SubcategoryPage catSlug={route.cat} subSlug={route.sub} onOrder={openOrder} />;
      case 'product':
        return <ProductPage productId={route.id} onOrder={openOrder} />;
      case 'about':
        return <AboutPage onOpenWA={openWA} />;
      case 'contact':
        return <ContactPage onOpenWA={openWA} />;
      case 'admin':
        return <AdminPage />;
      default:
        return <NotFound />;
    }
  };

  return (
    <>
      <Header
        route={route}
        onOpenWA={openWA}
        onOpenMenu={() => setDrawerOpen(true)}
      />

      <main key={hash}>
        {renderPage()}
      </main>

      <Footer />

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenWA={openWA}
      />

      <WAModal
        open={waOpen}
        onClose={() => setWaOpen(false)}
        product={waProduct}
      />

      <FloatingWA onClick={openWA} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
