import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"; //
import Login from "./Pages/Login"; //
import About from "./Pages/About"; //
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users";
import Jobs from "./Pages/Jobs";
import Profile from "./Pages/Profile";
import Course from "./Pages/Course";
import CourseDetailPage from "./Pages/CourseDetailPage";
import CourseStudent from "./Pages/CourseStudent";
import ProtectedRoute from "./components/ProtectedRoute";
import Counter from "./Pages/Counter";

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseName" element={<CourseDetailPage />} />
        <Route path="/course/:courseName/student" element={<CourseStudent />} />
        <Route path="/counter" element={<Counter />} />


        {/* nested routing start  */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route path="users" element={<Users />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* nested routing end  */}
        
      </Routes>
      <ProtectedRoute />
    </BrowserRouter>
  );
};

export default App;



// React App mein React Router DOM ki need kyun pari?
// SPA kya hoti hai?
// Routing kya hoti hai?


// React Router DOM installation -->  npm install react-router-dom

// <Routes>
// <Route path={"/login"} element={<Login />} />
// <Route path={"/signup"} element={<Signup />} />
//  </Routes>


// BrowserRouter kya hai?
// Routes kya hai?
// Route kya hai?
// Link kya hai?


// Nested Routing --> 
// Nested routing ki need kyun?
// Outlet kya hai?
// Ye internally kaise work karta hai?


// Dynamic Routing -->
// Dynamic Route mein :id
// Dynamic parameter kaise receive karenge?


// Protected Routing -->
// Dynamic Nested Routing -->

