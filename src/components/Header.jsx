import { Plus } from 'lucide-react';
import { colors } from '../constants/colors';
import SearchFilter from './SearchFilter';

function Header({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, onPostClick }) {
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
          <button
            onClick={onPostClick}
            className="bg-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition flex items-center gap-2"
            style={{ color: colors.primary }}
          >
            <Plus size={20} />
            Post Item
          </button>
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