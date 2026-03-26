import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';

export const CartDrawer = () => {
  const { state, closeCart, updateQuantity, removeItem, totalPrice } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">Shopping Cart</h2>
          </div>
          <button onClick={closeCart} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {state.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-center mb-6">Your cart is empty</p>
            <Link to="/products" onClick={closeCart} className="btn btn-primary">Browse Products</Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {state.items.map(item => (
                <div key={item.product.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 truncate">{item.product.name}</h4>
                        <span className="text-xs text-gray-500">{item.product.brand}</span>
                      </div>
                      <button onClick={() => removeItem(item.product.id)} className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-primary transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-primary transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-primary">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-2xl font-bold text-gray-900">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
              <Link to="/checkout" onClick={closeCart} className="btn btn-accent w-full py-4 text-lg">Proceed to Checkout</Link>
              <button onClick={closeCart} className="btn btn-ghost w-full">Continue Shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
