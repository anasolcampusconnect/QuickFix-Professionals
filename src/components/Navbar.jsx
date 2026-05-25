import { FaBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/assigned-works": "Assigned Works",
    "/work-details": "Work Details",
    "/work-history": "Work History",
    "/earnings": "Earnings",
    "/schedule": "Schedule",
    "/reviews": "Reviews",
    "/messages": "Messages",
    "/profile": "Profile",
    "/notifications": "Notifications",
  };

  const currentTitle = pageTitles[location.pathname] || "Quickfix Panel";

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md px-8 py-5 flex items-center justify-between">
      
      {/* Left - Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {currentTitle}
        </h1>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-6">

        {/* Notifications */}
        <Link to="/notifications" className="relative cursor-pointer">
          <FaBell className="text-2xl text-gray-700 hover:text-gray-900 transition-colors" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
            3
          </span>
        </Link>

        {/* Profile Pic Clickable Routing */}
        <Link to="/profile">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="profile"
            className="w-11 h-11 rounded-full border-2 border-yellow-400 cursor-pointer hover:shadow-md hover:scale-105 transition-all"
          />
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar;