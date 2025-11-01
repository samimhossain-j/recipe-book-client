import React from 'react';
import { NavLink } from 'react-router';
import book from '../assets/book.jpg'
import { Link } from 'react-router';
import { use } from 'react';
import img from '../assets/baked-meatballs-chicken-fillet-tomato-sauce (1).jpg'
import { AuthContext } from '../authProvider/AuthProvider';
import { useState } from 'react';

const Navbar = () => {
	const { user, logOut } = use(AuthContext)
	const [open, setOpen] = useState(false)

	const handleLogOut = () => {
		console.log('logout')
		logOut()
			.then(() => {
				alert('logOut successful')
			})
			.catch(error => {
				const errorMessage = error.errorMessage
				alert(errorMessage)
			})
	}
	return (
		<header className="  p-4 bg-cyan-950 text-white min-w-screen">
			<div className="container flex justify-between h-16 mx-auto">
				<div className='flex  justify-center items-center gap-1'>
					<img className='rounded-full hidden md:block w-15 h-15' src={book} alt="" />
					<div>
					{
						user && user.email
					}
				</div>
				</div>
				
				<ul className="items-stretch  space-x-3 flex">
					<NavLink to="/" className="flex items-center px-4 -mb-1 font-semibold">Home</NavLink>
					<NavLink to='/allRecipes' className="flex items-center px-4 -mb-1 font-semibold">All Recipes</NavLink>
					<NavLink to='/addRecipe' className="flex items-center px-4 -mb-1 font-semibold">Add Recipe</NavLink>
					<NavLink to='/recipe' className="flex items-center px-4 -mb-1 font-semibold">My Recipes</NavLink>

				</ul>
				<div className="items-center gap-2 flex-shrink-0    flex">
					{
						user ? (
							<div>
								<button  >
									<img onClick={() => setOpen(!open)}
										className="w-10 h-10 rounded-full "

										src={user?.photo ||img }
										 alt="" />
								</button>
								{
									open && (
										<div className='flex-col p-1 text-center  bg-gray-500 py- rounded-xl'>
											<p>{user?.displayName}</p>
											<button onClick={handleLogOut} >logOut</button>

										</div>
									)

								}
							</div>
						) : (
							<>
								<Link to="/auth/login" className="self-center bg-green-500 text-white font-semibold px-8 py-3 rounded">Login</Link>
								<Link to='/auth/register' className="self-center bg-green-500 text-white font-semibold px-8 py-3 rounded">Register</Link>

							</>
						)
					}

				</div>

			</div>
		</header>
	);
};

export default Navbar;