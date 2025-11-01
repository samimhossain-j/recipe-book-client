import React from 'react';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateRecipe = () => {
    const { _id, image, title, ingredients, instructions, cuisine, prepTime, checkbox } = useLoaderData()
    const navigate = useNavigate();

    const handleUpdateRecipe = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipes = Object.fromEntries(formData.entries());
        console.log(newRecipes)

        fetch(`http://localhost:3000/recipes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipes)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "updated successful ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/recipe')
                }
            })

    }
    return (
        <div className="max-w-lg mx-auto bg-white shadow p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Update a New Recipe</h2>
            <form onSubmit={handleUpdateRecipe} className="space-y-3">
                <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Image URL"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    placeholder="Title"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="ingredients"
                    defaultValue={ingredients}
                    placeholder="Ingredients"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="instructions"
                    defaultValue={instructions}
                    placeholder="Instructions"
                    className="w-full border p-2 rounded"
                    required
                />

                {/* Cuisine dropdown */}
                <select
                    name="cuisine"
                    defaultValue={cuisine}
                    className="w-full border p-2 rounded"
                >
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    <option>Others</option>
                </select>

                <input
                    type="number"
                    name="prepTime"
                    defaultValue={prepTime}
                    placeholder="Preparation Time (minutes)"
                    className="w-full border p-2 rounded"
                    required
                />

                {/* Categories checkboxes */}
                <div className="space-y-1">
                    {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
                        <label key={cat} className="block">
                            <input
                                type="checkbox"
                                name="checkbox"
                                defaultValue={checkbox}
                                className="mr-2"
                            />
                            {cat}
                        </label>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Update Recipe
                </button>
            </form>
        </div>
    );
};

export default UpdateRecipe;