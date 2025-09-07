import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNotification } from '../../hooks/useNotification';
import Button from '../common/Button';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { showNotification } = useNotification();
    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        try {
            setLoading(true);
            await addToCart(product.id);
            showNotification('Item added to cart!', 'success');
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow product-card fade-in">
            <div className="p-6 text-center">
                {/* Product Image/Icon */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-contain mx-auto mb-4"
                />

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Product Rating */}
                {product.rating && (
                    <div className="flex justify-center items-center mb-3">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'
                                        }`}
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                            ({product.rating})
                        </span>
                    </div>
                )}

                {/* Price and Stock */}
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                    </span>
                    <span className="text-sm text-gray-500">
                        Stock: {product.stock}
                    </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                    onClick={handleAddToCart}
                    variant="primary"
                    fullWidth
                    loading={loading}
                    disabled={loading || product.stock === 0}
                >
                    {product.stock === 0 ? 'Out of Stock' :
                        loading ? 'Adding...' : 'Add to Cart'}
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;