// import { FaTimes } from "react-icons/fa";

// function Wishlist() {
//   const wishlistItems = [
//     {
//       id: 1,
//       name: "StyleCast Men Shirt Collar",
//       price: 1619,
//       oldPrice: 3949,
//       discount: "59% OFF",
//       image:
//         "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
//     },
//     {
//       id: 2,
//       name: "glitchez Ribbed Half-Zip",
//       price: 399,
//       oldPrice: 1999,
//       discount: "80% OFF",
//       image:
//         "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
//     },
//     {
//       id: 3,
//       name: "Kotty Men Shirt Collar",
//       price: 490,
//       oldPrice: 2499,
//       discount: "80% OFF",
//       image:
//         "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
//     },
//     {
//       id: 4,
//       name: "HERE&NOW Chelsea Boots",
//       price: 698,
//       oldPrice: 1615,
//       discount: "57% OFF",
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
//     },
//     {
//       id: 5,
//       name: "BS BLUE SQUAD Shirt",
//       price: 712,
//       oldPrice: 1499,
//       discount: "52% OFF",
//       image:
//         "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold mb-10">
//         My Wishlist
//         <span className="font-normal text-gray-500 ml-2">
//           {wishlistItems.length} items
//         </span>
//       </h1>

//       {/* Wishlist Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//         {wishlistItems.map((item) => (
//           <div key={item.id} className="border bg-white group relative">
//             {/* Remove Button */}
//             <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
//               <FaTimes className="text-gray-500 text-sm" />
//             </button>

//             {/* Product Image */}
//             <img
//               src={item.image}
//               alt={item.name}
//               className="h-80 w-full object-cover"
//             />

//             {/* Product Info */}
//             <div className="p-4">
//               <h3 className="truncate text-lg">{item.name}</h3>

//               <div className="mt-3 flex items-center gap-2 flex-wrap">
//                 <span className="font-bold text-xl">₹{item.price}</span>

//                 <span className="line-through text-gray-400">
//                   ₹{item.oldPrice}
//                 </span>

//                 <span className="text-orange-500 font-semibold text-sm">
//                   ({item.discount})
//                 </span>
//               </div>
//             </div>

//             {/* Move To Bag Button */}
//             <button className="w-full border-t py-4 text-pink-500 font-bold hover:bg-pink-50 transition">
//               MOVE TO BAG
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;
