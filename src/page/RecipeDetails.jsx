import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {

	const recipes = useLoaderData();

	const { id } = useParams();
	const [data, setData] = useState([])

	useEffect(() => {
		const filterData = recipes.filter((recipe) => recipe._id ==id)
		setData(filterData)
	}, [recipes, id])



	return (
		<div>
			{
				data.map(recipe =>(
					<div className="max-w-lg p-4 m-10 mx-auto shadow-md bg-gray-50 rounded-2xl ">
	
	<div className="space-y-4 text-center">
		<div className="space-y-2">
			<img src={recipe.image} alt="" className="border border-gray-400 object-cover mx-auto w-72  rounded-md h-72 bg-gray-200" />
		</div>
		<div className="space-y-2 text-center">
				<h3 className="text-xl font-semibold dark:text-violet-600">Title: {recipe.title}</h3>
				<h3 className="text-xl font-semibold dark:text-violet-600">Ingredients: {recipe.ingredients}</h3>
				<h3 className="text-xl font-semibold dark:text-violet-600">Instructions: {recipe.instructions}</h3>
				<h3 className="text-xl font-semibold dark:text-violet-600">Cuisine Type: {recipe.cuisine}</h3>
				<h3 className="text-xl font-semibold dark:text-violet-600">Preparation Time: {recipe.prepTime} minutes</h3>
				<h3 className="text-xl font-semibold dark:text-violet-600">Categories: {recipe.checkbox}</h3>

			
		</div>
		<Link  to='/allRecipes' className='btn btn-active bg-center'>back all recipe </Link >
	</div>
</div>
				))
			}

		</div>
	);
};

export default RecipeDetails;