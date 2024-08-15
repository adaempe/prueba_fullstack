import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext"

function ProtectedRoute(){

 const {user, isAuthenticated,loading} =  useAuth()
   console.log(loading, isAuthenticated)

   if(loading) return <h1>Cargandooo</h1>
 if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

 
 return <Outlet/>
    
}
export default ProtectedRoute