import React from 'react';
import { Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { colors } from '../constants/colors';

function ShoppingCartPage({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout, onBack, getTotalPrice }) {
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            Back to Marketplace
          </button>
          
          <div className="text-center py-16">
            <div 
              className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.secondary }}
            >
              <ShoppingCart size={48} style={{ color: colors.white }} />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>
              Your cart is empty
            </h2>
            <p style={{ color: colors.lightText }}>
              Browse the marketplace and add items to your cart
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} />
          Back to Marketplace
        </button>

        <h1 className="text-3xl font-bold mb-8" style={{ color: colors.text }}>
          Shopping Cart
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-4 border-b last:border-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg" style={{ color: colors.text }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: colors.lightText }}>
                  Seller: {item.seller_name}
                </p>
                <p className="text-sm" style={{ color: colors.lightText }}>
                  {item.location}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-gray-50"
                    style={{ borderColor: colors.gray }}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-gray-50"
                    style={{ borderColor: colors.gray }}
                  >
                    +
                  </button>
                </div>

                <div className="text-right min-w-[80px]">
                  <p className="font-bold" style={{ color: colors.primary }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm" style={{ color: colors.lightText }}>
                    ${item.price} each
                  </p>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold" style={{ color: colors.text }}>
              Total:
            </span>
            <span className="text-2xl font-bold" style={{ color: colors.primary }}>
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          
          <button
            onClick={onCheckout}
            className="w-full py-3 rounded-lg font-semibold text-white hover:scale-101 transition"
            style={{ backgroundColor: colors.primary }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;