import { Plus, ShoppingCart, User, LogOut } from 'lucide-react';
import { colors } from '../constants/colors';
import SearchFilter from './SearchFilter';
import { useAuth } from '../contexts/AuthContext';

function Header({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, onPostClick, cartItemCount, onCartClick, onAuthClick }) {
  const { user, signOut } = useAuth();
  return (
    <header 
      className="shadow-lg"
      style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-white">Oasis Desert Deals</h1>
            <p className="text-white">Student Marketplace</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={onCartClick}
              className="bg-white/20 px-4 py-2 rounded-lg font-semibold text-white flex items-center gap-2"
            >
              <ShoppingCart size={20} />
              Cart ({cartItemCount})
            </button>
            {user ? (
              <>
                <button
                  onClick={onPostClick}
                  className="bg-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                  style={{ color: colors.primary }}
                >
                  <Plus size={20} />
                  Post Item
                </button>
                <div className="flex items-center gap-2 text-white">
                  <User size={20} />
                  <span className="text-sm">{user.email}</span>
                  <button
                    onClick={signOut}
                    className="bg-white/20 px-3 py-1 rounded-lg text-sm flex items-center gap-1 hover:bg-white/30"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                style={{ color: colors.primary }}
              >
                <User size={20} />
                Sign In
              </button>
            )}
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