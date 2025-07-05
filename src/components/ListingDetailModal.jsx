import { X, MessageCircle, Edit, Trash2, User, MapPin, Star } from 'lucide-react';
import { colors } from '../constants/colors';

// Modal for viewing listing details
function ListingDetailModal({ listing, currentUserId, onClose, onDelete }) {
    // Don't render if no listing selected
    if (!listing) return null;

    // Check if current user owns this listing
    const isOwner = listing.sellerId === currentUserId;

    return (
        // Dark overlay
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            {/* Modal box */}
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Product image with close button */}
                <div className="relative">
                    <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-64 object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Product details */}
                <div className="p-6">
                    {/* Title and price */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-bold mb-2" style={{ color: colors.green }}>
                                {listing.title}
                            </h2>
                            {/* Seller info */}
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1" style={{ color: colors.green }}>
                                    <User size={16} />
                                    <span>{listing.sellerName}</span>
                                    <Star size={16} className="text-yellow-500 ml-1" />
                                    <span>{listing.sellerRating}</span>
                                </div>
                                <div className="flex items-center gap-1" style={{ color: colors.green }}>
                                    <MapPin size={16} />
                                    <span>{listing.location}</span>
                                </div>
                            </div>
                        </div>
                        <span className="text-3xl font-bold" style={{ color: colors.green }}>
                            ${listing.price}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">
                        {listing.description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                        {/* Contact button - shown for everyone */}
                        <button
                            className="flex-1 px-4 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
                            style={{ backgroundColor: colors.green }}
                        >
                            <MessageCircle size={20} />
                            Contact Seller
                        </button>

                        {/* Owner-only buttons */}
                        {isOwner && (
                            <>
                                <button
                                    className="px-4 py-3 border-2 rounded-lg font-medium flex items-center gap-2"
                                    style={{ borderColor: colors.tan, color: colors.green }}
                                >
                                    <Edit size={20} />
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(listing.id)}
                                    className="px-4 py-3 border-2 border-red-300 text-red-600 rounded-lg font-medium hover:bg-red-50 flex items-center gap-2"
                                >
                                    <Trash2 size={20} />
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingDetailModal;