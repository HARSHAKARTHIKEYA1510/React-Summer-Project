"use client"; 

import { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Home() {

  const [search, setSearch] = useState("")
  const [count, setCount] = useState(0)
  const router = useRouter();
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("Signed in user:", user.email);
      } else {
        setUser(null);
        console.log("No user signed in.");
      }
    });
  
    return () => unsubscribe();
  }, []);
  
  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleOrder() {
    router.push("/OrderNow")
  }

  function handleCart() {
  }

  const data = [
    { "restaurant_name": "Chili's Grill & Bar", "cuisine": "Mexican", "rating": 4.2, "address": "Vasant Kunj, New Delhi" },
    { "restaurant_name": "Karim's", "cuisine": "Indian (Mughlai)", "rating": 4.3, "address": "Gali Kababian, Jama Masjid, Old Delhi" },
    { "restaurant_name": "Sorrento", "cuisine": "Italian/French", "rating": 4.0, "address": "Shangri‑La Eros, Connaught Place" },
    { "restaurant_name": "Johnny Rockets", "cuisine": "American", "rating": 2.0, "address": "Select Citywalk, Saket" },
    { "restaurant_name": "Chili's Grill & Bar", "cuisine": "Mexican", "rating": 4.2, "address": "Vasant Kunj, New Delhi" },
    { "restaurant_name": "Maquina – Mexican Dive Bar", "cuisine": "Mexican", "rating": 4.0, "address": "Hauz Khas Village, New Delhi" },
    { "restaurant_name": "Dos Burros", "cuisine": "Mexican", "rating": 3.4, "address": "Gurgaon (Delhi NCR)" },
    { "restaurant_name": "Depot 29", "cuisine": "Mexican", "rating": 2.1, "address": "Safdarjung Enclave, New Delhi" },
    { "restaurant_name": "Taco Mexicana", "cuisine": "Mexican", "rating": 4.2, "address": "Various outlets" },
    { "restaurant_name": "Rodeo Cantina (Teddy Boy)", "cuisine": "Mexican", "rating": 4.1, "address": "CP, New Delhi" },
    { "restaurant_name": "Big Yellow Door", "cuisine": "Mexican", "rating": 3.7, "address": "Satya Niketan, New Delhi" },
    { "restaurant_name": "Firangi Bake", "cuisine": "Mexican Fusion", "rating": 3.2, "address": "Malviya Nagar, New Delhi" },
    { "restaurant_name": "Cafeteria & Co.", "cuisine": "Mexican", "rating": 3.3, "address": "Hudson Lane, GTB Nagar, New Delhi" },
    { "restaurant_name": "Karim's", "cuisine": "Indian (Mughlai)", "rating": 4.3, "address": "Gali Kababian, Jama Masjid, Old Delhi" },
    { "restaurant_name": "Moti Mahal", "cuisine": "Indian (Punjabi)", "rating": 3.9, "address": "Daryaganj, New Delhi" },
    { "restaurant_name": "Beirut Bites", "cuisine": "Middle Eastern", "rating": 4.5, "address": "Banjara Hills-style in Delhi" },
    { "restaurant_name": "Falafel & More", "cuisine": "Middle Eastern", "rating": 4.2, "address": "Hauz Khas Village" },
    { "restaurant_name": "Shawarma Station", "cuisine": "Middle Eastern", "rating": 4.5, "address": "CP & Saket" },
    { "restaurant_name": "Veg Gulati", "cuisine": "Vegan", "rating": 4.6, "address": "Green Park, New Delhi" },
    { "restaurant_name": "Sattvik", "cuisine": "Vegan", "rating": 4.6, "address": "Select Citywalk, Saket" },
    { "restaurant_name": "Greenr Café", "cuisine": "Vegan", "rating": 4.5, "address": "Vasant Vihar, New Delhi" },
    { "restaurant_name": "Canvas V", "cuisine": "Vegan", "rating": 4.4, "address": "Panchsheel Park, New Delhi" },
    { "restaurant_name": "Burma Burma", "cuisine": "Vegan", "rating": 4.9, "address": "Saket" },
    { "restaurant_name": "Kebab Kingdom", "cuisine": "Middle Eastern", "rating": 4.4, "address": "Multiple outlets" },
    { "restaurant_name": "Hummus Heaven", "cuisine": "Middle Eastern", "rating": 4.6, "address": "Select Citywalk, Saket" },
    { "restaurant_name": "Pita Palace", "cuisine": "Middle Eastern", "rating": 4.2, "address": "Multiple Delhi outlets" },
    { "restaurant_name": "Zaitoon", "cuisine": "Middle Eastern", "rating": 3.2, "address": "Connaught Place" },
    { "restaurant_name": "Beirut Grill", "cuisine": "Middle Eastern", "rating": 2.8, "address": "Hauz Khas" },
    { "restaurant_name": "Caspian Cafe", "cuisine": "Middle Eastern", "rating": 3.8, "address": "Defence Colony" },
    { "restaurant_name": "Shiraz Golden Restaurant", "cuisine": "Middle Eastern", "rating": 4.6, "address": "Jheel Khuranja" },
    { "restaurant_name": "Indian Accent", "cuisine": "Indian (Modern)", "rating": 4.7, "address": "The Lodhi, Lodhi Road, New Delhi" },
    { "restaurant_name": "Gulati Restaurant", "cuisine": "Indian (North)", "rating": 4.6, "address": "Pandara Road Market, New Delhi" },
    { "restaurant_name": "Saravana Bhavan", "cuisine": "Indian (South)", "rating": 4.5, "address": "Janpath Road, Connaught Place, New Delhi" },
    { "restaurant_name": "Bikanervala", "cuisine": "Indian (Snacks/Sweets)", "rating": 3.2, "address": "Multiple outlets, Delhi" },
    { "restaurant_name": "Sattvik", "cuisine": "Indian (Vegetarian)", "rating": 4.6, "address": "Select Citywalk, Saket, New Delhi" },
    { "restaurant_name": "Dakshin (Sheraton)", "cuisine": "Indian (South)", "rating": 4.8, "address": "Saket District Centre, New Delhi" },
    { "restaurant_name": "Zaffran", "cuisine": "Indian (North)", "rating": 4.4, "address": "Connaught Place, New Delhi" },
    { "restaurant_name": "Guppy", "cuisine": "Japanese", "rating": 4.3, "address": "Lodhi Colony Market, New Delhi" },
    { "restaurant_name": "Fujiya", "cuisine": "Japanese", "rating": 4.2, "address": "Malcha Marg, Chanakyapuri, New Delhi" },
    { "restaurant_name": "Yum Yum Cha", "cuisine": "Japanese", "rating": 4.3, "address": "Khan Market & outlets" },
    { "restaurant_name": "TK's Oriental Grill", "cuisine": "Japanese", "rating": 4.5, "address": "Hyatt Regency, Bhikaji Cama Place" },
    { "restaurant_name": "Ebisu", "cuisine": "Japanese", "rating": null, "address": "Gurgaon (Delhi NCR)" },
    { "restaurant_name": "Athens Delight", "cuisine": "Greek", "rating": 4.4, "address": "GK‑1, New Delhi" },
    { "restaurant_name": "Santorini Bites", "cuisine": "Greek", "rating": 4.4, "address": "Bandra-style in Delhi" },
    { "restaurant_name": "Zorba's Feast", "cuisine": "Greek", "rating": 4.3, "address": "Connaught Place" },
    { "restaurant_name": "Taverna Blue", "cuisine": "Greek", "rating": 4.5, "address": "Defence Colony" },
    { "restaurant_name": "Olive Grove", "cuisine": "Greek", "rating": 4.2, "address": "Mehrauli" },
    { "restaurant_name": "Mykonos Magic", "cuisine": "Greek", "rating": 4.4, "address": "Carter Road-themed in Delhi" },
    { "restaurant_name": "Royal China", "cuisine": "Chinese", "rating": 3.9, "address": "Eros Towers, Nehru Place" },
    { "restaurant_name": "Mandarin Garden", "cuisine": "Chinese", "rating": 3.9, "address": "Multiple outlets, Delhi" },
    { "restaurant_name": "Red Lantern", "cuisine": "Chinese", "rating": 4.1, "address": "Select Citywalk, Saket" },
    { "restaurant_name": "Wok Palace", "cuisine": "Chinese", "rating": 4.1, "address": "Gurgaon/Delhi NCR" },
    { "restaurant_name": "Royal China (CP)", "cuisine": "Chinese", "rating": 3.9, "address": "Connaught Place, New Delhi" },
    { "restaurant_name": "China Bowl", "cuisine": "Chinese", "rating": 4.2, "address": "Multiple Delhi outlets" },
    { "restaurant_name": "Kuuraku", "cuisine": "Japanese", "rating": null, "address": "Gurgaon" },
    { "restaurant_name": "Sushi Samba", "cuisine": "Japanese", "rating": 4.7, "address": "Multiple premium hotels, Delhi" },
    { "restaurant_name": "Megu", "cuisine": "Japanese", "rating": null, "address": "Leela Palace, Chanakyapuri" },
    { "restaurant_name": "Nori Nation", "cuisine": "Japanese", "rating": 4.4, "address": "Various outlets, Delhi NCR" },
    { "restaurant_name": "Ramen Republic", "cuisine": "Japanese", "rating": 4.5, "address": "Connaught Place, New Delhi" },
    { "restaurant_name": "Earthy Eats", "cuisine": "Vegan", "rating": 4.5, "address": "Multiple Delhi outlets" },
    { "restaurant_name": "Plant Powered", "cuisine": "Vegan", "rating": 4.5, "address": "CP" },
    { "restaurant_name": "Vegan Vibes", "cuisine": "Vegan", "rating": 4.6, "address": "Hauz Khas" },
    { "restaurant_name": "The Vegan Spot", "cuisine": "Vegan", "rating": 4.6, "address": "Defence Colony" },
    { "restaurant_name": "Green Garden", "cuisine": "Vegan", "rating": 4.6, "address": "Koregaon Park Delhi" },
    { "restaurant_name": "Bukhara", "cuisine": "Indian (North-West Frontier)", "rating": 4.5, "address": "ITC Maurya, Sardar Patel Marg, Chanakyapuri" },
    { "restaurant_name": "Le Cirque", "cuisine": "French", "rating": 4.4, "address": "Leela Palace, Diplomatic Enclave, Chanakyapuri" },
    { "restaurant_name": "The Blue Door Café", "cuisine": "French/European", "rating": 4.1, "address": "Khan Market, New Delhi" },
    { "restaurant_name": "Chateau de Pondicherry", "cuisine": "French Bistro", "rating": 4.0, "address": "Adchini, New Delhi" },
    { "restaurant_name": "Reve Bistro Moderne", "cuisine": "French", "rating": 4.2, "address": "Aerocity, New Delhi" },
    { "restaurant_name": "Café Lota", "cuisine": "French/Indian fusion", "rating": 4.0, "address": "Pragati Maidan Craft Museum, New Delhi" },
    { "restaurant_name": "Perbacco", "cuisine": "Italian/French fusion", "rating": 4.0, "address": "The Lodhi, New Delhi" },
    { "restaurant_name": "Sorrento", "cuisine": "Italian/French", "rating": 4.6, "address": "Shangri‑La Eros, Connaught Place" },
    { "restaurant_name": "Le Petit Chef (pop-up)", "cuisine": "French", "rating": 4.0, "address": "Various premium hotels, Delhi" },
    { "restaurant_name": "La Vie", "cuisine": "Italian–French", "rating": 4.0, "address": "Khan Market, New Delhi" },
    { "restaurant_name": "Olive Bar & Kitchen", "cuisine": "Mediterranean/French", "rating": 4.0, "address": "Mehrauli, New Delhi" },
    { "restaurant_name": "Dragon Wok", "cuisine": "Chinese", "rating": 4.2, "address": "Gariahat Rd style" },
    { "restaurant_name": "Chopstick Express", "cuisine": "Chinese", "rating": 4.0, "address": "Various Delhi locations" },
    { "restaurant_name": "Ebony Chinese", "cuisine": "Chinese", "rating": 3.9, "address": "Connaught Place" },
    { "restaurant_name": "Crystal Chinese", "cuisine": "Chinese", "rating": 3.9, "address": "Select Citywalk, Saket" },
    { "restaurant_name": "Aegean Bistro", "cuisine": "Greek", "rating": 4.0, "address": "Khan Market" },
    { "restaurant_name": "Zeus Taverna", "cuisine": "Greek", "rating": 4.0, "address": "Select Citywalk" },
    { "restaurant_name": "Opa! Greek Kitchen", "cuisine": "Greek", "rating": 4.0, "address": "Saket" },
    { "restaurant_name": "Pomegranates", "cuisine": "Greek", "rating": 4.0, "address": "Hauz Khas" },
    { "restaurant_name": "The Big Chill Cafe", "cuisine": "American/Italian", "rating": 3.5, "address": "Khan Market & multiple outlets" },
    { "restaurant_name": "Smoky Burgers", "cuisine": "American", "rating": 4.1, "address": "Brigade Road theme, Delhi" },
    { "restaurant_name": "Nirula's", "cuisine": "American (Fast‑food)", "rating": 4.1, "address": "Connaught Place & outlets" },
    { "restaurant_name": "Brooklyn BBQ", "cuisine": "American", "rating": 4.3, "address": "CP style in Delhi" },
    { "restaurant_name": "Big Buns Cafe", "cuisine": "American", "rating": 4.1, "address": "Defence Colony" },
    { "restaurant_name": "Route 66 Diner", "cuisine": "American", "rating": 4.0, "address": "Saket" },
    { "restaurant_name": "Liberty Grill", "cuisine": "American", "rating": 4.2, "address": "CP" },
    { "restaurant_name": "Johnny Rockets", "cuisine": "American", "rating": 3.2, "address": "Select Citywalk, Saket" },
    { "restaurant_name": "Hard Rock Cafe", "cuisine": "American", "rating": 4.4, "address": "M G Road, Delhi" },
    { "restaurant_name": "Dunkin' Donuts (American)", "cuisine": "American", "rating": 4.1, "address": "Multiple Delhi outlets" },
    { "restaurant_name": "Café Tonino", "cuisine": "Italian", "rating": 4.4, "address": "Connaught Place, New Delhi" },
    { "restaurant_name": "The Big Chill", "cuisine": "Italian", "rating": 3.6, "address": "Khan Market & other outlets" },
    { "restaurant_name": "Smoke House Deli", "cuisine": "Italian", "rating": 3.3, "address": "Vasant Kunj" },
    { "restaurant_name": "Prego", "cuisine": "Italian", "rating": 3.7, "address": "The Westin, Gurgaon" },
    { "restaurant_name": "Artusi Ristorante e Bar", "cuisine": "Italian", "rating": 3.9, "address": "GK II, New Delhi" },
    { "restaurant_name": "Evoo Pizzeria", "cuisine": "Italian", "rating": 3.4, "address": "Geetanjali Enclave, New Delhi" },
    { "restaurant_name": "La Piazza", "cuisine": "Italian", "rating": 3.8, "address": "Hyatt Regency, Bhikaji Cama Place" },
    { "restaurant_name": "Diva – The Italian Restaurant", "cuisine": "Italian", "rating": 3.5, "address": "GK II, New Delhi" },
    { "restaurant_name": "Jamie's Italian", "cuisine": "Italian", "rating": 3.2, "address": "Ambience Mall, Vasant Kunj" },
    { "restaurant_name": "Perbacco", "cuisine": "Italian", "rating": 3.7, "address": "The Lodhi, New Delhi" },
    { "restaurant_name": "Sevilla – The Claridges", "cuisine": "Spanish", "rating": 3.7, "address": "Aurangzeb Road, New Delhi" },
    { "restaurant_name": "Tapas by Terrace", "cuisine": "Spanish", "rating": 3.4, "address": "Aerocity Hotel District" },
    { "restaurant_name": "Q'LA Spanish Bistro", "cuisine": "Spanish", "rating": 3.8, "address": "Mehrauli, New Delhi" },
    { "restaurant_name": "Dos Catrinas", "cuisine": "Spanish/Mexican", "rating": 3.6, "address": "Hauz Khas" },
    { "restaurant_name": "Tapestry Spanish Tapas", "cuisine": "Spanish", "rating": 3.2, "address": "Select Citywalk, Saket" },
    { "restaurant_name": "Tapas at Andaz", "cuisine": "Spanish", "rating": 3.9, "address": "Aerocity, New Delhi" },
    { "restaurant_name": "La Bodega", "cuisine": "Spanish", "rating": 3.5, "address": "Gurgaon (Delhi NCR)" },
    { "restaurant_name": "Carmen's Table", "cuisine": "Spanish", "rating": 3.1, "address": "Gurgaon" },
    { "restaurant_name": "Olé Olé Tapas", "cuisine": "Spanish", "rating": 3.3, "address": "Connaught Place" },
    { "restaurant_name": "Iberian Kitchen", "cuisine": "Spanish", "rating": 3.7, "address": "Aerocity" }
  ]
  
  const filteredRestaurant = data.filter((res) => {
    const searchTerm = search.trim().toLowerCase().toString();
  
    return (
      res.restaurant_name.toLowerCase().includes(searchTerm) ||
      res.cuisine.toLowerCase().includes(searchTerm) ||
      String(res.rating).includes(searchTerm)
    );
  });
  

  function handleLoginHome() {
    router.push("/Login");
  }

  function handleSignupHome() {
    router.push("/signup");
  }

  return (
    <div>
      <div className="navbar">
        <h2 className="nearbybites">NearBy</h2>
        <img
          className="image_home"
          src="https://media.istockphoto.com/id/1443629939/vector/beef-burger-vintage-colorful-emblem.jpg?s=612x612&w=0&k=20&c=eaMP3XhGUUsjsfORzlZt7gftXpJMrHGuYRF7Wl4FdHs="
          alt="Logo"
        />
        <div className="searchdiv">
          <img
            className="searchimg"
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="search"
          />
          <input
            className="searchbar"
            type="text"
            placeholder="Search for restaurant , cuisine or rating"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {user ? (
          <button
            className="signin"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("User signed out");
                  setUser(null);
                })
                .catch((error) => {
                  console.error("Sign out error", error);
                });
            }}
          >
            Logout
          </button>
        ) : (
          <button onClick={handleLoginHome} className="signin">
            Sign In
          </button>
        )}
      </div>
  
      {search && filteredRestaurant.length === 0 ? (
        <div className="not-found">
          <h2 className="noresults">No matching restaurants or cuisine found.</h2>
        </div>
      ) : (
        <div className="restaurent-container">
          {(search ? filteredRestaurant : data).map((restaurant, id) => (
            <div className="restaurent-card" key={id}>
              <div className="restaurent-datails">
                <div className="image_div">
                  {restaurant.cuisine.includes("Italian") ? (
                    <img className="image_card" src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-italian-dishes-1645372086.jpg" alt="Italian cuisine" />
                  ) : restaurant.cuisine.includes("Chinese") ? (
                    <img className="image_card" src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=" alt="Chinese cuisine" />
                  ) : restaurant.cuisine.includes("Japanese") ? (
                    <img className="image_card" src="https://media.istockphoto.com/id/688006056/photo/japanese-cuisine.jpg?s=612x612&w=0&k=20&c=MOHSpXQ9EFfprrdMaOv9bPn3W9yS10hnhJs791wL6Rc=" alt="Japanese cuisine" />
                  ) : restaurant.cuisine.includes("American") ? (
                    <img className="image_card" src="https://www.shutterstock.com/image-photo/american-style-brunch-tomato-omelette-600nw-2424020343.jpg" alt="American cuisine" />
                  ) : restaurant.cuisine.includes("Indian") ? (
                    <img className="image_card" src="https://media.istockphoto.com/id/1168659055/photo/various-indian-dishes-featuring-rogan-josh-chicken-tikka-masala-biryani-tandoori-chicken.jpg?s=612x612&w=0&k=20&c=UQHwCReZcVv4gYf7JOz0unQbDKkvmIHf4cjih-EkSLY=" alt="Indian cuisine" />
                  ) : restaurant.cuisine.includes("Mexican") ? (
                    <img className="image_card" src="https://www.englishclub.com/images/vocabulary/food/mexican/mexican-food.jpg" alt="Mexican cuisine" />
                  ) : restaurant.cuisine.includes("French") ? (
                    <img className="image_card" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/4f/dc/1f/our-beautiful-french.jpg?w=900&h=500&s=1" alt="French cuisine" />
                  ) : restaurant.cuisine.includes("Greek") ? (
                    <img className="image_card" src="https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWslMjBmb29kfGVufDB8fDB8fHww" alt="Greek cuisine" />
                  ) : restaurant.cuisine.includes("Middle Eastern") ? (
                    <img className="image_card" src="https://media.istockphoto.com/id/833390070/photo/arabic-dishes-and-meze.jpg?s=612x612&w=0&k=20&c=MtWWS3THa19Mnb96iOGfpxOGwdmYNM-Xi0_zAEW9mTY=" alt="Middle Eastern cuisine" />
                  ) : restaurant.cuisine.includes("Spanish") ? (
                    <img className="image_card" src="https://media.istockphoto.com/id/1168659055/photo/various-indian-dishes-featuring-rogan-josh-chicken-tikka-masala-biryani-tandoori-chicken.jpg?s=612x612&w=0&k=20&c=UQHwCReZcVv4gYf7JOz0unQbDKkvmIHf4cjih-EkSLY=" alt="Spanish cuisine" />
                  ) : (restaurant.cuisine.includes("Vegan") || restaurant.cuisine.includes("Healthy")) ? (
                    <img className="image_card" src="https://cdn.tatlerasia.com/asiatatler/i/ph/2021/04/07174644-ella-olsson-2ixtgsgfi-s-unsplash_cover_1920x1440.jpg" alt="Vegan cuisine" />
                  ) : (
                    <img className="image_card" src="https://media.istockphoto.com/id/1168659055/photo/various-indian-dishes-featuring-rogan-josh-chicken-tikka-masala-biryani-tandoori-chicken.jpg?s=612x612&w=0&k=20&c=UQHwCReZcVv4gYf7JOz0unQbDKkvmIHf4cjih-EkSLY=" alt="Cuisine" />
                  )}
                </div>
                <div className="name-rating">
                  <p className="detail">{restaurant.restaurant_name}</p>
                  <p id="rating" className="detail">
                    {restaurant.rating || "N/A"}
                    <img className="star" src="https://static.vecteezy.com/system/resources/thumbnails/021/508/056/small_2x/white-star-shotting-star-transparent-bokeh-stars-free-free-png.png" alt="star" />
                  </p>
                </div>
                <p className="detail">Cuisine: {restaurant.cuisine}</p> 
                <p className="detail">{restaurant.address}</p>
                <button className="order" onClick={handleOrder}>View Menu</button>
              </div>
            </div>

          ))}
        </div>
        
      )}
      
    </div>
    

  );
}