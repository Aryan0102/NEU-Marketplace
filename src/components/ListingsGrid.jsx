import React from 'react';
import { Package } from 'lucide-react';
import { colors } from '../constants/colors';
import ListingCard from './ListingCard';

function ListingsGrid({ listings, onListingClick }) {
  if (listings.length === 0) {
    return (
      <div className="text-center py-16">
        <div 
          className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.secondary }}
        >
          <Package size={48} style={{ color: colors.white }} />
        </div>
        <p className="text-xl font-medium mb-2" style={{ color: colors.text }}>
          No items found
        </p>
        <p style={{ color: colors.lightText }}>
          Try a different search or category
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map(listing => (
        <ListingCard
          key={listing.id}
          listing={listing}
          onClick={() => onListingClick(listing)}
        />
      ))}
    </div>
  );
}

export default ListingsGrid;