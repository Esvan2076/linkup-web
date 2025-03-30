import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import MentorPage from "./components/pages/MentorPage";
import DreamsPage from "./components/pages/DreamsPage";
import SignUpPage from "./components/pages/SignUpPage";
import SelectorPage from "./components/pages/SelectorPage";
import SignUpPageMentor from "./components/pages/SignUpPageMentor";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/mentores" element={<MentorPage />} />
         <Route path="/suenos" element={<DreamsPage />} />
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="/signupMentor" element={<SignUpPageMentor />} />
         <Route path="/signupSelector" element={<SelectorPage />} />
      </Routes>
   </BrowserRouter>
);