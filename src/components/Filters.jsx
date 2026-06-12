// import { useProducts } from "../context/productContext";

// function Filters() {
//   const { filterByCategory } = useProducts();

//   const categories = [
//     "ALL",
//     "MEN",
//     "WOMEN",
//     "BEAUTY",
//     "SKIN",
//     "ACCESSORIES",
//     "FOOTWEAR",
//     "GENZ",
//   ];

//   return (
//     <div className="flex gap-4 overflow-x-auto border-b py-4 px-6">
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => filterByCategory(category)}
//           className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition"
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Filters;