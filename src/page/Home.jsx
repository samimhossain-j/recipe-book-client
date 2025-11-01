import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';

const Home = () => {
  const initialRecipes = useLoaderData();
    return (
 <div>
       
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-3'>
        {
        initialRecipes.map(recipe =><RecipeCard
           key={recipe._id}
            recipe={recipe}
            ></RecipeCard>)
      }
      </div>
 </div>
    );
};

export default Home;