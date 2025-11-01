import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyRecipes = ({recipe,recipes,setRecipes}) => {
  console.log(recipes)
    const {_id,title,ingredients,instructions,cuisine,prepTime,category,image} =recipe

    const handleDelete=(_id) =>{
      console.log(_id)
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  console.log(result.isConfirmed)
  if (result.isConfirmed) {
      fetch(`http://localhost:3000/recipes/${_id}`,{
        method:'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.deletedCount){
          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remainingRecipe = recipes.filter(rec =>rec._id !==_id);
          setRecipes(remainingRecipe)
        
        }
        
        console.log(data)
      })

    

  }
});
    }

    return (
        <div className="container mx-auto my-10">
      

      

      {/* Recipe Grid */}
      <div >
        
          <div key={_id} className="border text-center rounded-lg p-4 shadow-lg">
            <img
              src={image || "https://via.placeholder.com/200"}
              alt={title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">Title:{title}</h3>
            <p className="text-gray-600">Cuisine: {ingredients}</p>
            <p className="text-gray-600">instructions: {instructions}</p>
            <p className="text-gray-600">cuisine: {cuisine}</p>
            <p className="text-gray-600">prepTime: {prepTime}</p>
            <p className="text-gray-600">category: {category}</p>

            <Link to={`/updateRecipe/${_id}`}
               className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                Update button
              
            </Link> <br />
            <button onClick={ () =>handleDelete(_id)} 
               className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                Delete button
              
            </button>
          </div>
        
      </div>
    </div>
    );
};

export default MyRecipes;