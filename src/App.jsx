// src/App.jsx
import React, { useState, useEffect } from 'react';
import { colors } from './constants/colors';
import { sampleListings } from './data/mockData';
import Header from './components/Header';
import ListingsGrid from './components/ListingsGrid';
import CreateListingModal from './components/CreateListingModal';
import ListingDetailModal from './components/ListingDetailModal';

function App() {
  // State for all listings
  const [listings, setListings] = useState(sampleListings);
  
  // State for filtered listings (what we actually display)
  const [filteredListings, setFilteredListings] = useState(sampleListings);
  
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // State for modals
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  
  // Current user (in real app, this would come from login)
  const [currentUser] = useState({ 
    id: 1, 
    name: "Logged In User", 
  });
  
  // Form data for new listing
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "textbooks",
    description: "",
    location: ""
  });

  // Filter listings whenever search or category changes
  useEffect(() => {
    let filtered = listings;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(listing => 
        listing.category === selectedCategory
      );
    }
    
    setFilteredListings(filtered);
  }, [searchTerm, selectedCategory, listings]);

  // Add new listing
  const handleCreateListing = () => {
    // Basic validation
    if (!formData.title || !formData.price) {
      alert("Please fill in title and price");
      return;
    }
    
    // Create new listing object
    const newListing = {
      id: listings.length + 1,
      title: formData.title,
      price: Number(formData.price),
      category: formData.category,
      description: formData.description,
      location: formData.location,
      sellerName: currentUser.name,
      sellerId: currentUser.id,
      sellerRating: 5.0,
      image: "https://media.wired.com/photos/5926f79caf95806129f51367/master/pass/GettyImages-532456845.jpg"
    };
    
    // Add to listings
    setListings([newListing, ...listings]);
    
    // Reset form and close modal
    setFormData({
      title: "",
      price: "",
      category: "textbooks",
      description: "",
      location: ""
    });
    setShowCreateModal(false);
  };

  // Delete listing
  const handleDeleteListing = (id) => {
    if (confirm("Are you sure you want to delete this listing?")) {
      setListings(listings.filter(listing => listing.id !== id));
      setSelectedListing(null);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.sand }}>
      {/* Header with search and filters */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onPostClick={() => setShowCreateModal(true)}
      />

      {/* Main content - listings grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ListingsGrid
          listings={filteredListings}
          onListingClick={setSelectedListing}
        />
      </main>

      {/* Create listing modal */}
      <CreateListingModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleCreateListing}
      />

      {/* Listing detail modal */}
      <ListingDetailModal
        listing={selectedListing}
        currentUserId={currentUser.id}
        onClose={() => setSelectedListing(null)}
        onDelete={handleDeleteListing}
      />
    </div>
  );
}

export default App;