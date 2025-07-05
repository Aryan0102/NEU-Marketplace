import { Plus } from 'lucide-react';
import { colors } from '../constants/colors';
import SearchFilter from './SearchFilter';

// Header component with title and "Post Item" button
function Header({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, onPostClick }) {
    return (
        <div>
            {/* Main header content */}
            <header className="relative px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Title and Post button */}
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-bold" style={{ color: colors.green }}>
                            Desert Deals
                        </h1>
                        <button
                            onClick={onPostClick}
                            className="px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                            style={{ backgroundColor: colors.green }}
                        >
                            <Plus className="inline mr-2" size={20} />
                            Post Item
                        </button>
                    </div>

                    {/* Search and filter section */}
                    <SearchFilter
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>
            </header>
        </div>
    );
}

export default Header;