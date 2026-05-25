import { useState } from "react";

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AssignedWorks from "./pages/AssignedWorks";
import WorkDetails from "./pages/WorkDetails";
import WorkHistory from "./pages/WorkHistory";
import Earnings from "./pages/Earnings";
import Schedule from "./pages/Schedule";
import Reviews from "./pages/Reviews";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-ye-50 flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div
        className={`transition-all duration-300 min-h-screen flex-1 ${
          isSidebarOpen ? "ml-72" : "ml-20"
        }`}
      >
        <Navbar />

        <div className="p-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assigned-works" element={<AssignedWorks />} />
            <Route path="/work-details" element={<WorkDetails />} />
            <Route path="/work-history" element={<WorkHistory />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;