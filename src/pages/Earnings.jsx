import React, { useState } from "react";
import { 
  Wallet, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Banknote,
  Filter,
  Download,
  IndianRupee,
  Gift,
  X,
  Building,
  ArrowRight,
  FileText,
  CreditCard,
  HelpCircle,
  Sparkles,
  MapPin,
  User,
  Star,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Earnings() {
  // State Handlers for Modals & Interactive Tabs
  const [showStatementModal, setShowStatementModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null); 
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("Weekly");

  // Dynamic States for Wallet Balances
  const [availableBalance, setAvailableBalance] = useState(12450);

  // Dummy Core Transactions Data
  const transactions = [
    { 
      id: "TXN1024", 
      service: "AC Deep Cleaning", 
      client: "Suresh Raina", 
      date: "Today, 02:30 PM", 
      amount: 1200, 
      tip: 100, 
      status: "Credited",
      location: "Madhapur, Hyderabad",
      rating: 5,
      review: "Excellent and fast service! The technician arrived right on time and solved the issue quickly."
    },
    { 
      id: "TXN1023", 
      service: "Switchboard Repair", 
      client: "Anitha Rao", 
      date: "Yesterday, 11:15 AM", 
      amount: 450, 
      tip: 0, 
      status: "Credited",
      location: "Kukatpally, Hyderabad",
      rating: 4,
      review: "Good behavior and neat work. Fixed the short circuit problem instantly."
    },
    { 
      id: "TXN1022", 
      service: "Full House Wiring", 
      client: "Modern Apartments", 
      date: "20 May, 2026", 
      amount: 8500, 
      tip: 500, 
      status: "Pending",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      review: "Highly professional team. Completed the entire building layout tracking flawlessly."
    },
    { 
      id: "TXN1021", 
      service: "Fan Installation", 
      client: "Vamsi Krishna", 
      date: "19 May, 2026", 
      amount: 300, 
      tip: 20, 
      status: "Credited",
      location: "Secunderabad, Telangana",
      rating: 5,
      review: "Very smooth experience overall. Reasonable price and clean work."
    },
  ];

  // Dummy Statement History Data
  const statementHistory = [
    { month: "April 2026", totalJobs: 32, earnings: 42500, payoutStatus: "Transferred to Bank" },
    { month: "March 2026", totalJobs: 28, earnings: 38200, payoutStatus: "Transferred to Bank" },
    { month: "February 2026", totalJobs: 40, earnings: 51000, payoutStatus: "Transferred to Bank" },
    { month: "January 2026", totalJobs: 15, earnings: 18400, payoutStatus: "Transferred to Bank" },
  ];

  const handleWithdrawalSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= availableBalance) {
      setAvailableBalance((prev) => prev - amount);
      setWithdrawSuccess(true);
      setTimeout(() => {
        setWithdrawSuccess(false);
        setShowWithdrawModal(false);
        setWithdrawAmount("");
      }, 2500);
    } else {
      alert("Please enter a valid amount within your available balance.");
    }
  };

  return (
    <div className="-mx-8 -mt-8 min-h-screen bg-[#f8f9fa] flex flex-col relative pb-12 select-none">
      
      {/* ========================================================
          HEADER SECTION — Premium Midnight Navy Gradient
         ======================================================== */}
      <div className="bg-gradient-to-b from-[#0b132b] to-[#1c2541] text-white p-6 md:p-10 pb-28 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffbc00]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#ffbc00]/10 border border-[#ffbc00]/20 text-[#ffbc00] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              <Sparkles size={12} /> Payout Workspace
            </div>
            <h1 className="text-2xl md:text-4xl font-black flex items-center gap-2 tracking-tight">
              <IndianRupee className="text-[#ffbc00]" /> Earnings Dashboard
            </h1>
            <p className="text-gray-400 mt-1 text-xs md:text-sm font-medium">Track your revenue timeline, milestones, and quick transfers.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button 
              onClick={() => setShowStatementModal(true)}
              className="bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all px-4 py-3 rounded-xl flex items-center gap-2 text-xs md:text-sm font-bold border border-white/10 flex-1 md:flex-none justify-center"
            >
              <Download size={16} /> Statement
            </button>
            <button 
              onClick={() => setShowWithdrawModal(true)}
              className="bg-[#ffbc00] hover:bg-[#e0a500] active:scale-[0.98] transition-all text-[#0b132b] font-black px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-[#ffbc00]/20 text-xs md:text-sm flex-1 md:flex-none justify-center"
            >
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          CORE STATS CARDS SECTION — Floating Glassmorphism Layers
         ======================================================== */}
      <div className="px-4 md:px-8 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-[#ffbc00] text-[#0b132b] text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Available</div>
          <div className="w-11 h-11 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 border border-amber-100 shadow-sm shadow-amber-100/50">
            <Wallet className="text-[#e0a500]" size={20} />
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Available Payout balance</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0b132b] mt-1.5 tracking-tight">₹{availableBalance.toLocaleString('en-IN')}.00</h2>
          <div className="mt-4 flex items-center gap-1.5 text-emerald-600 text-xs font-bold bg-emerald-50 w-fit px-2.5 py-1 rounded-xl">
            <ArrowUpRight size={14} /> +15.5% this week
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="bg-white rounded-3xl p-6 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
        >
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider float-right text-[9px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-md mt-1">In Review</p>
          <div className="w-11 h-11 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 border border-orange-100 shadow-sm shadow-orange-100/50">
            <Clock className="text-orange-600" size={20} />
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Pending Clearance</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0b132b] mt-1.5 tracking-tight">₹4,200.00</h2>
          <p className="mt-4 text-gray-400 text-xs font-semibold flex items-center gap-1">⏱ Expected by May 25, 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
        >
          <div className="w-11 h-11 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 border border-purple-100 shadow-sm shadow-purple-100/50">
            <Gift className="text-purple-600" size={20} />
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Bonuses & Tips</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0b132b] mt-1.5 tracking-tight">₹850.00</h2>
          <div className="mt-4 flex items-center gap-1.5 text-gray-500 text-xs font-bold bg-gray-50 w-fit px-2.5 py-1 rounded-xl border border-gray-100">
            <CheckCircle2 size={14} className="text-emerald-500" /> 5-Star Rating Bonus included
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          LOWER SECTIONS: Table History List & Sidebar Metrics
         ======================================================== */}
      <div className="p-4 md:p-8 grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Hand: Interactive Transaction Ledger */}
        <div className="xl:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg md:text-xl font-black text-[#0b132b]">Recent Payouts & Work</h2>
              <p className="text-xs text-gray-400 font-medium">Click on any row to view complete job review details.</p>
            </div>
            
            <div className="bg-gray-200/60 border border-gray-200 p-1 rounded-xl flex gap-1 text-xs font-bold text-gray-500 self-start sm:self-center">
              {["Weekly", "Monthly", "Yearly"].map((tab) => (
                <button 
                  key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === tab ? "bg-white text-[#0b132b] shadow-sm font-black" : "hover:text-gray-900"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Table View — Clickable Rows */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                  <tr>
                    <th className="px-6 py-4 text-center">TXN ID</th>
                    <th className="px-6 py-4">Service Details</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 font-medium text-sm">
                  {transactions.map((txn, i) => (
                    <tr 
                      key={i} 
                      onClick={() => setSelectedWork(txn)} 
                      className="hover:bg-amber-50/40 cursor-pointer transition-all group"
                    >
                      <td className="px-6 py-4 text-xs font-mono text-gray-400 text-center font-bold group-hover:text-[#0b132b]">{txn.id}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-black text-gray-800 text-sm group-hover:text-[#e0a500] transition-colors">{txn.service}</p>
                          <p className="text-xs text-gray-400 font-semibold mt-0.5">{txn.client} • {txn.date}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-black text-gray-800 text-sm">₹{txn.amount}</p>
                        {txn.tip > 0 && <p className="text-[10px] text-emerald-500 font-black">+ ₹{txn.tip} Tip</p>}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black tracking-wide ${
                          txn.status === "Credited" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-orange-50 text-orange-700 border border-orange-100"
                        }`}>
                          {txn.status === "Credited" ? <CheckCircle2 size={11}/> : <Clock size={11}/>}
                          {txn.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile View — Clickable Cards */}
          <div className="space-y-3 block md:hidden">
            {transactions.map((txn, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedWork(txn)}
                className="bg-white p-4 border border-gray-100 rounded-2xl shadow-sm flex justify-between items-start cursor-pointer active:bg-amber-50/60 transition-all"
              >
                <div className="space-y-1">
                  <span className="text-[9px] font-bold font-mono text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{txn.id}</span>
                  <h4 className="font-bold text-gray-800 text-sm pt-0.5">{txn.service}</h4>
                  <p className="text-[11px] text-gray-400 font-medium">{txn.client} • {txn.date}</p>
                </div>
                <div className="text-right space-y-2">
                  <div>
                    <p className="font-black text-gray-800 text-sm">₹{txn.amount}</p>
                    {txn.tip > 0 && <p className="text-[9px] text-emerald-500 font-bold">+₹{txn.tip}</p>}
                  </div>
                  <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold ${
                    txn.status === "Credited" ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-700"
                  }`}>
                    {txn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Hand Sidebar Elements */}
        <div className="space-y-5">
          <h2 className="text-lg md:text-xl font-black text-[#0b132b]">Performance Metrics</h2>
          
          <div className="bg-gradient-to-br from-[#0b132b] to-[#1c2541] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffbc00]"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">Work Efficiency</p>
                <h3 className="text-2xl font-bold mt-1 tracking-tight">94%</h3>
              </div>
              <div className="p-2 bg-white/10 rounded-lg"><TrendingUp className="text-[#ffbc00]" size={20}/></div>
            </div>

            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-xs mb-1 font-semibold">
                    <span>Task Completion</span>
                    <span className="text-[#ffbc00]">24/25 Jobs</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ffbc00] w-[96%] rounded-full"></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-xs mb-1 font-semibold">
                    <span>Target Achievement</span>
                    <span className="text-[#ffbc00]">₹45k / ₹50k</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[85%] rounded-full"></div>
                  </div>
               </div>
            </div>

            <div className="mt-6 p-3.5 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#ffbc00] rounded-full flex items-center justify-center text-[#0b132b] font-black text-[10px] shadow-sm">GOLD</div>
                <p className="text-xs text-gray-300 font-medium leading-relaxed">You are in <span className="text-white font-bold">Gold Tier</span>. Complete 5 more jobs for Platinum!</p>
              </div>
            </div>
          </div>

          {/* Quick Actions Bank Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
            <div className="bg-amber-50 rounded-3xl p-5 border border-amber-200/60 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-amber-800 mb-2.5 flex items-center gap-1.5">
                  <Banknote size={16}/> Bank Account Status
                </h4>
                <div className="bg-white/80 p-3 rounded-xl border border-amber-200/50">
                   <p className="text-[9px] text-gray-400 uppercase font-bold">Linked Destination</p>
                   <p className="text-sm font-bold text-[#0b132b] truncate">State Bank of India</p>
                   <p className="text-[11px] text-gray-500 font-semibold mt-0.5">**** **** 4590</p>
                </div>
              </div>
              <button className="text-left mt-3 text-amber-700 font-bold text-xs hover:text-[#0b132b] transition-colors flex items-center gap-1">
                <CreditCard size={12}/> Manage Accounts →
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                  <HelpCircle size={16}/> Payout Support
                </h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed mt-1">Facing calculation delays or withdrawal transaction issues?</p>
              </div>
              <button className="text-left mt-4 text-[#0b132b] font-bold text-xs hover:underline">
                Raise Token Query
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          POPUP MODAL: ROW DETAILS WORK SUMMARY (GLOBAL OVERLAY ON SIDEBAR)
         ==================================================================== */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2.5rem] max-w-lg w-full p-6 shadow-2xl relative border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedWork(null)}
                className="absolute right-5 top-5 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-5 border-b border-gray-100 pb-4">
                <span className="text-[10px] font-black font-mono text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md uppercase tracking-wider">{selectedWork.id} SUMMARY</span>
                <h3 className="text-2xl font-black text-[#0b132b] mt-2 leading-tight">{selectedWork.service}</h3>
                <p className="text-xs text-gray-400 font-bold mt-1">Completed Job Portfolio & Receipt</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <span className="text-[9px] uppercase font-bold text-gray-400 flex items-center gap-1"><User size={10}/> Client Name</span>
                    <p className="text-sm font-bold text-gray-800 mt-1">{selectedWork.client}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <span className="text-[9px] uppercase font-bold text-gray-400 flex items-center gap-1"><Clock size={10}/> Timeline</span>
                    <p className="text-sm font-bold text-gray-800 mt-1 truncate">{selectedWork.date}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-start gap-2.5">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl mt-0.5"><MapPin size={16}/></div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gray-400">Service Deployment Location</span>
                    <p className="text-xs font-bold text-gray-700 mt-0.5">{selectedWork.location}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0b132b] to-[#1c2541] text-white p-4 rounded-2xl shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#ffbc00] text-[#0b132b] text-[9px] font-black px-2.5 py-0.5 rounded-bl-lg uppercase tracking-wider">{selectedWork.status}</div>
                  <span className="text-[9px] uppercase font-bold text-gray-400">Total Settlement Received</span>
                  
                  <div className="flex justify-between items-baseline mt-2 border-b border-white/10 pb-2">
                    <span className="text-xs text-gray-300 font-medium">Base Service Fee:</span>
                    <span className="font-bold text-sm">₹{selectedWork.amount}.00</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-xs text-gray-300 font-medium">Customer Tip Appended:</span>
                    <span className="font-bold text-xs text-emerald-400">+ ₹{selectedWork.tip}.00</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-3 pt-2 border-t border-dashed border-white/20">
                    <span className="text-sm font-black text-[#ffbc00]">Net Take-home Payout:</span>
                    <span className="text-xl font-black text-[#ffbc00]">₹{selectedWork.amount + selectedWork.tip}.00</span>
                  </div>
                </div>

                <div className="bg-amber-50/50 border border-amber-200/50 p-4 rounded-2xl space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase font-bold text-amber-800 flex items-center gap-1"><MessageSquare size={10}/> Client Feedback</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: selectedWork.rating }).map((_, idx) => (
                        <Star key={idx} size={12} className="text-[#ffbc00] fill-[#ffbc00]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-gray-600 leading-relaxed italic">
                    "{selectedWork.review}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ====================================================================
          POPUP MODAL 1: Account Statement (GLOBAL OVERLAY ON SIDEBAR)
         ==================================================================== */}
      <AnimatePresence>
        {showStatementModal && (
          <div className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] max-w-2xl w-full p-6 shadow-2xl relative border border-gray-100"
            >
              <button onClick={() => setShowStatementModal(false)} className="absolute right-5 top-5 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-[#e0a500]"><FileText size={22}/></div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b132b]">Account Statements</h3>
                  <p className="text-xs text-gray-500 font-medium">Review and download monthly payout invoices</p>
                </div>
              </div>
              <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
                {statementHistory.map((history, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-amber-400/50 transition-all group">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{history.month}</h4>
                      <p className="text-xs text-gray-400 font-medium">{history.totalJobs} Jobs Completed • {history.payoutStatus}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-gray-900 text-sm">₹{history.earnings.toLocaleString('en-IN')}</span>
                      <button className="p-2 bg-white border border-gray-200 text-gray-600 hover:text-[#e0a500] hover:border-[#ffbc00] rounded-xl transition-all shadow-sm">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ====================================================================
          POPUP MODAL 2: Interactive Payout Withdrawal Workflow
         ==================================================================== */}
      <AnimatePresence>
        {showWithdrawModal && (
          <div className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] max-w-md w-full p-6 shadow-2xl relative border border-gray-100 overflow-hidden"
            >
              <button onClick={() => setShowWithdrawModal(false)} className="absolute right-5 top-5 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
              {withdrawSuccess ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    <CheckCircle2 size={36} className="animate-bounce" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Withdrawal Initiated!</h4>
                  <p className="text-xs text-gray-500 font-medium mt-2 max-w-xs px-2">Your request has been processed. Amount will be credited to your linked SBI account instantly.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#0b132b]">Withdraw Funds</h3>
                    <p className="text-xs text-gray-500 font-medium mt-1">Transfer money from your active wallet directly into bank</p>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-2xl flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-amber-100 text-[#e0a500] rounded-xl flex items-center justify-center"><Building size={20}/></div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">State Bank of India</p>
                      <p className="text-[10px] text-gray-400 font-medium">A/C: ****4590 • Active Transfer Destination</p>
                    </div>
                  </div>
                  <form onSubmit={handleWithdrawalSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-gray-600 px-0.5">
                        <label>Enter Amount</label>
                        <span>Max: ₹{availableBalance}</span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">₹</span>
                        <input type="number" required value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} max={availableBalance} placeholder="0.00" className="w-full p-3.5 pl-8 bg-gray-50 border border-gray-200 focus:border-[#ffbc00] focus:ring-4 focus:ring-[#ffbc00]/10 rounded-xl outline-none text-gray-800 font-bold text-sm transition-all" />
                      </div>
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#0b132b] hover:bg-[#1c2541] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1 shadow-md transition-all active:scale-[0.98] mt-2">
                      Confirm Payout Transfer <ArrowRight size={14}/>
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Earnings;