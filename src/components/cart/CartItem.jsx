import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNotification } from '../../hooks/useNotification';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    const { showNotification } = useNotification();
    const [loading, setLoading] = useState(false);

    const handleQuantityChange = async (newQuantity) => {
        try {
            setLoading(true);
            await updateQuantity(item.productId, newQuantity);
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = async () => {
        try {
            setLoading(true);
            await removeFromCart(item.productId);
            showNotification('Item removed from cart', 'success');
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`p-6 flex items-center justify-between cart-item ${loading ? 'opacity-60' : ''}`}>
            {/* Product Info */}
            <div className="flex items-center space-x-4">
                <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-40 h-40 object-contain mx-auto mb-4"
                />
                <div>
                    <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                    <p className="text-gray-600">${item.product.price}</p>
                    <p className="text-sm text-gray-500">{item.product.description}</p>
                </div>
            </div>

            {/* Quantity Controls and Price */}
            <div className="flex items-center space-x-4">
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handleQuantityChange(item.quantity - 1)}
                        disabled={loading || item.quantity <= 1}
                        className="quantity-btn bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(item.quantity + 1)}
                        disabled={loading || item.quantity >= item.product.stock}
                        className="quantity-btn bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        +
                    </button>
                </div>

                {/* Item Total */}
                <span className="font-semibold w-20 text-right">
                    ${(item.product.price * item.quantity).toFixed(2)}
                </span>

                {/* Remove Button */}
                <button
                    onClick={handleRemove}
                    disabled={loading}
                    className="text-red-500 hover:text-red-700 transition-colors p-2 disabled:opacity-50"
                    title="Remove item"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartItem;