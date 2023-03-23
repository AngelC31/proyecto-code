import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, } from "./pages";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About";
import './App.css'
import FormLogin from "./pages/FormLogin";
import FormRegister from "./pages/FormRegister";
import User from "./components/User";
import Navigation from "./components/Navigation";



function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
        form:{
          
        }
    });
  const logout = () => setUser(null);

  const url='http://ApiGhostGym.somee.com/api/Usuarios'
    const fetchApi= async()=>{
        const response= await fetch(url)
        console.log(response.status)
    }
    useEffect(()=>{
      fetchApi()
    },[])
 

  return (
    
    <BrowserRouter>
      <Navigation />


      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/form" element={<FormLogin/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/formr" element={<FormRegister/>} />
        <Route path="/user" element={<User/>} />
        
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}



export default App