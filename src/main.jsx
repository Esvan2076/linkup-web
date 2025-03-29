import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes>
   </BrowserRouter>
);