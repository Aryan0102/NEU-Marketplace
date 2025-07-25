import { User, Star } from 'lucide-react';
import { colors } from '../constants/colors';

function ListingCard({ listing, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
    >
      <div className="h-48 relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute top-3 right-3 px-3 py-1 rounded-full shadow-md bg-white"
        >
          <span className="font-bold" style={{ color: colors.primary }}>
            ${listing.price}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text }}>
          {listing.title}
        </h3>
        <p className="text-sm mb-3 line-clamp-2" style={{ color: colors.lightText }}>
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
    </div>
  );
}

export default ListingCard;