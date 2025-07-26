import { Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { colors } from '../constants/colors';

function ShoppingCartPage({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout, onBack, getTotalPrice }) {
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen p-8" style={{ backgroundColor: colors.background }}>
        <button onClick={onBack} className="flex items-center gap-2 mb-8">
          <ArrowLeft size={20} />
          Back to Marketplace
        </button>
        <div className="text-center">
          <ShoppingCart size={48} className="mx-auto mb-4" style={{ color: colors.lightText }} />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p>Browse the marketplace and add items to your cart</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: colors.background }}>
      <button onClick={onBack} className="flex items-center gap-2 mb-8">
        <ArrowLeft size={20} />
        Back to Marketplace
      </button>

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="bg-white rounded p-6 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-4 border-b">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />
            
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">Seller: {item.seller_name}</p>
              <p className="text-sm text-gray-600">{item.location}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="w-8 h-8 border rounded"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 border rounded"
              >
                +
              </button>
            </div>

            <div className="text-right min-w-[80px]">
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <p className="text-sm text-gray-600">${item.price} each</p>
            </div>

            <button
              onClick={() => onRemoveItem(item.id)}
              className="p-2 text-red-500"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded p-6">
        <div className="flex justify-between mb-4">
          <span className="text-xl">Total:</span>
          <span className="text-2xl font-bold">${getTotalPrice().toFixed(2)}</span>
        </div>
        
        <button
          onClick={onCheckout}
          className="w-full py-3 rounded text-white"
          style={{ backgroundColor: colors.primary }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;