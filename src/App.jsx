import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { colors } from './constants/colors';
import Header from './components/Header';
import ListingsGrid from './components/ListingsGrid';
import CreateListingModal from './components/CreateListingModal';
import ListingDetailModal from './components/ListingDetailModal';

console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("Supabase Public Key:", import.meta.env.VITE_SUPABASE_PUBLIC);

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC);

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [currentUser] = useState({ id: 1, name: "Current User" });
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "textbooks",
    description: "",
    location: ""
  });

  useEffect(() => {
    fetchListings();
  }, []);

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

  async function fetchListings() {
    console.log('Fetching listings...');
    
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .order('created_at', { ascending: false });
        
    if (error) {
      console.error('Error fetching listings:', error);
      return;
    }
    
    setListings(data || []);
  }

  const handleCreateListing = async () => {
    if (!formData.title || !formData.price) {
      alert("Please fill in title and price");
      return;
    }
    
    const { data } = await supabase
      .from('listings')
      .insert([{
        title: formData.title,
        price: Number(formData.price),
        category: formData.category,
        description: formData.description,
        location: formData.location,
        seller_name: currentUser.name,
        seller_id: currentUser.id,
        seller_rating: 5.0,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
      }])
      .select();
    
    if (data) {
      setListings([data[0], ...listings]);
      setFormData({
        title: "",
        price: "",
        category: "textbooks",
        description: "",
        location: ""
      });
      setShowCreateModal(false);
    }
  };

  const handleDeleteListing = async (id) => {
    if (confirm("Are you sure you want to delete this listing?")) {
      await supabase.from('listings').delete().eq('id', id);
      setListings(listings.filter(listing => listing.id !== id));
      setSelectedListing(null);
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{ background: `linear-gradient(to bottom, ${colors.background}, ${colors.white})` }}
    >
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onPostClick={() => setShowCreateModal(true)}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <ListingsGrid
          listings={filteredListings}
          onListingClick={setSelectedListing}
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
        currentUserId={currentUser.id}
        onClose={() => setSelectedListing(null)}
        onDelete={handleDeleteListing}
      />
    </div>
  );
}

export default App;