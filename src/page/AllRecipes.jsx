// import React from 'react';

// const AllRecipes = () => {
//     return (
//        <div className="card bg-base-100 w-96 mx-auto shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//     );
// };

// export default AllRecipes;
import { useLoaderData, Link } from "react-router-dom";

const AllRecipes = () => {
  const recipes = useLoaderData();
  console.log(recipes)

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Recipes</h2>

      {/* Filter Dropdown
      <div className="text-center mb-5">
        <select className="border p-2 rounded">
          <option value="">All Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Others">Others</option>
        </select>
      </div> */}

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={recipe.image || "https://via.placeholder.com/200"}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
            <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
            <p className="text-gray-600">Likes: {recipe.likes}</p>

            <Link to={`/recipeDetails/${recipe._id}`}>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
