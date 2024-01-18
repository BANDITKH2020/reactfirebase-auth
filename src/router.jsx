import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

const element = createRoutesFromElements(
    <>
     <Route path="/" element={<p>Home !!! </p>}/>
     <Route path="login" element={<Login />}/>
     <Route path="register" element={<Register />}/>
     <Route path="dashboard" element={<Dashboard />}/>
    </>
)

const router = createBrowserRouter(element);

export default router;