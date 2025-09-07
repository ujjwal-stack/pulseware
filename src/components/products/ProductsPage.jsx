import React from 'react';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import { useProducts } from '../../hooks/useProducts';

const ProductsPage = () => {
  const { products, loading, filters, updateFilters } = useProducts();

  return (
    <div className="fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
        
        <ProductFilters
          filters={filters}
          onFiltersChange={updateFilters}
        />
        
        <ProductGrid
          products={products}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ProductsPage;