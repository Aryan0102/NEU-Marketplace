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
            seller_name: "John Doe",
            seller_rating: 4.5,
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
        },
        {
            id: 2,
            title: "Dorm Room Essentials",
            price: 30,
            category: "furniture",
            description: "Complete set of dorm room essentials",
            seller_name: "Jane Smith",
            seller_rating: 4.8,
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400"
        },
        {
            id: 3,
            title: "Bicycle for Sale",
            price: 120,
            category: "transportation",
            description: "Gently used bicycle in great condition",
            seller_name: "Mike Johnson",
            seller_rating: 4.2,
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400"
        }
    ]);

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
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;