import { Search } from 'lucide-react';
import { colors } from '../constants/colors';
import { categories } from '../data/mockData';

// Search bar and category filter buttons
function SearchFilter({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6">
            {/* Search input */}
            <div className=" mb-4">
                <input
                    type="text"
                    placeholder="Search for items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-xl"
                    style={{ borderColor: colors.tan }}
                />
            </div>

            {/* Category buttons */}
            <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                    <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className="px-4 py-2 rounded-full font-medium transition-all hover:scale-105"
                        style={{
                            backgroundColor: selectedCategory === category.value ? colors.green : colors.tan,
                            color: selectedCategory === category.value ? 'white' : colors.green
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