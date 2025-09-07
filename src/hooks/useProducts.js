import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    search: ''
  });

  const loadProducts = async (currentFilters = filters) => {
    try {
      setLoading(true);
      const filteredProducts = await apiService.getProducts(currentFilters);
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    loadProducts(newFilters);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    loading,
    filters,
    updateFilters,
    loadProducts
  };
};