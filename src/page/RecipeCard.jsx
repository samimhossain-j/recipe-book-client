import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({recipe}) => {
    const {image,title,cuisine,_id} =recipe;
    return (
       <div className="card bg-white w-96 border-2 gap-2 shadow-sm">
  <figure className="px-10 pt-10">
    <img 
      src={image}
      alt="Shoes"
      className="rounded-xl w-xl h-xl border bg-gray-200 border-gray-400" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Title:{title}</h2>
    <h2 className="card-title">Cuisine-Type:{cuisine}</h2>

    <div className="card-actions">
      <Link to={`/recipeDetails/${_id}`} className="btn btn-primary">See Details</Link>
    </div>
  </div>
</div>
    );
};

export default RecipeCard;