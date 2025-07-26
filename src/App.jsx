import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from './config/supabaseClient';
import MainPage from './pages/MainPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function AppContent() {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [currentUser] = useState({ id: 1, name: "Current User" });

  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
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

  const handleCreateListing = async (formData) => {
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
    }
  };

  const handleDeleteListing = async (id) => {
    await supabase.from('listings').delete().eq('id', id);
    setListings(listings.filter(listing => listing.id !== id));
  };

  const handleAddToCart = (listing) => {
    const existingItem = cartItems.find(item => item.id === listing.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === listing.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...listing, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    alert(`Checkout total: $${getTotalPrice().toFixed(2)}\nThis would connect to a payment processor.`);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <MainPage
            listings={listings}
            onCreateListing={handleCreateListing}
            onDeleteListing={handleDeleteListing}
            currentUser={currentUser}
            onAddToCart={handleAddToCart}
            cartItemCount={getCartItemCount()}
            onNavigateToCart={() => navigate('/cart')}
          />
        } 
      />
      <Route 
        path="/cart" 
        element={
          <ShoppingCartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onCheckout={handleCheckout}
            onBack={() => navigate('/')}
            getTotalPrice={getTotalPrice}
          />
        } 
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;