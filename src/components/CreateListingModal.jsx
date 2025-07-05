import { X } from 'lucide-react';
import { colors } from '../constants/colors';
import { categories } from '../data/mockData';

// Modal for creating new listings
function CreateListingModal({ show, onClose, formData, setFormData, onSubmit }) {
    // Don't render if not showing
    if (!show) return null;

    // Handle form field changes
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        // Dark overlay
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            {/* Modal box */}
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold" style={{ color: colors.green }}>
                        Post New Item
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1" style={{ color: colors.green }}>
                            Title
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                            className="w-full px-3 py-2 border-2 rounded-lg"
                            style={{ borderColor: colors.tan }}
                            placeholder="What are you selling?"
                        />
                    </div>

                    {/* Price and Category */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: colors.green }}>
                                Price ($)
                            </label>
                            <input
                                type="number"
                                value={formData.price}
                                onChange={(e) => handleChange('price', e.target.value)}
                                className="w-full px-3 py-2 border-2 rounded-lg"
                                style={{ borderColor: colors.tan }}
                                placeholder="0"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: colors.green }}>
                                Category
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => handleChange('category', e.target.value)}
                                className="w-full px-3 py-2 border-2 rounded-lg"
                                style={{ borderColor: colors.tan }}
                            >
                                {categories
                                    .filter(cat => cat.value !== "all")
                                    .map(cat => (
                                        <option key={cat.value} value={cat.value}>
                                            {cat.label}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1" style={{ color: colors.green }}>
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            className="w-full px-3 py-2 border-2 rounded-lg"
                            style={{ borderColor: colors.tan }}
                            rows={3}
                            placeholder="Describe your item..."
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1" style={{ color: colors.green }}>
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => handleChange('location', e.target.value)}
                            className="w-full px-3 py-2 border-2 rounded-lg"
                            style={{ borderColor: colors.tan }}
                            placeholder="Where can buyers meet you?"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border-2 rounded-lg font-medium"
                        style={{ borderColor: colors.tan, color: colors.green }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        className="flex-1 px-4 py-2 rounded-lg font-medium text-white"
                        style={{ backgroundColor: colors.green }}
                    >
                        Post Item
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateListingModal;