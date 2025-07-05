export const sampleListings = [
    {
        id: 1,
        title: "Calculus Textbook - Like New",
        price: 45,
        category: "textbooks",
        description: "Barely used, no highlighting. Perfect for Math.",
        sellerName: "Cool Person 1",
        sellerRating: 4.8,
        sellerId: 1,
        location: "Curry Student Center",
        image: "https://media.wired.com/photos/5926f79caf95806129f51367/master/pass/GettyImages-532456845.jpg"
    },
    {
        id: 2,
        title: "Mini Fridge - Great Condition",
        price: 80,
        category: "dorm",
        description: "Perfect for dorm room. Moving out sale!",
        sellerName: "Cool Person 2",
        sellerRating: 4.5,
        sellerId: 2,
        location: "West Village H",
        image: "https://media.wired.com/photos/5926f79caf95806129f51367/master/pass/GettyImages-532456845.jpg"
    },
    {
        id: 3,
        title: "Organic Chemistry Notes",
        price: 20,
        category: "notes",
        description: "Complete semester notes, well-organized with diagrams",
        sellerName: "Cool Person 3",
        sellerRating: 5.0,
        sellerId: 3,
        location: "Snell Library",
        image: "https://media.wired.com/photos/5926f79caf95806129f51367/master/pass/GettyImages-532456845.jpg"
    }
];

// Categories for filtering
export const categories = [
    { value: "all", label: "All Items" },
    { value: "textbooks", label: "Textbooks" },
    { value: "dorm", label: "Dorm Items" },
    { value: "electronics", label: "Electronics" },
    { value: "notes", label: "Study Notes" },
    { value: "other", label: "Other" }
];