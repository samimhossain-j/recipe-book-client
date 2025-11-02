import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Home from "../page/Home";
import AddRecipe from "../page/AddRecipe";
import AllRecipes from "../page/AllRecipes";
import MyRecipes from "../page/MyRecipes";
import Error from "../page/Error";
import AuthLayout from "../page/AuthLayout";
import Login from "../page/Login";
import Registration from "../page/Registration";
import RecipeDetails from "../page/RecipeDetails";
import Recipe from "../page/Recipe";
import UpdateCoffee from "../page/UpdateRecipe";
import UpdateRecipe from "../page/UpdateRecipe";
import PrivateRoute from "../authProvider/PrivateRoute";
import Loading from "../page/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("https://assignment-10-server-ih66.onrender.com/recipes");
          const data = await res.json();
          return data
        }
        ,
        Component: Home
      },
      {
        path: 'addRecipe',
        element:<PrivateRoute>
          <AddRecipe></AddRecipe>
        </PrivateRoute>
      },
      {
        path: 'allRecipes',
        element: <AllRecipes></AllRecipes>,
          
        loader: () => fetch("https://assignment-10-server-ih66.onrender.com/recipes"),
        
      },
      {
        path: 'recipe',
        element: <PrivateRoute >
          <Recipe></Recipe>
        </PrivateRoute>,
        loader: () => fetch("https://assignment-10-server-ih66.onrender.com/recipes"),

      },
      {
        path: 'updateRecipe/:id',
        loader: ({ params }) => fetch(`https://assignment-10-server-ih66.onrender.com/recipes/${params.id}`),

        Component: UpdateRecipe,
      },
      {
        path: 'recipeDetails/:id',

        Component: RecipeDetails,
        loader: () => fetch("https://assignment-10-server-ih66.onrender.com/recipes"),

      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Registration
      },

    ]
  },
  {
    path: '/*',
    Component: Error
  }
]);

export default router