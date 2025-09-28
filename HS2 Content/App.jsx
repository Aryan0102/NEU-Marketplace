import React, { useState } from 'react';
import { colors } from './constants/colors';
import ListingCard from './components/ListingCard';

function App() {
    const [listings, setListings] = useState([
        {
            id: 1,
            title: "Calculus Textbook",
            price: 45,
            category: "textbooks",
            description: "Barely used calculus textbook",
            seller_name: "Aryan",
            seller_rating: 4.5,
            image: "https://www.wolfram-media.com/products/img/IntroToCalc-bookhomepage.png"
        },
        {
            id: 2,
            title: "Dorm Room Essentials",
            price: 30,
            category: "furniture",
            description: "Complete set of dorm room essentials",
            seller_name: "Paarth",
            seller_rating: 4.8,
            image: "https://caaneo.ca/sites/default/files/styles/scale_800/public/2024-10/iStock-1000325068-1536x1024.jpg.webp"
        },
        {
            id: 3,
            title: "Bicycle for Sale",
            price: 120,
            category: "transportation",
            description: "Gently used bicycle in great condition",
            seller_name: "Ciaran",
            seller_rating: 4.2,
            image: "https://www.prioritybicycles.com/cdn/shop/files/600_hero_May2024_1of1.jpg?v=1716221309"
        }
    ]);

    // Placeholder functions for HS2
    const handleListingClick = (listing) => {
        console.log('Clicked listing:', listing);
        alert('Listing detail functionality will be added in a later week!');
    };

    const handleDeleteListing = (id) => {
        console.log('Delete listing:', id);
        alert('Delete listing functionality will be added in a later week!');
    };

    return (
        <div style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
            <header style={{
                background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                padding: '24px'
            }}>
                <h1 className="text-4xl font-bold text-white">Oasis Desert Deals</h1>
                <p className="text-white opacity-90">Student Marketplace</p>
            </header>

            <main className="max-w-6xl mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {listings.map(listing => (
                        <ListingCard
                            key={listing.id}
                            listing={listing}
                            onClick={() => handleListingClick(listing)}
                            onDelete={handleDeleteListing}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;