import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNotification } from '../../hooks/useNotification';
import Button from '../common/Button';

const CartSummary = () => {
  const { getCartTotal, clearCart } = useCart();
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const total = getCartTotal();
  const tax = total * 0.08; // 8% tax
  const shipping = total > 100 ? 0 : 10; // Free shipping over $100
  const finalTotal = total + tax + shipping;

  const handleCheckout = async () => {
    try {
      setLoading(true);
      // Simulate checkout process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      clearCart();
      showNotification('Order placed successfully! Thank you for your purchase.', 'success');
    } catch (error) {
      showNotification('Checkout failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-b-lg">
      {/* Order Summary */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax (8%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping:</span>
          <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        {total > 0 && total < 100 && (
          <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
            💡 Add ${(100 - total).toFixed(2)} more for free shipping!
          </div>
        )}
        
        <hr className="border-gray-300" />
        
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total:</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        variant="success"
        fullWidth
        loading={loading}
        disabled={loading || total === 0}
        className="font-semibold py-3"
      >
        {loading ? 'Processing...' : 'Proceed to Checkout'}
      </Button>
      
      {/* Security Info */}
      <div className="flex items-center justify-center mt-3 text-sm text-gray-500">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Secure checkout
      </div>
    </div>
  );
};

export default CartSummary;