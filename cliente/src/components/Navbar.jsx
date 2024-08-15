import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/listado" : "/"}>Lista Pokemon</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <ButtonLink to="/lista">Buscar</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/listaBD">Ver </ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Crear cuenta</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
