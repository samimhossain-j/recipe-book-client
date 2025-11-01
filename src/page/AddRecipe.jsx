import Swal from "sweetalert2";



const AddRecipe = () => {

    const handleAddRecipe = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const newRecipe = Object.fromEntries(formData.entries())
        console.log(newRecipe)

        fetch("http://localhost:3000/recipes", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                console.log('this is new recipes', data)
                Swal.fire({
                    title: " Recipes added successfully",
                    icon: "success",
                    draggable: true
                });
                form.reset(); 
            })

    }


    return (
        <div className="max-w-lg mx-auto bg-white shadow p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>
            <form onSubmit={handleAddRecipe} className="space-y-3">
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="ingredients"
                    placeholder="Ingredients"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="instructions"
                    placeholder="Instructions"
                    className="w-full border p-2 rounded"
                    required
                />

                {/* Cuisine dropdown */}
                <select
                    name="cuisine"
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
                                value={cat}
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
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipe;




