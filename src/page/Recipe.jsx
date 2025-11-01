import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyRecipes from './MyRecipes';

const Recipe = () => {
    const initiaRecipes=useLoaderData()
    const [recipes,setRecipes] = useState(initiaRecipes)
    return (
        <div> <h2 className="text-3xl font-bold text-center mb-8">My Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               
                {
                    recipes.map(recipe =><MyRecipes
                    key={recipe._id}
                     recipe = {recipe}
                     recipes={recipes}
                         setRecipes ={setRecipes}
                    >
                    </MyRecipes>
                        
                         )
                }
            </div>
        </div>
    );
};

export default Recipe;