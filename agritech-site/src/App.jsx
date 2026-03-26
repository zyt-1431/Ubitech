import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { AuthModal } from './components/common/AuthModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { NewsPage } from './pages/NewsPage';
import { DealerPage } from './pages/DealerPage';
import { ContactPage } from './pages/ContactPage';
import { AccountPage } from './pages/AccountPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsPage />} />
              <Route path="/dealer" element={<DealerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
          <AuthModal />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
