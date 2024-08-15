
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { Button } from "../components/ui";


import { Link, useNavigate } from "react-router-dom";



function LoginPage(){

  const  {
    register,
    handleSubmit,
    formState: { errors },
  } =useForm();

  const {signin, errors: signinErrors, isAuthenticated} =useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/listado");
    }
  }, [isAuthenticated]);
  return(
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
<div className="bg-zinc-800 max-w-md p-10 rounded-md ">  
<h1 className="text-2xl font-bold">Login</h1>

{signinErrors?.map((error, i) => (
       <div className="bg-red-500 p-2 text-white my-2" key={i}>  {error} </div>
        ))}


<form onSubmit={handleSubmit(onSubmit)}>
  

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
iniciar
</Button>

</form> 


<p className="flex gap-x-2 justify-between">
No tienes cuenta? <Link to="/register" className="text-sky-500">Registrarse</Link>
</p>
</div>
    </div>
  )
}

export default LoginPage