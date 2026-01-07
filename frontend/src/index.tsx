
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './index.css';
import Layout from "./components/Layout";
import App from "./App";
import LoginPage from "./pages/Auth/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProfileDashboard from "./pages/ProfileDashboard";
import ProfilePage from "./pages/ProfilePage";
import reportWebVitals from './reportWebVitals';
import CartItem from "./components/CartItem";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      {/* Layout wraps all pages that share Navbar & Footer */}
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
        <Route path="product" element={<App />} />  
        <Route path="profile" element={<ProfileDashboard />}>  
       <Route index element={<ProfilePage />} />             {/* profile overview */}
        <Route path="edit-profile" element={<EditProfile />} />  {/* nested edit page */}
        <Route path="change-password" element={<ChangePassword />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="home" element={<Navigate to ="/" replace/>}/>
        <Route path="register" element={<RegisterPage />} />
        {/* Add more pages here */}
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
