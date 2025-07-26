function ListingCard({ listing }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{listing.title}</h3>
      <p className="text-gray-600">${listing.price}</p>
      <p className="text-sm text-gray-500">Seller: {listing.seller_name}</p>
    </div>
  );
}

export default ListingCard;