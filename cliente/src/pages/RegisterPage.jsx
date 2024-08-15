import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "../components/ui";


function RegisterPage(){

  const  {
    register,
    handleSubmit,
    formState: { errors },
  } =useForm();
 const {signup, isAuthenticated, errors: registerErrors} =useAuth();
 
 const navigate = useNavigate();


 useEffect(() => {
  if (isAuthenticated){
    Swal.fire("Te has registrado con exito", "Bienvenido!", "success");
    navigate("/listado");}

}, [isAuthenticated]);

  return(

    <div className="flex h-[calc(100vh-100px)] items-center justify-center">

    <div  className="bg-zinc-800 max-w-md p-10 rounded-md">
    <h1 className="text-2xl font-bold">Crear Cuenta</h1>

   {registerErrors?.map((error, i) => (
       <div className="bg-red-500 p-2 text-white my-2" key={i}>  {error} </div>
        ))}

<form onSubmit={

handleSubmit(async (values) =>{
  console.log(values);
 signup(values);


})}>
  
<input type="text" {...register('username', {required: true})}
className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
placeholder="Username"
/>
{errors.username && (
            <p className="text-red-500">Es requerido</p>
          )}
<input type="email"  {...register('email', {required: true})}
className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"

placeholder="email"
/>

{errors.email && (
            <p className="text-red-500">Es requerido</p>
          )}

<input type="password" {...register('password', {required: true})}
className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
placeholder="Password"

/>

{errors.password && (
            <p className="text-red-500">Es requerido</p>
          )}

<Button type="submit">
Registrar
</Button>

</form>
<p className="flex gap-x-2 justify-between">
        Ya tienes cuenta? <Link to="/login" className="text-sky-500">Login</Link>
        </p>

    </div>
    </div>
  )
}

export default RegisterPage;