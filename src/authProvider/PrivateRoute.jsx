import React from 'react';
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../page/Loading';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

 const {user,loading} = use(AuthContext)
 const location = useLocation();
 console.log(location)

 if(loading){
    return <Loading></Loading>
 }
 if(user && user?.email){
   return children
 }
 return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    

};

export default PrivateRoute;