import { Plus, ShoppingCart } from 'lucide-react';
import { colors } from '../constants/colors';
import SearchFilter from './SearchFilter';

function Header({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, onPostClick, cartItemCount, onCartClick }) {
  return (
    <header 
      className="shadow-lg"
      style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white">Oasis Desert Deals</h1>
            <p className="text-white opacity-90">Student Marketplace</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="bg-white/20 backdrop-blur px-4 py-3 rounded-full font-semibold shadow-lg hover:bg-white/30 transition flex items-center gap-2 text-white relative"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={onPostClick}
              className="bg-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition flex items-center gap-2"
              style={{ color: colors.primary }}
            >
              <Plus size={20} />
              Post Item
            </button>
          </div>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </header>
  );
}

export default Header;