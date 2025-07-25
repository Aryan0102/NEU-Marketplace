import React from 'react';
import { Search } from 'lucide-react';
import { colors } from '../constants/colors';
import { categories } from '../constants/categories';

function SearchFilter({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-full shadow-lg p-1 flex items-center">
        <Search className="ml-4 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for textbooks, dorm items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-3 outline-none rounded-full"
        />
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className="px-5 py-2 rounded-full font-medium hover:scale-105 transition"
            style={{
              backgroundColor: selectedCategory === category.value ? colors.white : 'rgba(255,255,255,0.3)',
              color: selectedCategory === category.value ? colors.primary : colors.white,
              border: `2px solid ${selectedCategory === category.value ? colors.white : 'transparent'}`
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