import { Package } from 'lucide-react';
import { colors } from '../constants/colors';
import ListingCard from './ListingCard';

// Grid container for all listings
function ListingsGrid({ listings, onListingClick }) {
    // Show empty state if no listings
    if (listings.length === 0) {
        return (
            <div className="text-center py-12">
                <div
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.tan }}
                >
                    <Package size={40} style={{ color: colors.green }} />
                </div>
                <p className="text-lg" style={{ color: colors.green }}>
                    No items found in the marketplace
                </p>
            </div>
        );
    }

    // Show grid of listings
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