import { User, MapPin, Star } from 'lucide-react';
import { colors } from '../constants/colors';

// Individual listing card component
function ListingCard({ listing, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
        >
            {/* Product image */}
            <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
            />

            {/* Product details */}
            <div className="p-5">
                {/* Title and price */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold" style={{ color: colors.green }}>
                        {listing.title}
                    </h3>
                    <span className="text-2xl font-bold" style={{ color: colors.green }}>
                        ${listing.price}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3">
                    {listing.description}
                </p>

                {/* Seller info and location */}
                <div className="flex justify-between text-sm">
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
        </div>
    );
}

export default ListingCard;