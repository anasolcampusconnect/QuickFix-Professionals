import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaHistory,
  FaMoneyBill,
  FaCalendar,
  FaStar,
  FaComments,
  FaUser,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Assigned Works", path: "/assigned-works", icon: <FaBriefcase /> },
    { name: "Work Details", path: "/work-details", icon: <FaBriefcase /> },
    { name: "Work History", path: "/work-history", icon: <FaHistory /> },
    { name: "Earnings", path: "/earnings", icon: <FaMoneyBill /> },
    { name: "Schedule", path: "/schedule", icon: <FaCalendar /> },
    { name: "Reviews", path: "/reviews", icon: <FaStar /> },
    { name: "Messages", path: "/messages", icon: <FaComments /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
  ];

  return (
    <div className={`${isSidebarOpen ? 'w-72' : 'w-20'} h-screen bg-[#06132d] text-white flex flex-col fixed left-0 top-0 transition-all duration-300 z-[60] shadow-2xl`}>
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute -right-4 top-10 bg-yellow-400 text-black w-8 h-8 rounded-full z-[70] border-4 border-[#06132d] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg"
      >
        {isSidebarOpen ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
      </button>

      {/* Top Header */}
      <div className={`p-5 pb-2 flex flex-col justify-center ${!isSidebarOpen ? 'items-center px-0 mt-2' : ''}`}>
        <h1 className={`font-bold text-yellow-400 transition-all duration-300 ${isSidebarOpen ? 'text-4xl mb-1' : 'text-xl'}`}>
          {isSidebarOpen ? "Quickfix" : "QF"}
        </h1>
        {isSidebarOpen && (
          <p className="text-sm text-gray-300 font-medium tracking-wide mb-6">
            Professionals Panel
          </p>
        )}
      </div>

      {/* Scrollable Menu Items */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden px-4 pb-5 space-y-3 mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            title={!isSidebarOpen ? item.name : ""}
            className={`flex items-center p-3.5 rounded-2xl transition-all duration-300 ${
              location.pathname === item.path
                ? "bg-yellow-400 text-black"
                : "hover:bg-[#0d1d3d]"
            } ${isSidebarOpen ? "gap-4" : "justify-center"}`}
          >
            <span className="text-xl">{item.icon}</span>
            {isSidebarOpen && (
              <span className="font-medium whitespace-nowrap">
                {item.name}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Bottom Logout */}
      <div className="p-4 mt-auto border-t border-gray-800">
        <button 
          onClick={() => navigate("/")}
          title={!isSidebarOpen ? "Logout" : ""}
          className={`w-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 transition-all rounded-2xl flex items-center justify-center font-semibold ${isSidebarOpen ? "p-4 gap-3" : "p-4"}`}
        >
          <FaSignOutAlt className="text-xl" />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </div>

    </div>
  );
}

export default Sidebar;