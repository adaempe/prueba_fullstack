import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import  LoginPage  from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ListaPage from "./pages/ListaPage";
import {PokesPage} from "./pages/ListaBD";
import ProtectedRoute from "./ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { PokeProvider } from "./context/pokesContext";

function App() {
  return (
    <AuthProvider>
       <PokeProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute/>}>
              <Route path="/lista" element={< ListaPage/> }/>
              <Route path="/ListaBD" element={< PokesPage/> }/>
              <Route path="/listado" element={< HomePage/> }/>
                
                <Route path="/profile" element={<h1>Profile</h1>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
        </PokeProvider>
    </AuthProvider>
  );
}

export default App;
