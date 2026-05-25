import { useState } from "react";
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaStar, FaWrench, FaCalendarCheck, 
  FaLock, FaBell, FaShieldAlt, FaTimes 
} from "react-icons/fa";

function Profile() {
  // Modal States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isNotifModalOpen, setIsNotifModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
        <div className="h-32 bg-gradient-to-r from-[#06132d] to-blue-900"></div>
        <div className="px-8 pb-8 relative">
          <div className="flex justify-between items-end">
            <div className="flex items-end -mt-12 gap-6">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white"
              />
              <div className="pb-2">
                <h1 className="text-3xl font-bold text-gray-800">Ramesh Kumar</h1>
                <p className="text-gray-500 font-medium flex items-center gap-2 mt-1">
                  <FaWrench className="text-yellow-500" /> Expert Plumber
                </p>
              </div>
            </div>
            {/* Open Edit Modal */}
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-xl font-semibold transition-all shadow-sm"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 col-span-1">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <div className="space-y-5">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><FaPhoneAlt /></div>
              <div><p className="text-sm text-gray-400">Phone</p><p className="font-medium">+91 98765 43210</p></div>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600"><FaEnvelope /></div>
              <div><p className="text-sm text-gray-400">Email</p><p className="font-medium">ramesh.k@quickfix.com</p></div>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600"><FaMapMarkerAlt /></div>
              <div><p className="text-sm text-gray-400">Location</p><p className="font-medium">Hyderabad, Telangana</p></div>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"><FaCalendarCheck /></div>
              <div><p className="text-sm text-gray-400">Member Since</p><p className="font-medium">March 2023</p></div>
            </div>
          </div>
        </div>

        {/* Stats & Skills */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 text-center flex flex-col justify-center">
              <h3 className="text-gray-500 text-sm font-medium">Jobs Completed</h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">124</p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 text-center flex flex-col justify-center">
              <h3 className="text-gray-500 text-sm font-medium">Average Rating</h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <p className="text-3xl font-bold text-gray-800">4.8</p>
                <FaStar className="text-yellow-400 text-xl" />
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 text-center col-span-2 sm:col-span-1 flex flex-col justify-center">
              <h3 className="text-gray-500 text-sm font-medium">Total Earned</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">₹1.2L</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Expertise & Skills</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">Pipe Fitting</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">Leak Repairs</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">Water Heater Installation</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">Drain Cleaning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => setIsPasswordModalOpen(true)}
            className="border border-gray-200 p-5 rounded-2xl flex items-center gap-4 hover:border-yellow-400 hover:shadow-md cursor-pointer transition-all"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600"><FaLock size={20} /></div>
            <div>
              <h3 className="font-bold text-gray-800">Change Password</h3>
              <p className="text-sm text-gray-500 mt-1">Update your security</p>
            </div>
          </div>
          <div 
            onClick={() => setIsNotifModalOpen(true)}
            className="border border-gray-200 p-5 rounded-2xl flex items-center gap-4 hover:border-yellow-400 hover:shadow-md cursor-pointer transition-all"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600"><FaBell size={20} /></div>
            <div>
              <h3 className="font-bold text-gray-800">Notifications</h3>
              <p className="text-sm text-gray-500 mt-1">Manage alerts</p>
            </div>
          </div>
          <div 
            onClick={() => setIsPrivacyModalOpen(true)}
            className="border border-gray-200 p-5 rounded-2xl flex items-center gap-4 hover:border-yellow-400 hover:shadow-md cursor-pointer transition-all"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600"><FaShieldAlt size={20} /></div>
            <div>
              <h3 className="font-bold text-gray-800">Privacy</h3>
              <p className="text-sm text-gray-500 mt-1">Control your data</p>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS SECTION */}

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <FaTimes size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600 ml-1">Full Name</label>
                <input type="text" defaultValue="Ramesh Kumar" className="w-full mt-1 p-3 border border-gray-200 rounded-xl outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 ml-1">Phone Number</label>
                <input type="text" defaultValue="+91 98765 43210" className="w-full mt-1 p-3 border border-gray-200 rounded-xl outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 ml-1">Location</label>
                <input type="text" defaultValue="Hyderabad, Telangana" className="w-full mt-1 p-3 border border-gray-200 rounded-xl outline-none focus:border-yellow-400" />
              </div>
              <button onClick={() => setIsEditModalOpen(false)} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-xl font-bold transition-all mt-4">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setIsPasswordModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <FaTimes size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Change Password</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600 ml-1">Current Password</label>
                <input type="password" placeholder="Enter current password" className="w-full mt-1 p-3 border border-gray-200 rounded-xl outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 ml-1">New Password</label>
                <input type="password" placeholder="Enter new password" className="w-full mt-1 p-3 border border-gray-200 rounded-xl outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 ml-1">Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" className="w-full mt-1 p-3 border border-gray-200 rounded-xl outline-none focus:border-yellow-400" />
              </div>
              <button onClick={() => setIsPasswordModalOpen(false)} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-xl font-bold transition-all mt-4">
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Settings Modal */}
      {isNotifModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setIsNotifModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <FaTimes size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Notification Alerts</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                <span className="font-medium text-gray-700">Email Notifications</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-yellow-400 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                <span className="font-medium text-gray-700">SMS Alerts</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-yellow-400 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                <span className="font-medium text-gray-700">New Work Assigned Alerts</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-yellow-400 cursor-pointer" />
              </div>
              <button onClick={() => setIsNotifModalOpen(false)} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-xl font-bold transition-all mt-4">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Settings Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setIsPrivacyModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <FaTimes size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Options</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                <div>
                  <h4 className="font-medium text-gray-700">Public Profile</h4>
                  <p className="text-xs text-gray-500">Allow customers to view your profile</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-yellow-400 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                <div>
                  <h4 className="font-medium text-gray-700">Show Contact Info</h4>
                  <p className="text-xs text-gray-500">Make your phone number visible</p>
                </div>
                <input type="checkbox" className="w-5 h-5 accent-yellow-400 cursor-pointer" />
              </div>
              <button onClick={() => setIsPrivacyModalOpen(false)} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-xl font-bold transition-all mt-4">
                Save Privacy Settings
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Profile;