import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import Button from '../common/Button';

const CartPage = () => {
  const { cartItems, loading } = useCart();
  const { navigateTo } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="mb-8 fade-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h2>
      
      <div className="bg-white rounded-lg shadow-md">
        {cartItems.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl mb-4">Your cart is empty</p>
            <Button
              onClick={() => navigateTo('products')}
              variant="primary"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
            
            {/* Cart Summary */}
            <CartSummary />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;