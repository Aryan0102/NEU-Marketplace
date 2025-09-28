# Desert Deals - Northeastern University Marketplace

A marketplace application designed specifically for Northeastern University students to buy and sell academic and personal items. Built with React, Vite, and Supabase.

> **Teaching Project** - This project is part of the **Oasis Project Series - Fall 25 Cohort**, designed to teach full-stack web development concepts and modern React practices.

## Features

### Core Functionality
- **User Authentication**: Sign-up and login with Supabase Auth
- **Item Listings**: Create, view, edit, and delete marketplace listings
- **Shopping Cart**: Add items to cart with quantity management
- **Search & Filter**: Find items by title, description, or category
- **Category Organization**: Browse by Textbooks, Dorm Items, Electronics, Study Notes, and more

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd desert-deals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Create a `listings` table with the following schema:
     ```sql
     CREATE TABLE listings (
       id SERIAL PRIMARY KEY,
       title TEXT NOT NULL,
       price DECIMAL NOT NULL,
       category TEXT NOT NULL,
       description TEXT,
       location TEXT,
       seller_name TEXT NOT NULL,
       seller_id UUID NOT NULL,
       seller_rating DECIMAL DEFAULT 5.0,
       image TEXT,
       created_at TIMESTAMP DEFAULT NOW()
     );
     ```

4. **Configure environment variables**
   - Copy your Supabase URL and anon key
   - Update `src/config/supabaseClient.js` with your credentials

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## Tech Stack

### Frontend
- **React** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Supabase Auth** - User authentication and management

## Project Structure

```
src/
├── components/                 # Reusable UI components
│   ├── AuthModal.jsx           # User authentication modal
│   ├── CreateListingModal.jsx  # Create new listing form
│   ├── Header.jsx              # Navigation and search header
│   ├── ListingCard.jsx         # Individual listing display
│   ├── ListingDetailModal.jsx  # Detailed listing view
│   ├── ListingsGrid.jsx        # Grid layout for listings
│   ├── LoadingSpinner.jsx      # Loading state component
│   └── SearchFilter.jsx        # Search and filter controls
├── config/
│   └── supabaseClient.js # Supabase configuration
├── contexts/
│   └── AuthContext.jsx   # Authentication state management
├── constants/
│   ├── categories.js     # Available item categories
│   └── colors.js         # Theme color definitions
├── pages/
│   ├── MainPage.jsx         # Main marketplace page
│   └── ShoppingCartPage.jsx # Shopping cart page
└── App.jsx                  # Main application component
```
## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Future Enhancements

- [ ] Payment integration
- [ ] Image upload functionality
- [ ] User profiles and ratings
- [ ] Messaging system between buyers and sellers
- [ ] Mobile app (React Native)
- [ ] Advanced search filters
- [ ] Wishlist functionality
- [ ] Email notifications
