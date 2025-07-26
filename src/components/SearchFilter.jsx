import { Search } from 'lucide-react';
import { colors } from '../constants/colors';
import { categories } from '../constants/categories';

function SearchFilter({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-1 flex items-center">
        <Search className="ml-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for textbooks, dorm items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 py-2 outline-none"
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className="px-4 py-2 rounded-lg font-medium"
            style={{
              backgroundColor: selectedCategory === category.value ? colors.white : 'transparent',
              color: selectedCategory === category.value ? colors.primary : colors.white,
              border: '2px solid white'
            }}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter;