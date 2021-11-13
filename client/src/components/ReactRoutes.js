<<<<<<< HEAD
import React from 'react';
import Dashboard from './Dashboard';
import EditProfile from './EditProfile';
import LandingPage from './LandingPage';
import Login from './Login';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

import { Route, Routes } from 'react-router-dom';
||||||| parent of 94bf299 (moodFormSol)
import React from 'react';
import CalendarSummary from './CalendarSummary';
import EditProfile from './EditProfile';
import LandingPage from './LandingPage';
import Login from './Login';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import { Route, Routes } from 'react-router-dom';
=======
import React from "react";
import CalendarSummary from "./CalendarSummary";
import EditProfile from "./EditProfile";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import MoodForm from "./MoodForm";
import { Link, Outlet } from "react-router-dom";
>>>>>>> 94bf299 (moodFormSol)

const ReactRoutes = () => {
  return (
    <div className="react-routes">
      <Routes>
        <Route path="/" element={<LandingPage />} />

<<<<<<< HEAD
    return (
        
        <div className="react-routes">

            <Routes>

                <Route path="/" element={<LandingPage />} />

                <Route path="/about-us" element={<AboutUs />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/register" element={<Registration />} />

                <Route path="/contact-us" element={<ContactUs />} />
                
                <Route path="/profile" element={<ProfilePage />} />
                
                <Route path="/edit-profile" element={<EditProfile />} />
                
                <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
        
        </div>
    
       
    )
||||||| parent of 94bf299 (moodFormSol)
    return (
        
        <div className="react-routes">

            <Routes>

                <Route path="/" element={<LandingPage />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/register" element={<Registration />} />
                
                <Route path="/profile" element={<ProfilePage />} />
                
                <Route path="/edit-profile" element={<EditProfile />} />
                
                <Route path="/calendar" element={<CalendarSummary />} />

            </Routes>
        
        </div>
    
       
    )
=======
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/calendar" element={<CalendarSummary />} />

        <Route path="/moodform" element={<MoodForm />} />
      </Routes>
      <Link to="/moodform" />
      <Outlet />
    </div>
  );
>>>>>>> 94bf299 (moodFormSol)
};

export default ReactRoutes;
