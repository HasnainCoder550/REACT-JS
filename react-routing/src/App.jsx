// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";

// export default function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation menu */}
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Route matching engine */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About /> } />
//         <Route path="/contact" element={<Contact />} />
//         {/* Fallback 404 Route */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Home() { return <h1>Welcome Home</h1>; }
// function About() { return <h1>About Us</h1>; }
// function Contact() { return <h1>Contact Page</h1>; }
// function NotFound() { return <h1>404 - Page Not Found</h1>; }

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar />
//       <Routes>
         
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



// import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
        
//         {/* 1. Parent Route Container */}
//         <Route path="/dashboard" element={<DashboardLayout />}>
//           {/* 2. Nested Child Routes */}
//           <Route path="profile" element={<UserProfile />} />
//           <Route path="settings" element={<UserSettings />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // Parent Layout Component
// function DashboardLayout() {
//   return (
//     <div style={{ display: "flex" }}>
//       <aside style={{ width: "200px", background: "#f0f0f0" }}>
//         <h3>Dashboard Sidebar</h3>
//         <Link to="profile">My Profile</Link> <br />
//         <Link to="settings">Account Settings</Link>
//       </aside>
      
//       <main style={{ padding: "20px" }}>
//         <h2>Main Area</h2>
//         {/* 3. The Outlet acts as a window where child views appear */}
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// function UserProfile() { return <p>This is the Profile View Component.</p>; }
// function UserSettings() { return <p>This is the Settings View Component.</p>; }
// function Home() { return <Link to="/dashboard/profile">Go to Dashboard</Link>; }




import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Setting from "./Pages/Setting";
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />} >
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />
      
      </Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
