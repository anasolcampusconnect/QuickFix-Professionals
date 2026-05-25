import React, { useState } from "react";
import {
  Briefcase,
  CalendarDays,
  Clock3,
  MapPin,
  User,
  Phone,
  BadgeCheck,
  FileText,
  IndianRupee,
  Star,
  CheckCircle2,
  AlertCircle,
  TimerReset,
  ClipboardList,
  MessageSquare,
  Navigation,
  History,
  Tv,
  Route,
  Activity,
  Receipt,
  Coins,
  BellRing,
  Send,
  X,
  Compass,
  Layers,
  ArrowRight,
  XCircle,
} from "lucide-react";

function WorkDetails() {
  // Global Notification Toast State
  const [notification, setNotification] = useState({ show: false, text: "" });
  
  // Call Processing State
  const [isCalling, setIsCalling] = useState(false);
  
  // Custom Messaging Console States
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");

  // Map Navigation Engine Modal State
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // 4 Services Data Management Matrix
  const [servicesData, setServicesData] = useState([
    {
      id: 1,
      bookingId: "#QF-2025-4587",
      customer: "Rahul Sharma",
      service: "AC Repair & Maintenance",
      payment: "₹1,850",
      status: "In Progress",
      rating: "4.8",
      priority: "High",
      date: "22 May 2026",
      time: "10:30 AM",
      address: "Banjara Hills, Hyderabad",
      phone: "+91 98765 43210",
      worker: "Kumar",
      duration: "2 Hours",
      customerType: "Premium Member",
      applianceDetails: "Voltas 1.5 Ton Split AC",
      totalBookings: "4 Orders Placed",
      gstStatus: "GST Invoiced",
      estPayout: "₹1,480",
      elapsedSla: "62%",
      description: "Customer reported cooling issues with the air conditioner. Complete inspection, gas level check, filter cleaning, and system repairs need to be performed. Kindly run diagnostic cycles after system completion.",
      milestones: [
        { name: "Customer Contacted", checked: true },
        { name: "Reached Location", checked: true },
        { name: "Final Testing", checked: false },
        { name: "Repair In Progress", checked: false },
      ]
    },
    {
      id: 2,
      bookingId: "#QF-2025-4912",
      customer: "Ananya Reddy",
      service: "Washing Machine Service",
      payment: "₹1,200",
      status: "Scheduled",
      rating: "4.9",
      priority: "Medium",
      date: "23 May 2026",
      time: "02:15 PM",
      address: "Gachibowli, Hyderabad",
      phone: "+91 87654 32109",
      worker: "Satish V.",
      duration: "1.5 Hours",
      customerType: "Regular Client",
      applianceDetails: "Samsung 8kg Top Load",
      totalBookings: "2 Orders Placed",
      gstStatus: "GST Invoiced",
      estPayout: "₹960",
      elapsedSla: "0%",
      description: "Heavy vibration during spin cycle reported by user. Needs immediate drum suspension inspection, leveling evaluation, and drain pump valve un-clogging.",
      milestones: [
        { name: "Customer Contacted", checked: true },
        { name: "Reached Location", checked: false },
        { name: "Final Testing", checked: false },
        { name: "Repair In Progress", checked: false },
      ]
    },
    {
      id: 3,
      bookingId: "#QF-2025-5104",
      customer: "Vikram Malhotra",
      service: "Refrigerator Gas Refill",
      payment: "₹3,400",
      status: "In Progress",
      rating: "4.7",
      priority: "High",
      date: "22 May 2026",
      time: "11:00 AM",
      address: "Jubilee Hills, Hyderabad",
      phone: "+91 76543 21098",
      worker: "Mohammad Ali",
      duration: "3 Hours",
      customerType: "VIP Corporate",
      applianceDetails: "LG 450L Double Door",
      totalBookings: "12 Orders Placed",
      gstStatus: "GST Invoiced",
      estPayout: "₹2,720",
      elapsedSla: "85%",
      description: "Main compressor turning on but zero cooling generated in lower compartment. Perform standard high-pressure system leak detection, copper capillary line welding, and full R134a refrigerant recharge.",
      milestones: [
        { name: "Customer Contacted", checked: true },
        { name: "Reached Location", checked: true },
        { name: "Final Testing", checked: false },
        { name: "Repair In Progress", checked: true },
      ]
    },
    {
      id: 4,
      bookingId: "#QF-2025-5388",
      customer: "Priya Das",
      service: "Microwave Oven Repair",
      payment: "₹950",
      status: "Completed",
      rating: "5.0",
      priority: "Low",
      date: "21 May 2026",
      time: "04:30 PM",
      address: "Madhapur, Hyderabad",
      phone: "+91 91234 56789",
      worker: "Ramesh K.",
      duration: "1 Hour",
      customerType: "Premium Member",
      applianceDetails: "IFB 30L Convection",
      totalBookings: "7 Orders Placed",
      gstStatus: "GST Invoiced",
      estPayout: "₹760",
      elapsedSla: "100%",
      description: "Touchpad control panel entirely non-responsive. Disassembled front interface fascia assembly, cleaned underlying ribbon connector interfaces, and replaced failing tactile control circuit matrix module.",
      milestones: [
        { name: "Customer Contacted", checked: true },
        { name: "Reached Location", checked: true },
        { name: "Final Testing", checked: true },
        { name: "Repair In Progress", checked: true },
      ]
    }
  ]);

  // Active Context Tracker State
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  const workData = servicesData.find(item => item.id === selectedServiceId) || servicesData[0];

  const triggerNotification = (text) => {
    setNotification({ show: true, text });
    setTimeout(() => {
      setNotification({ show: false, text: "" });
    }, 4000);
  };

  const handleCallInitiation = () => {
    setIsCalling(true);
    setTimeout(() => {
      setIsCalling(false);
      triggerNotification(`Cellular line connected with ${workData.customer} successfully.`);
    }, 2500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;
    
    const currentMsg = typedMessage;
    setIsMessageOpen(false);
    setTypedMessage("");
    triggerNotification(`Message successfully sent: "${currentMsg}"`);
  };

  // State Pipeline Mutation Handlers
  const updateJobStatus = (newStatus) => {
    setServicesData(prev => prev.map(item => {
      if (item.id === selectedServiceId) {
        let updatedMilestones = [...item.milestones];
        let elapsed = item.elapsedSla;
        
        if (newStatus === "In Progress") {
          updatedMilestones[0].checked = true;
          updatedMilestones[1].checked = true;
          if (elapsed === "0%") elapsed = "15%";
        } else if (newStatus === "Completed") {
          updatedMilestones = updatedMilestones.map(m => ({ ...m, checked: true }));
          elapsed = "100%";
        } else if (newStatus === "Cancelled") {
          elapsed = "0%";
        }

        return { 
          ...item, 
          status: newStatus, 
          milestones: updatedMilestones,
          elapsedSla: elapsed
        };
      }
      return item;
    }));
    triggerNotification(`Work order ${workData.bookingId} status shifted to: ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-white p-6 space-y-6">
      
      {/* System Toast Alerts */}
      {notification.show && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A192F] text-white border border-slate-700 rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3.5 animate-slide-up">
          <div className="bg-amber-400 p-2 rounded-xl text-[#0A192F] animate-bounce">
            <BellRing size={18} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">System Alert</p>
            <p className="text-sm font-semibold text-slate-200">{notification.text}</p>
          </div>
        </div>
      )}

      {/* Optimized Compact Map Modal Overlay */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-white w-full max-w-2xl h-[60vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative animate-slide-up">
            
            {/* Map Header Panel Controls */}
            <div className="bg-[#0A192F] p-4 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-xl text-amber-400">
                  <Compass className="animate-spin" style={{ animationDuration: "8s" }} size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold tracking-tight">Quickfix Live Navigation</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Destination: {workData.address}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMapModalOpen(false)}
                className="p-1.5 bg-slate-800 hover:bg-rose-600 hover:text-white rounded-xl transition text-slate-400 active:scale-95"
              >
                <X size={16} />
              </button>
            </div>

            {/* Simulated Live Grid Vector Map Canvas Area */}
            <div className="flex-1 bg-slate-100 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(#0A192F 1.5px, transparent 1.5px), radial-gradient(#0A192F 1.5px, #f1f5f9 1.5px)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, 20px 20px"
              }}></div>

              <svg className="absolute inset-0 w-full h-full stroke-slate-300/70 stroke-[6] fill-none pointer-events-none">
                <path d="M-100,150 Q200,80 350,280 T1000,200" />
                <path d="M150,-100 Q300,200 220,600" strokeWidth="8" />
                <path d="M50,50 L600,500" strokeDasharray="12,12" />
                <path d="M180,185 C240,165 310,270 410,240" className="stroke-blue-600 stroke-[5]" strokeLinecap="round" />
              </svg>

              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm border border-slate-200/60 flex flex-col gap-1 z-10">
                <button className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-md transition" title="Recenter View"><Compass size={14} /></button>
                <button className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-md transition" title="Toggle Map Layers"><Layers size={14} /></button>
              </div>

              <div className="absolute top-[170px] left-[165px] flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full border-2 border-white shadow-md animate-pulse"></div>
                <span className="text-[9px] font-black bg-blue-600 text-white px-1 py-0.5 rounded shadow mt-1">En Route</span>
              </div>

              <div className="absolute top-[200px] left-[395px] flex flex-col items-center z-10">
                <span className="absolute top-1 w-10 h-10 bg-rose-500/30 rounded-full animate-ping pointer-events-none"></span>
                <MapPin size={32} className="text-rose-500 filter drop-shadow" fill="#FECDD3" />
                <div className="bg-[#0A192F] text-white px-2.5 py-1 rounded-xl shadow-lg border border-slate-800 text-center mt-1 min-w-[110px]">
                  <p className="text-[9px] font-bold text-amber-400 uppercase tracking-wide">Client Property</p>
                  <p className="text-xs font-bold truncate">{workData.customer}</p>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur p-3 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between gap-4 z-10">
                <div className="flex items-center gap-2.5">
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100">
                    <Navigation size={16} className="transform rotate-45 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800 leading-tight">Route guidance active via Road 4</h4>
                    <p className="text-[10px] text-slate-400 font-medium">Traffic conditions normal</p>
                  </div>
                </div>
                <div className="flex gap-3 border-l border-slate-200 pl-3 shrink-0">
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">ETA</p>
                    <p className="text-sm font-black text-slate-800">14 Mins</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Distance</p>
                    <p className="text-sm font-black text-slate-800">4.8 km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Style Rules */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes card-slide {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: card-slide 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Header */}
      <div className="bg-[#0A192F] rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-400 opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              Work <span className="text-amber-400">Details Engine</span>
            </h1>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Central operational console monitoring technical rosters, service parameters, and active performance pipelines.
            </p>
          </div>

          <div className="bg-[#112240] px-6 py-4 rounded-2xl shadow-inner border border-slate-700/50">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Selected Active Record</p>
            <h2 className="text-2xl font-mono font-bold text-white mt-1">
              {workData.bookingId}
            </h2>
          </div>
        </div>
      </div>

      {/* SERVICES MATRIX SECTION */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="bg-amber-400 p-3 rounded-xl text-[#0A192F]">
              <Briefcase size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Rostered Work Matrix</h2>
              <p className="text-sm font-medium text-slate-400">Select any record to update workspace components dynamically below</p>
            </div>
          </div>
          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-4 py-1.5 rounded-full border border-slate-200">
            4 Active Subscriptions
          </span>
        </div>

        {/* Responsive Matrix Wrapper */}
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Booking ID</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Service Pipeline</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer Contact</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Status Node</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Valuation</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {servicesData.map((item) => {
                const isSelected = item.id === selectedServiceId;
                const isCompleted = item.status === "Completed";
                const isScheduled = item.status === "Scheduled";
                const isCancelled = item.status === "Cancelled";
                
                return (
                  <tr 
                    key={item.id}
                    onClick={() => setSelectedServiceId(item.id)}
                    className={`cursor-pointer transition-all duration-150 ${
                      isSelected 
                        ? "bg-amber-50/70 hover:bg-amber-50 border-l-4 border-l-amber-500 font-semibold" 
                        : "hover:bg-slate-50/80"
                    }`}
                  >
                    <td className={`p-5 font-mono text-[11px] font-bold tracking-wide transition-colors ${
                      isSelected ? "text-slate-800" : "text-slate-500"
                    }`}>
                      {item.bookingId}
                    </td>
                    
                    <td className="p-5">
                      <div className="flex items-center gap-2.5">
                        <p className="text-base font-extrabold text-slate-800 tracking-tight">{item.service}</p>
                        {isSelected && <ArrowRight size={16} className="text-amber-600 animate-pulse" />}
                      </div>
                    </td>
                    <td className="p-5 text-base font-bold text-slate-700">{item.customer}</td>
                    <td className="p-5">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold border ${
                        isCompleted 
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                          : isScheduled 
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : isCancelled
                              ? "bg-rose-50 text-rose-700 border-rose-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}>
                        <span className={`w-2 h-2 mr-2 rounded-full ${
                          isCompleted ? "bg-emerald-500" : isScheduled ? "bg-blue-500" : isCancelled ? "bg-rose-500" : "bg-amber-500 animate-pulse"
                        }`}></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-5 font-black text-slate-800 text-base tracking-tight">{item.payment}</td>
                    <td className="p-5 text-center">
                      <div className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg text-xs font-black text-slate-700 border border-slate-200/60">
                        <Star size={11} className="text-amber-500 fill-amber-500" />
                        {item.rating}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ALIGNED GRID MAIN CANVAS PANELS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
        
        {/* ROW 1 LEFT: Customer Profile Box */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 xl:col-span-2">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
            <div className="bg-amber-400 p-2.5 rounded-xl text-[#0A192F]">
              <User size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Customer Profile</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Customer Name</p>
              <div className="flex items-center gap-2 mt-0.5">
                <h3 className="text-lg font-bold text-slate-800">{workData.customer}</h3>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide">
                  {workData.customerType}
                </span>
              </div>
            </div>

            {/* Communication Controls Component */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <Phone size={16} className={isCalling ? "text-amber-500 animate-pulse" : "text-slate-500"} />
                  <h3 className={`text-lg font-bold transition-colors ${isCalling ? "text-amber-600 font-black" : "text-slate-800"}`}>
                    {isCalling ? "Calling..." : workData.phone}
                  </h3>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={handleCallInitiation}
                  disabled={isCalling || workData.status === "Cancelled"}
                  className={`p-2.5 rounded-xl transition shadow-sm active:scale-95 disabled:opacity-40 disabled:pointer-events-none ${
                    isCalling ? "bg-amber-500 text-[#0A192F] animate-bounce" : "bg-slate-200/60 hover:bg-amber-400 text-[#0A192F]"
                  }`} 
                  title="Call Client"
                >
                  <Phone size={16} fill="currentColor" />
                </button>
                <button 
                  onClick={() => setIsMessageOpen(!isMessageOpen)}
                  disabled={workData.status === "Cancelled"}
                  className={`p-2.5 rounded-xl transition shadow-sm active:scale-95 disabled:opacity-40 disabled:pointer-events-none ${
                    isMessageOpen ? "bg-[#0A192F] text-amber-400" : "bg-slate-200/60 hover:bg-amber-400 text-[#0A192F]"
                  }`}
                  title="Message Client"
                >
                  {isMessageOpen ? <X size={16} /> : <MessageSquare size={16} fill="currentColor" />}
                </button>
              </div>
            </div>

            {/* Message Input Slideout Drawer */}
            {isMessageOpen && (
              <div className="md:col-span-2 bg-[#0A192F] rounded-2xl p-4 border border-slate-800 animate-slide-up space-y-3 shadow-lg">
                <div className="flex justify-between items-center text-xs font-bold text-slate-400 tracking-wider">
                  <span className="text-amber-400 uppercase tracking-wide">Secure Messaging Server</span>
                  <span>To: {workData.customer}</span>
                </div>
                <form onSubmit={handleSendMessage} className="relative flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden px-3">
                  <input 
                    type="text"
                    value={typedMessage}
                    onChange={(e) => setTypedMessage(e.target.value)}
                    placeholder="Type custom service notice text..."
                    className="w-full bg-transparent py-3 text-sm text-white focus:outline-none placeholder-slate-500 font-medium"
                    autoFocus
                  />
                  <button type="submit" className="text-amber-400 hover:text-white transition ml-2">
                    <Send size={16} fill="currentColor" />
                  </button>
                </form>
              </div>
            )}

            {/* Address Box Section */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 md:col-span-2 flex justify-between items-center gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Service Address</p>
                <div className="flex items-start gap-2 mt-0.5">
                  <MapPin size={18} className="text-rose-500 shrink-0 mt-0.5" />
                  <h3 className="text-base font-semibold text-slate-700 leading-relaxed">{workData.address}</h3>
                </div>
              </div>
              <button 
                onClick={() => setIsMapModalOpen(true)}
                disabled={workData.status === "Cancelled"}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#0A192F] hover:bg-[#112240] text-amber-400 rounded-xl text-xs font-bold transition shadow-sm shrink-0 active:scale-95 border border-transparent hover:border-slate-700 disabled:opacity-40"
              >
                <Navigation size={14} fill="currentColor" /> Map
              </button>
            </div>
          </div>
        </div>

        {/* ROW 1 RIGHT: Worker Assignment */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 xl:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
              <div className="bg-amber-400 p-2.5 rounded-xl text-[#0A192F]">
                <BadgeCheck size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Assignment</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Assigned Professional</p>
                <h3 className="text-lg font-bold text-slate-800">{workData.worker}</h3>
              </div>

              <div className={`border rounded-2xl p-4 ${
                workData.priority === "High" 
                  ? "bg-rose-50/70 border-rose-100 text-rose-700" 
                  : workData.priority === "Medium" 
                    ? "bg-blue-50/70 border-blue-100 text-blue-700" 
                    : "bg-slate-50 border-slate-100 text-slate-700"
              }`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                  workData.priority === "High" ? "text-rose-500" : workData.priority === "Medium" ? "text-blue-500" : "text-slate-400"
                }`}>Priority Level</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <AlertCircle size={18} />
                  <h3 className="text-lg font-bold">{workData.priority} Priority</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 LEFT: Job Operations & Proximity Timeline Tracker */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 xl:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
              <div className="bg-amber-400 p-2.5 rounded-xl text-[#0A192F]">
                <Route size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Job Operations & Tracking</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-slate-100 rounded-2xl p-4 flex items-center gap-3 bg-slate-50/60">
                <div className="bg-amber-400 text-[#0A192F] p-2.5 rounded-xl"><Tv size={18} /></div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Target Equipment</p>
                  <h4 className="text-sm font-bold text-slate-700 mt-0.5">{workData.applianceDetails}</h4>
                </div>
              </div>

              <div className="border border-slate-100 rounded-2xl p-4 flex items-center gap-3 bg-slate-50/60">
                <div className="bg-amber-400 text-[#0A192F] p-2.5 rounded-xl"><History size={18} /></div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Account History</p>
                  <h4 className="text-sm font-bold text-slate-700 mt-0.5">{workData.totalBookings}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* ON-JOB PROXIMITY TIMELINE COMPONENT */}
          <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-6 shadow-inner">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              On-Job Proximity Timeline
            </p>
            
            <div className="relative flex justify-between items-center w-full max-w-xl mx-auto px-4 mt-2">
              {/* Connector Track Segments */}
              <div className="absolute top-[14px] left-0 right-0 h-[3px] bg-slate-200/70 rounded-full z-0"></div>
              <div 
                className="absolute top-[14px] left-0 h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-[0_1px_4px_rgba(16,185,129,0.3)] rounded-full z-0 transition-all duration-500" 
                style={{
                  width: workData.status === "Completed" ? "100%" : workData.status === "Scheduled" ? "0%" : "66%"
                }}
              ></div>

              {/* Node 1: En Route */}
              <div className="flex flex-col items-center z-10 group">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold border-[3px] border-white shadow-md transform group-hover:scale-105 transition-transform">✓</div>
                <span className="text-[11px] font-extrabold text-slate-700 mt-2.5 bg-white px-2 py-0.5 rounded-md border border-slate-100 shadow-sm">
                  En Route
                </span>
              </div>

              {/* Node 2: Arrived */}
              <div className="flex flex-col items-center z-10 group">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-[3px] shadow-md transform group-hover:scale-105 transition-transform ${
                  workData.status !== "Scheduled" && workData.status !== "Cancelled" ? "bg-emerald-500 text-white border-white" : "bg-white text-slate-300 border-slate-200/80"
                }`}>
                  {workData.status !== "Scheduled" && workData.status !== "Cancelled" ? "✓" : "●"}
                </div>
                <span className={`text-[11px] font-extrabold mt-2.5 bg-white px-2 py-0.5 rounded-md border shadow-sm ${
                  workData.status !== "Scheduled" && workData.status !== "Cancelled" ? "text-slate-700 border-slate-100" : "text-slate-400 border-slate-100"
                }`}>
                  Arrived
                </span>
              </div>

              {/* Node 3: Job Started / Active Status Node */}
              <div className="flex flex-col items-center z-10 group relative">
                {workData.status === "In Progress" && (
                  <span className="absolute -top-1 w-10 h-10 bg-emerald-500/20 rounded-full animate-ping pointer-events-none z-0"></span>
                )}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-[3px] shadow-md transform group-hover:scale-105 transition-transform relative z-10 ${
                  workData.status === "Completed" 
                    ? "bg-emerald-500 text-white border-white" 
                    : workData.status === "In Progress"
                      ? "bg-white text-emerald-600 border-emerald-500 animate-pulse"
                      : "bg-white text-slate-200 border-slate-200/80"
                }`}>
                  {workData.status === "Completed" ? "✓" : "●"}
                </div>
                <span className={`text-[11px] mt-2.5 px-2 py-0.5 rounded-md border shadow-sm transition-all ${
                  workData.status === "Completed"
                    ? "font-extrabold bg-emerald-50 text-emerald-700 border-emerald-200"
                    : workData.status === "In Progress"
                      ? "font-black bg-emerald-600 text-white border-emerald-600 shadow-[0_2px_6px_rgba(16,185,129,0.3)]"
                      : "font-extrabold bg-white text-slate-400 border-slate-100"
                }`}>
                  {workData.status === "Completed" ? "Completed" : "Job Started"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 RIGHT: Milestones Checklist Panel */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 xl:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
              <div className="bg-amber-400 p-2.5 rounded-xl text-[#0A192F]">
                <ClipboardList size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Milestones</h2>
            </div>

            <div className="space-y-2.5">
              {workData.milestones.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                    item.checked 
                      ? "bg-emerald-50/50 border-emerald-100 text-emerald-800" 
                      : "bg-slate-50/50 border-slate-100 text-slate-600"
                  }`}
                >
                  <CheckCircle2 
                    className={item.checked ? "text-emerald-600" : "text-slate-300"} 
                    size={18} 
                    fill={item.checked ? "#D1FAE5" : "transparent"}
                  />
                  <p className="text-sm font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 3 LEFT: Timeline & Allocation Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 xl:col-span-2">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
            <div className="bg-amber-400 p-2.5 rounded-xl text-[#0A192F]">
              <CalendarDays size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Timeline & Allocation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <CalendarDays size={16} />
                <p className="text-xs font-semibold uppercase tracking-wider">Date</p>
              </div>
              <h3 className="text-base font-bold text-slate-800">{workData.date}</h3>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <Clock3 size={16} />
                <p className="text-xs font-semibold uppercase tracking-wider">Scheduled Time</p>
              </div>
              <h3 className="text-base font-bold text-slate-800">{workData.time}</h3>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <TimerReset size={16} />
                <p className="text-xs font-semibold uppercase tracking-wider">Est. Duration</p>
              </div>
              <h3 className="text-base font-bold text-slate-800">{workData.duration}</h3>
            </div>
          </div>
        </div>

        {/* ROW 3 RIGHT: JOB TIMER METRIC ANALYTICS */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 xl:col-span-1 flex items-center justify-between relative overflow-hidden group">
          <div className="space-y-1 z-10">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
              <Activity size={14} className="animate-pulse" />
              <span>Job Analytics</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Job Timer</h3>
            <p className="text-xs text-slate-400 font-medium">Technician performance index</p>
          </div>
          
          <div className="relative flex items-center justify-center z-10">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle cx="48" cy="48" r="40" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
              <circle 
                cx="48" 
                cy="48" 
                r="40" 
                stroke="#FACC15" 
                strokeWidth="8" 
                fill="transparent" 
                strokeDasharray="251" 
                strokeDashoffset={251 - (251 * parseInt(workData.elapsedSla)) / 100}
                className="transition-all duration-500 stroke-linecap-round" 
                strokeLinecap="round" 
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-xs font-black text-slate-800 leading-none">{workData.elapsedSla}</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">Elapsed</span>
            </div>
          </div>
        </div>

        {/* ROW 4 LEFT: Issue Description Panel */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 xl:col-span-2">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="bg-amber-400 p-2.5 rounded-xl text-[#0A192F]">
              <FileText size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Issue Description</h2>
          </div>
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              {workData.description}
            </p>
          </div>
        </div>

        {/* ROW 4 RIGHT: ENHANCED ACTION PANELS */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 space-y-4 xl:col-span-1 flex flex-col justify-center">
          <button 
            onClick={() => updateJobStatus("In Progress")}
            disabled={workData.status === "In Progress" || workData.status === "Completed" || workData.status === "Cancelled"}
            className="w-full bg-[#FACC15] hover:bg-[#EAB308] disabled:bg-slate-100 text-[#0A192F] disabled:text-slate-400 font-extrabold tracking-wide py-4 px-6 rounded-2xl shadow-md transition transform active:scale-[0.98] duration-150 flex items-center justify-center gap-2.5 border border-transparent disabled:shadow-none"
          >
            <Briefcase size={18} className={workData.status === "In Progress" ? "" : "fill-current"} />
            Start Work
          </button>
          
          <button 
            onClick={() => updateJobStatus("Completed")}
            disabled={workData.status === "Completed" || workData.status === "Cancelled"}
            className="w-full bg-[#059669] hover:bg-[#047857] disabled:bg-slate-100 text-white disabled:text-slate-400 font-extrabold tracking-wide py-4 px-6 rounded-2xl shadow-md transition transform active:scale-[0.98] duration-150 flex items-center justify-center gap-2.5 border border-transparent disabled:shadow-none"
          >
            <CheckCircle2 size={18} />
            Mark as Completed
          </button>
          
          <button 
            onClick={() => updateJobStatus("Cancelled")}
            disabled={workData.status === "Completed" || workData.status === "Cancelled"}
            className="w-full bg-white hover:bg-rose-50 disabled:bg-white text-[#E11D48] disabled:text-slate-300 border border-rose-200 disabled:border-slate-100 font-extrabold tracking-wide py-4 px-6 rounded-2xl transition transform active:scale-[0.98] duration-150 flex items-center justify-center gap-2.5"
          >
            <XCircle size={18} />
            Cancel Work Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default WorkDetails;