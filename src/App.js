import React, { useState, useEffect } from 'react'; 
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/layout/Layout';
import AuthPage from './components/auth/AuthPage';
import ProductsPage from './components/products/ProductsPage';
import CartPage from './components/cart/CartPage';
import Footer from './components/footer/Footer';
import { useAuth } from './hooks/useAuth';
import './styles/globals.css';
import './styles/components.css';
import './styles/animations.css';

function AppContent() {
  const { user, currentPage } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  
      useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark"); // ✅ for custom CSS
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  
      if (!user) {
          return <AuthPage />;
      }

  const renderCurrentPage = () => {
    if (!user) {
      return <AuthPage />;
    }

    switch (currentPage) {
      case 'products':
        return <ProductsPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <ProductsPage />;
    }
  };

  return (
    <>
    <Layout>
      {renderCurrentPage()}
    </Layout>
    <Footer />
  </>
  );
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <AppContent />
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
      
    </div>
  );
}

export default App;