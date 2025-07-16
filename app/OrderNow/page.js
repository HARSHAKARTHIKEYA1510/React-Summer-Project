"use client"
import {useState,useEffect} from "react"
export default function(){
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     async function getdata() {
    //         const res=await fetch("https://mocki.io/v1/7d21f7bf-6bf0-42f3-8bca-1b94ae0b15d9")
    //         const result=await res.json()
    //         setdata(result)
    //     }
    //     getdata()
    // },[])
    const [cartno,setcartno]=useState(0)
    const [cartitems,setcartitems]=useState([])
    const foodItems = [
        { name: "Sushi Platter", cuisine: "Japanese", price: 475 },
        { name: "Kung Pao Chicken", cuisine: "Chinese", price: 340 },
        { name: "Butter Chicken", cuisine: "Indian", price: 430 },
        { name: "Tacos al Pastor", cuisine: "Mexican", price: 395 },
        { name: "Cheeseburger", cuisine: "American", price: 360 },
        { name: "Moussaka", cuisine: "Greek", price: 450 },
        { name: "Ramen Bowl", cuisine: "Japanese", price: 410 },
        { name: "General Tso's Chicken", cuisine: "Chinese", price: 395 },
        { name: "Paneer Tikka", cuisine: "Indian", price: 380 },
        { name: "Quesadilla", cuisine: "Mexican", price: 350 },
        { name: "Hot Dog", cuisine: "American", price: 315 },
        { name: "Souvlaki", cuisine: "Greek", price: 410 },
        { name: "Tempura Udon", cuisine: "Japanese", price: 460 },
        { name: "Sweet and Sour Pork", cuisine: "Chinese", price: 370 },
        { name: "Chicken Biryani", cuisine: "Indian", price: 445 },
        { name: "Enchiladas", cuisine: "Mexican", price: 385 },
        { name: "BBQ Ribs", cuisine: "American", price: 495 },
        { name: "Greek Salad", cuisine: "Greek", price: 320 },
        { name: "Teriyaki Chicken", cuisine: "Japanese", price: 425 },
        { name: "Manchurian", cuisine: "Chinese", price: 335 },
        { name: "Chole Bhature", cuisine: "Indian", price: 360 },
        { name: "Nachos Supreme", cuisine: "Mexican", price: 390 },
        { name: "Fried Chicken", cuisine: "American", price: 470 },
        { name: "Gyro Wrap", cuisine: "Greek", price: 440 },
        { name: "Sashimi Deluxe", cuisine: "Japanese", price: 480 },
        { name: "Dim Sum Platter", cuisine: "Chinese", price: 350 },
        { name: "Masala Dosa", cuisine: "Indian", price: 310 },
        { name: "Burrito Bowl", cuisine: "Mexican", price: 430 },
        { name: "Philly Cheesesteak", cuisine: "American", price: 495 },
        { name: "Spanakopita", cuisine: "Greek", price: 325 },
        { name: "Okonomiyaki", cuisine: "Japanese", price: 410 },
        { name: "Hakka Noodles", cuisine: "Chinese", price: 345 },
        { name: "Dal Makhani", cuisine: "Indian", price: 370 },
        { name: "Fajitas", cuisine: "Mexican", price: 400 },
        { name: "Mac & Cheese", cuisine: "American", price: 355 },
        { name: "Baklava", cuisine: "Greek", price: 320 },
        { name: "Katsu Curry", cuisine: "Japanese", price: 460 },
        { name: "Chow Mein", cuisine: "Chinese", price: 370 },
        { name: "Rogan Josh", cuisine: "Indian", price: 470 },
        { name: "Tamales", cuisine: "Mexican", price: 385 },
        { name: "Buffalo Wings", cuisine: "American", price: 425 },
        { name: "Greek Yogurt Bowl", cuisine: "Greek", price: 310 },
        { name: "Udon Noodle Soup", cuisine: "Japanese", price: 405 },
        { name: "Schezwan Fried Rice", cuisine: "Chinese", price: 365 },
        { name: "Aloo Paratha", cuisine: "Indian", price: 320 },
        { name: "Churros with Chocolate", cuisine: "Mexican", price: 350 },
        { name: "Corn Dog", cuisine: "American", price: 340 },
        { name: "Greek Lamb Chops", cuisine: "Greek", price: 490 },
        { name: "Miso Soup", cuisine: "Japanese", price: 330 },
        { name: "Spring Rolls", cuisine: "Chinese", price: 310 },
        { name: "Pav Bhaji", cuisine: "Indian", price: 330 },
        { name: "Fish Tacos", cuisine: "Mexican", price: 410 },
        { name: "Clam Chowder", cuisine: "American", price: 370 },
        { name: "Stuffed Grape Leaves", cuisine: "Greek", price: 340 },
        { name: "Takoyaki", cuisine: "Japanese", price: 445 },
        { name: "Mongolian Beef", cuisine: "Chinese", price: 480 },
        { name: "Hyderabadi Haleem", cuisine: "Indian", price: 495 },
        { name: "Mexican Street Corn", cuisine: "Mexican", price: 360 },
        { name: "Steak Sandwich", cuisine: "American", price: 455 },
        { name: "Greek Pita Pizza", cuisine: "Greek", price: 365 },
        { name: "Yakisoba", cuisine: "Japanese", price: 395 },
        { name: "Lemon Chicken", cuisine: "Chinese", price: 345 },
        { name: "Rajma Chawal", cuisine: "Indian", price: 350 },
        { name: "Guacamole and Chips", cuisine: "Mexican", price: 310 },
        { name: "Grilled Cheese", cuisine: "American", price: 300 },
        { name: "Greek Rice Bowl", cuisine: "Greek", price: 370 },
        { name: "Shabu Shabu", cuisine: "Japanese", price: 500 },
        { name: "Wonton Soup", cuisine: "Chinese", price: 335 },
        { name: "Kadhi Pakora", cuisine: "Indian", price: 340 },
        { name: "Chicken Mole", cuisine: "Mexican", price: 460 },
        { name: "Sloppy Joe", cuisine: "American", price: 375 },
        { name: "Greek Chicken Skewers", cuisine: "Greek", price: 420 },
        { name: "Tonkatsu", cuisine: "Japanese", price: 455 },
        { name: "Chicken Lollipop", cuisine: "Chinese", price: 390 },
        { name: "Pani Puri", cuisine: "Indian", price: 310 },
        { name: "Mexican Rice Bowl", cuisine: "Mexican", price: 390 },
        { name: "Pulled Pork Burger", cuisine: "American", price: 460 },
        { name: "Feta Pasta", cuisine: "Greek", price: 385 },
        { name: "Japanese Curry Rice", cuisine: "Japanese", price: 420 },
        { name: "Chilli Garlic Noodles", cuisine: "Chinese", price: 370 },
        { name: "Tandoori Chicken", cuisine: "Indian", price: 465 },
        { name: "Carne Asada", cuisine: "Mexican", price: 450 },
        { name: "Cobb Salad", cuisine: "American", price: 375 },
        { name: "Greek Meatballs", cuisine: "Greek", price: 390 },
        { name: "Matcha Cheesecake", cuisine: "Japanese", price: 385 },
        { name: "Mapo Tofu", cuisine: "Chinese", price: 430 },
        { name: "Chicken Korma", cuisine: "Indian", price: 410 },
        { name: "Huevos Rancheros", cuisine: "Mexican", price: 345 },
        { name: "Pancakes Stack", cuisine: "American", price: 315 },
        { name: "Greek Veg Wrap", cuisine: "Greek", price: 325 },
        { name: "Mochi Ice Cream", cuisine: "Japanese", price: 320 },
        { name: "Kung Pao Paneer", cuisine: "Chinese", price: 365 },
        { name: "Veg Kofta Curry", cuisine: "Indian", price: 370 },
        { name: "Shrimp Ceviche", cuisine: "Mexican", price: 495 },
        { name: "Classic BLT Sandwich", cuisine: "American", price: 335 },
        { name: "Grilled Halloumi", cuisine: "Greek", price: 450 },
        { name: "Tuna Sushi Roll", cuisine: "Japanese", price: 480 },
      ];

      function handleaddtocart(item){
        const existingitems=cartitems.find((cartitem)=>cartitem.name==item.name)
        if(existingitems){
            setcartitems(cartitems.map((foodItem)=>
                foodItem.name==item.name?
                {...foodItem,quantity:foodItem.quantity+1}:foodItem
            ))

        }else{
            setcartitems([...cartitems,{...item,quantity:1}])
        }
        setcartno(cartno+1)
      }

      function handleincrement(item){
        setcartitems(cartitems.map((foodItem)=>foodItem.name==item.name?
        {...foodItem,quantity:foodItem.quantity+1}:foodItem
        
    ))
        setcartno(cartno+1)
      }

      function handledecrement(item){
        const noofitems=cartitems.find((cartitem)=>cartitem.name==item.name)
        if (noofitems && noofitems.quantity===1){
            setcartitems(cartitems.filter((cartitem)=>cartitem.name!==item.name))
        }else{
            setcartitems(cartitems.map((cartitem)=>
                cartitem.name==item.name?
            {...cartitem,quantity:cartitem.quantity-1}:cartitem
            ))
            setcartno(cartno-1)
        }
      }
    
      function handlequantity(item){
        const cartitem=cartitems.find((cartitem)=>cartitem.name==item.name)
        return cartitem?cartitem.quantity:0
      }
    return (
        <div>
`           <div className="cartdiv">
            <div className="cart">
                <img className="cartimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_H7uzaQjBVh27ubieyx0xNG89B3amksS7g&s" />
                <p className="carttext">Cart</p>
                <span className="cartno">{cartno}</span>
            </div>
            </div>
        <div className="menuCard-container">
            {foodItems.map((data,id)=>{
                const quantity = handlequantity(data);
            return( 
                <div className="menuCard">
                    <div className="menu_image">{data.cuisine=="Italian"?<img className="image_card" src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-italian-dishes-1645372086.jpg"/>
                        :data.cuisine=="Chinese"? <img className="image_card" src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60="/>
                        :data.cuisine=="Japanese"?<img className="image_card" src="https://media.istockphoto.com/id/688006056/photo/japanese-cuisine.jpg?s=612x612&w=0&k=20&c=MOHSpXQ9EFfprrdMaOv9bPn3W9yS10hnhJs791wL6Rc="/>
                        :data.cuisine=="American"?<img className="image_card" src="https://www.shutterstock.com/image-photo/american-style-brunch-tomato-omelette-600nw-2424020343.jpg"/>
                        :data.cuisine=="Indian"?<img className="image_card" src="https://media.istockphoto.com/id/1168659055/photo/various-indian-dishes-featuring-rogan-josh-chicken-tikka-masala-biryani-tandoori-chicken.jpg?s=612x612&w=0&k=20&c=UQHwCReZcVv4gYf7JOz0unQbDKkvmIHf4cjih-EkSLY="/>
                        :data.cuisine=="Mexican"?<img className="image_card" src="https://www.englishclub.com/images/vocabulary/food/mexican/mexican-food.jpg"/>
                        :data.cuisine=="French"?<img className="image_card" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/4f/dc/1f/our-beautiful-french.jpg?w=900&h=500&s=1"/>
                        :data.cuisine=="Greek"?<img className="image_card" src="https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWslMjBmb29kfGVufDB8fDB8fHww"/>
                        :data.cuisine=="Middle Eastern"?<img className="image_card" src="https://media.istockphoto.com/id/833390070/photo/arabic-dishes-and-meze.jpg?s=612x612&w=0&k=20&c=MtWWS3THa19Mnb96iOGfpxOGwdmYNM-Xi0_zAEW9mTY="/>
                        :data.cuisine=="Vegan"||data.cuisine=="Healthy"?<img className="image_card" src="https://cdn.tatlerasia.com/asiatatler/i/ph/2021/04/07174644-ella-olsson-2ixtgsgfi-s-unsplash_cover_1920x1440.jpg"/>:""}
                    </div>

                    <div className="menudetails">
                    <p className="food_name">Dish:{data.name}</p>
                    <p className="fooddetail">Cuisine:{data.cuisine}</p>
                    <p className="fooddetail">Price:₹{data.price}</p>
                    {quantity===0?( <button className="add" onClick={()=>handleaddtocart(data)}>+ Add</button>):
                    <div className="addbuttons">
                    <span onClick={()=>handledecrement(data)}>-</span>
                    <span>{quantity}</span>
                    <span onClick={()=>handleincrement(data)}>+</span>
                    </div>
                    }
                   
                    </div>
                </div>
            
)})}
        </div>
        <div>
            {cartitems.length>0&&(
                <div className="cartitems">
                    <div className="cartdetails">
                    <h2>CartIems</h2>
                    {cartitems.map((item,id)=>(
                        <div>
                        <p>{item.name}</p>
                        {/* <p>{data.cuisine}</p> */}
                        <p>₹{item.price}</p>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}


// "use client"
// import { useState } from "react"

// export default function() {
//   const [cartno, setcartno] = useState(0)
//   const [opencart, setopencart] = useState([])

//   const foodItems = [
//     { name: "Sushi Platter", cuisine: "Japanese", price: 475 },
//     { name: "Kung Pao Chicken", cuisine: "Chinese", price: 340 },
//     { name: "Butter Chicken", cuisine: "Indian", price: 430 },
//     { name: "Tacos al Pastor", cuisine: "Mexican", price: 395 },
//     { name: "Cheeseburger", cuisine: "American", price: 360 },
//     { name: "Moussaka", cuisine: "Greek", price: 450 },
//     { name: "Ramen Bowl", cuisine: "Japanese", price: 410 },
//     { name: "General Tso's Chicken", cuisine: "Chinese", price: 395 },
//     { name: "Paneer Tikka", cuisine: "Indian", price: 380 },
//     { name: "Quesadilla", cuisine: "Mexican", price: 350 },
//     { name: "Hot Dog", cuisine: "American", price: 315 },
//     { name: "Souvlaki", cuisine: "Greek", price: 410 },
//     { name: "Tempura Udon", cuisine: "Japanese", price: 460 },
//     { name: "Sweet and Sour Pork", cuisine: "Chinese", price: 370 },
//     { name: "Chicken Biryani", cuisine: "Indian", price: 445 },
//     { name: "Enchiladas", cuisine: "Mexican", price: 385 },
//     { name: "BBQ Ribs", cuisine: "American", price: 495 },
//     { name: "Greek Salad", cuisine: "Greek", price: 320 },
//     { name: "Teriyaki Chicken", cuisine: "Japanese", price: 425 },
//     { name: "Manchurian", cuisine: "Chinese", price: 335 },
//     { name: "Chole Bhature", cuisine: "Indian", price: 360 },
//     { name: "Nachos Supreme", cuisine: "Mexican", price: 390 },
//     { name: "Fried Chicken", cuisine: "American", price: 470 },
//     { name: "Gyro Wrap", cuisine: "Greek", price: 440 },
//     { name: "Sashimi Deluxe", cuisine: "Japanese", price: 480 },
//     { name: "Dim Sum Platter", cuisine: "Chinese", price: 350 },
//     { name: "Masala Dosa", cuisine: "Indian", price: 310 },
//     { name: "Burrito Bowl", cuisine: "Mexican", price: 430 },
//     { name: "Philly Cheesesteak", cuisine: "American", price: 495 },
//     { name: "Spanakopita", cuisine: "Greek", price: 325 },
//     { name: "Okonomiyaki", cuisine: "Japanese", price: 410 },
//     { name: "Hakka Noodles", cuisine: "Chinese", price: 345 },
//     { name: "Dal Makhani", cuisine: "Indian", price: 370 },
//     { name: "Fajitas", cuisine: "Mexican", price: 400 },
//     { name: "Mac & Cheese", cuisine: "American", price: 355 },
//     { name: "Baklava", cuisine: "Greek", price: 320 },
//     { name: "Katsu Curry", cuisine: "Japanese", price: 460 },
//     { name: "Chow Mein", cuisine: "Chinese", price: 370 },
//     { name: "Rogan Josh", cuisine: "Indian", price: 470 },
//     { name: "Tamales", cuisine: "Mexican", price: 385 },
//     { name: "Buffalo Wings", cuisine: "American", price: 425 },
//     { name: "Greek Yogurt Bowl", cuisine: "Greek", price: 310 },
//     { name: "Udon Noodle Soup", cuisine: "Japanese", price: 405 },
//     { name: "Schezwan Fried Rice", cuisine: "Chinese", price: 365 },
//     { name: "Aloo Paratha", cuisine: "Indian", price: 320 },
//     { name: "Churros with Chocolate", cuisine: "Mexican", price: 350 },
//     { name: "Corn Dog", cuisine: "American", price: 340 },
//     { name: "Greek Lamb Chops", cuisine: "Greek", price: 490 },
//     { name: "Miso Soup", cuisine: "Japanese", price: 330 },
//     { name: "Spring Rolls", cuisine: "Chinese", price: 310 },
//     { name: "Pav Bhaji", cuisine: "Indian", price: 330 },
//     { name: "Fish Tacos", cuisine: "Mexican", price: 410 },
//     { name: "Clam Chowder", cuisine: "American", price: 370 },
//     { name: "Stuffed Grape Leaves", cuisine: "Greek", price: 340 },
//     { name: "Takoyaki", cuisine: "Japanese", price: 445 },
//     { name: "Mongolian Beef", cuisine: "Chinese", price: 480 },
//     { name: "Hyderabadi Haleem", cuisine: "Indian", price: 495 },
//     { name: "Mexican Street Corn", cuisine: "Mexican", price: 360 },
//     { name: "Steak Sandwich", cuisine: "American", price: 455 },
//     { name: "Greek Pita Pizza", cuisine: "Greek", price: 365 },
//     { name: "Yakisoba", cuisine: "Japanese", price: 395 },
//     { name: "Lemon Chicken", cuisine: "Chinese", price: 345 },
//     { name: "Rajma Chawal", cuisine: "Indian", price: 350 },
//     { name: "Guacamole and Chips", cuisine: "Mexican", price: 310 },
//     { name: "Grilled Cheese", cuisine: "American", price: 300 },
//     { name: "Greek Rice Bowl", cuisine: "Greek", price: 370 },
//     { name: "Shabu Shabu", cuisine: "Japanese", price: 500 },
//     { name: "Wonton Soup", cuisine: "Chinese", price: 335 },
//     { name: "Kadhi Pakora", cuisine: "Indian", price: 340 },
//     { name: "Chicken Mole", cuisine: "Mexican", price: 460 },
//     { name: "Sloppy Joe", cuisine: "American", price: 375 },
//     { name: "Greek Chicken Skewers", cuisine: "Greek", price: 420 },
//     { name: "Tonkatsu", cuisine: "Japanese", price: 455 },
//     { name: "Chicken Lollipop", cuisine: "Chinese", price: 390 },
//     { name: "Pani Puri", cuisine: "Indian", price: 310 },
//     { name: "Mexican Rice Bowl", cuisine: "Mexican", price: 390 },
//     { name: "Pulled Pork Burger", cuisine: "American", price: 460 },
//     { name: "Feta Pasta", cuisine: "Greek", price: 385 },
//     { name: "Japanese Curry Rice", cuisine: "Japanese", price: 420 },
//     { name: "Chilli Garlic Noodles", cuisine: "Chinese", price: 370 },
//     { name: "Tandoori Chicken", cuisine: "Indian", price: 465 },
//     { name: "Carne Asada", cuisine: "Mexican", price: 450 },
//     { name: "Cobb Salad", cuisine: "American", price: 375 },
//     { name: "Greek Meatballs", cuisine: "Greek", price: 390 },
//     { name: "Matcha Cheesecake", cuisine: "Japanese", price: 385 },
//     { name: "Mapo Tofu", cuisine: "Chinese", price: 430 },
//     { name: "Chicken Korma", cuisine: "Indian", price: 410 },
//     { name: "Huevos Rancheros", cuisine: "Mexican", price: 345 },
//     { name: "Pancakes Stack", cuisine: "American", price: 315 },
//     { name: "Greek Veg Wrap", cuisine: "Greek", price: 325 },
//     { name: "Mochi Ice Cream", cuisine: "Japanese", price: 320 },
//     { name: "Kung Pao Paneer", cuisine: "Chinese", price: 365 },
//     { name: "Veg Kofta Curry", cuisine: "Indian", price: 370 },
//     { name: "Shrimp Ceviche", cuisine: "Mexican", price: 495 },
//     { name: "Classic BLT Sandwich", cuisine: "American", price: 335 },
//     { name: "Grilled Halloumi", cuisine: "Greek", price: 450 },
//     { name: "Tuna Sushi Roll", cuisine: "Japanese", price: 480 },
//   ];

//   function handleopencart(item) {
//     const existing = opencart.find((i) => i.name === item.name);
//     if (existing) {
//       setopencart(
//         opencart.map((i) =>
//           i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
//         )
//       );
//     } else {
//       setopencart([...opencart, { ...item, quantity: 1 }]);
//     }
//     setcartno(cartno + 1);
//   }

//   function increaseQty(name) {
//     setopencart(
//       opencart.map((i) =>
//         i.name === name ? { ...i, quantity: i.quantity + 1 } : i
//       )
//     );
//     setcartno(cartno + 1);
//   }

//   function decreaseQty(name) {
//     setopencart(
//       opencart
//         .map((i) =>
//           i.name === name ? { ...i, quantity: i.quantity - 1 } : i
//         )
//         .filter((i) => i.quantity > 0)
//     );
//     setcartno(cartno - 1);
//   }

//   return (
//     <div>
//       <div className="cartdiv">
//         <div className="cart">
//           <img
//             className="cartimage"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_H7uzaQjBVh27ubieyx0xNG89B3amksS7g&s"
//           />
//           <p className="carttext">Cart</p>
//           <span className="cartno">{cartno}</span>
//         </div>
//       </div>
//       <div className="menuCard-container">
//         {foodItems.map((data, id) => {
//           const cartItem = opencart.find((i) => i.name === data.name);
//           return (
//             <div className="menuCard" key={id}>
//               <div className="menu_image">
//                 <img className="image_card" src="https://via.placeholder.com/150" />
//               </div>
//               <div className="menudetails">
//                 <p className="food_name">Dish: {data.name}</p>
//                 <p className="fooddetail">Cuisine: {data.cuisine}</p>
//                 <p className="fooddetail">Price: ₹{data.price}</p>
//                 {cartItem ? (
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(data.name)}>-</button>
//                     <span>{cartItem.quantity}</span>
//                     <button onClick={() => increaseQty(data.name)}>+</button>
//                   </div>
//                 ) : (
//                   <button className="add" onClick={() => handleopencart(data)}>
//                     + Add
//                   </button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div>
//         {opencart.length > 0 && (
//           <div className="cartitems">
//             <div className="cartdetails">
//               <h2>Cart Items</h2>
//               {opencart.map((data, id) => (
//                 <div key={id}>
//                   <p>{data.name}</p>
//                   <p>
//                     ₹{data.price} × {data.quantity} = ₹{data.price * data.quantity}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
