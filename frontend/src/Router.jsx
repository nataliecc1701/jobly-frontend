import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import CompaniesList from "./CompaniesList";
import CompanyPage from "./CompanyPage";
import JobsList from "./JobsList";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";

const Router = () => {
    return <BrowserRouter>
        <NavBar />
        
        <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/companies" element={<CompaniesList />} />
            <Route path="/companies/:id" element={<CompanyPage />} />
            <Route path="/jobs" element={<JobsList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<div>Page Not Found (404)</div>} />
        </Routes>
    </BrowserRouter>
}

export default Router;