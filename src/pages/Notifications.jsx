import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaCheckCircle, 
  FaInfoCircle, 
  FaStar, 
  FaRegStar,
  FaCalendarAlt,
  FaWallet,
  FaWrench,
  FaTrash
} from "react-icons/fa";

// Mock data updated with 'starred' state and actual routing paths
const initialNotifications = [
  {
    id: 1,
    type: "payment",
    title: "Payment Received",
    message: "A payment of ₹1,200 for the AC Repair job at Jubilee Hills has been credited to your wallet.",
    time: "10 mins ago",
    unread: true,
    starred: false,
    actionText: "View Earnings",
    path: "/earnings" 
  },
  {
    id: 2,
    type: "job",
    title: "New Job Assigned",
    message: "You have a new Home Cleaning assignment scheduled for tomorrow at 10:00 AM.",
    time: "2 hours ago",
    unread: true,
    starred: true, // Example of pre-starred
    actionText: "View Details",
    path: "/work-details"
  },
  {
    id: 3,
    type: "schedule",
    title: "Schedule Change Request",
    message: "Client Rohit Verma requested to reschedule tomorrow's appointment to 4:00 PM.",
    time: "Yesterday, 3:45 PM",
    unread: false,
    starred: false,
    actionText: "Check Schedule",
    path: "/schedule"
  },
  {
    id: 4,
    type: "review",
    title: "New 5-Star Review",
    message: "Priya Patel left you a 5-star review: 'Excellent and punctual service!'",
    time: "Yesterday, 1:15 PM",
    unread: false,
    starred: false,
    actionText: "Read Review",
    path: "/reviews"
  },
  {
    id: 5,
    type: "system",
    title: "Profile Verification Complete",
    message: "Your background check and skill verification have been successfully approved.",
    time: "Mon, 10:00 AM",
    unread: false,
    starred: false,
    actionText: "View Profile",
    path: "/profile"
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'unread', or 'starred'
  const navigate = useNavigate();

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const toggleStar = (e, id) => {
    e.stopPropagation(); // Prevents triggering the parent div's onClick
    setNotifications(notifications.map(n => n.id === id ? { ...n, starred: !n.starred } : n));
  };

  const deleteNotification = (e, id) => {
    e.stopPropagation();
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleActionClick = (e, path) => {
    e.stopPropagation();
    if (path) navigate(path);
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === "unread") return n.unread;
    if (activeTab === "starred") return n.starred;
    return true; // 'all'
  });

  const getIconConfig = (type) => {
    switch (type) {
      case 'payment': return { icon: <FaWallet />, bg: 'bg-green-100', text: 'text-green-600' };
      case 'job': return { icon: <FaWrench />, bg: 'bg-blue-100', text: 'text-blue-600' };
      case 'schedule': return { icon: <FaCalendarAlt />, bg: 'bg-orange-100', text: 'text-orange-500' };
      case 'review': return { icon: <FaStar />, bg: 'bg-yellow-100', text: 'text-yellow-500' };
      case 'system': return { icon: <FaInfoCircle />, bg: 'bg-gray-100', text: 'text-gray-600' };
      default: return { icon: <FaCheckCircle />, bg: 'bg-gray-100', text: 'text-gray-600' };
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      {/* Header & Controls */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Notifications</h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "all" ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab("unread")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === "unread" ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Unread
              {notifications.filter(n => n.unread).length > 0 && (
                <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                  {notifications.filter(n => n.unread).length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setActiveTab("starred")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "starred" ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Starred
            </button>
          </div>

          <button 
            onClick={markAllAsRead}
            className="text-sm font-semibold text-[#06132d] hover:text-blue-700 transition-colors"
          >
            Mark all as read
          </button>
        </div>
      </div>

      {/* Notifications Feed */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-3xl text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Nothing here!</h3>
            <p className="text-gray-500 mt-1 text-sm">You are all caught up on this tab.</p>
          </div>
        ) : (
          filteredNotifications.map((notif) => {
            const { icon, bg, text } = getIconConfig(notif.type);
            
            return (
              <div 
                key={notif.id} 
                onClick={() => markAsRead(notif.id)}
                className={`relative group flex gap-4 p-5 rounded-2xl border transition-all duration-200 cursor-pointer
                  ${notif.unread 
                    ? 'bg-blue-50/30 border-blue-100 shadow-sm' 
                    : 'bg-white border-gray-200 hover:bg-gray-50'}`}
              >
                {/* Unread Indicator */}
                {notif.unread && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-500 rounded-r-full"></div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${bg} ${text} text-xl`}>
                  {icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 pr-10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-1 gap-1 sm:gap-4">
                    <h3 className={`text-base truncate ${notif.unread ? 'font-bold text-gray-900' : 'font-semibold text-gray-800'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                      {notif.time}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {notif.message}
                  </p>

                  {/* Action Button that Redirects */}
                  {notif.actionText && (
                    <button 
                      onClick={(e) => handleActionClick(e, notif.path)}
                      className="text-sm font-semibold text-[#06132d] hover:text-yellow-600 transition-colors"
                    >
                      {notif.actionText} &rarr;
                    </button>
                  )}
                </div>

                {/* Action Icons (Star & Delete) - Visible on hover or when starred */}
                <div className={`absolute right-4 top-4 flex gap-3 flex-col sm:flex-row transition-opacity duration-200
                  ${notif.starred ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  
                  <button 
                    onClick={(e) => toggleStar(e, notif.id)}
                    className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-yellow-50 transition-colors"
                  >
                    {notif.starred ? (
                      <FaStar className="text-yellow-400 text-sm" />
                    ) : (
                      <FaRegStar className="text-gray-400 hover:text-yellow-400 text-sm" />
                    )}
                  </button>

                  <button 
                    onClick={(e) => deleteNotification(e, notif.id)}
                    className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-red-50 transition-colors"
                  >
                    <FaTrash className="text-gray-400 hover:text-red-500 text-sm" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Notifications;