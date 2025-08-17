import React, { useState, useEffect } from 'react';
import { colors } from '../constants/colors';
import Header from '../components/Header';
import ListingsGrid from '../components/ListingsGrid';
import CreateListingModal from '../components/CreateListingModal';
import ListingDetailModal from '../components/ListingDetailModal';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../contexts/AuthContext';

function MainPage({ 
  listings, 
  onCreateListing, 
  onDeleteListing,
  onAddToCart,
  cartItemCount,
  onNavigateToCart 
}) {
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "textbooks",
    description: "",
    location: ""
  });

  useEffect(() => {
    let filtered = listings;
    
    if (searchTerm) {
      filtered = filtered.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(listing => listing.category === selectedCategory);
    }
    
    setFilteredListings(filtered);
  }, [searchTerm, selectedCategory, listings]);

  const handleCreateListing = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    
    if (!formData.title || !formData.price) {
      alert("Please fill in title and price");
      return;
    }
    
    onCreateListing(formData);
    setFormData({
      title: "",
      price: "",
      category: "textbooks",
      description: "",
      location: ""
    });
    setShowCreateModal(false);
  };

  const handleDeleteListing = (id) => {
    if (confirm("Are you sure you want to delete this listing?")) {
      onDeleteListing(id);
      setSelectedListing(null);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onPostClick={() => setShowCreateModal(true)}
        cartItemCount={cartItemCount}
        onCartClick={onNavigateToCart}
        onAuthClick={() => setShowAuthModal(true)}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <ListingsGrid
          listings={filteredListings}
          onListingClick={setSelectedListing}
          onDeleteListing={handleDeleteListing}
        />
      </main>

      <CreateListingModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleCreateListing}
      />

      <ListingDetailModal
        listing={selectedListing}
        onClose={() => setSelectedListing(null)}
        onDelete={handleDeleteListing}
        onAddToCart={onAddToCart}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}

export default MainPage;