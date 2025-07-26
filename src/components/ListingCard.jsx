import { User, Star } from 'lucide-react';
import { colors } from '../constants/colors';

function ListingCard({ listing, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-48 object-cover rounded mb-3"
      />
      
      <h3 className="text-lg font-bold" style={{ color: colors.text }}>
        {listing.title}
      </h3>
      
      <p className="text-xl font-bold" style={{ color: colors.primary }}>
        ${listing.price}
      </p>
      
      <p className="text-sm text-gray-600 mb-2">
        {listing.description}
      </p>
      
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-1" style={{ color: colors.lightText }}>
          <User size={14} />
          <span>{listing.seller_name}</span>
        </div>
        <div className="flex items-center gap-1" style={{ color: colors.accent }}>
          <Star size={14} fill="currentColor" />
          <span>{listing.seller_rating}</span>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;