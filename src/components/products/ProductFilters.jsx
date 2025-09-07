import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const ProductFilters = ({ filters, onFiltersChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      category: '',
      minPrice: '',
      maxPrice: '',
      search: ''
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            name="category"
            value={localFilters.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="accessories">Accessories</option>
            <option value="tablets">Tablets</option>
            <option value="cameras">Cameras</option>
            <option value="audio">Audio</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>

        {/* Min Price Filter */}
        <div>
          <Input
            label="Min Price"
            type="number"
            name="minPrice"
            value={localFilters.minPrice}
            onChange={handleInputChange}
            placeholder="$0"
          />
        </div>

        {/* Max Price Filter */}
        <div>
          <Input
            label="Max Price"
            type="number"
            name="maxPrice"
            value={localFilters.maxPrice}
            onChange={handleInputChange}
            placeholder="$9999"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-end space-x-2">
          <Button
            onClick={handleApplyFilters}
            variant="primary"
            className="flex-1"
          >
            Apply
          </Button>
          <Button
            onClick={handleResetFilters}
            variant="secondary"
            className="flex-1"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Search Filter */}
      <div className="mt-4">
        <Input
          label="Search Products"
          type="text"
          name="search"
          value={localFilters.search}
          onChange={handleInputChange}
          placeholder="Search by name or description..."
        />
      </div>
    </div>
  );
};

export default ProductFilters;