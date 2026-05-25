import React, { useState } from 'react';
import { Briefcase, IndianRupee, Star, MessageSquare, Bell, Camera, TrendingUp, Clock, MapPin, Zap, Target, Loader2,ArrowRight } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';
import {useNavigate} from 'react-router-dom'
// --- Data ---
const pieData = [
  { name: 'AC Repair', value: 40 },
  { name: 'Electrical', value: 30 },
  { name: 'Plumbing', value: 20 },
  { name: 'Other', value: 10 }
];
const COLORS = ['#0f5132', '#d4af37', '#4a6572', '#ced4da'];
const miniChartData = [{ v: 10 }, { v: 25 }, { v: 15 }, { v: 40 }, { v: 30 }, { v: 55 }];
const historyData = [
  { month: 'Jan', earnings: 3000, fees: 2000 },
  { month: 'Feb', earnings: 7000, fees: 4000 },
  { month: 'Mar', earnings: 6000, fees: 3000 },
  { month: 'Apr', earnings: 9000, fees: 6000 },
  { month: 'May', earnings: 12000, fees: 5000 },
  { month: 'Jun', earnings: 7000, fees: 6000 },
  { month: 'Jul', earnings: 11000, fees: 8000 },
  { month: 'Aug', earnings: 8000, fees: 6000 },
  { month: 'Sep', earnings: 14000, fees: 9000 },
];
const ratingData = [{ star: 5, count: 13 }, { star: 4, count: 5 }, { star: 3, count: 1 }, { star: 1, count: 0 }];
const notifications = [
  { id: 1, text: "New service request: AC Installation at Gachibowli", time: "5m ago" },
  { id: 2, text: "Payment of ₹1,850 received from Anita S.", time: "2h ago" },
];
const workPhotos = [
  { id: 1, label: "AC Repair", url: "https://www.shutterstock.com/image-photo/professional-hvac-technician-working-on-600nw-2730673443.jpg" },
  { id: 2, label: "Wiring", url: "https://as1.ftcdn.net/jpg/06/00/70/92/1000_F_600709292_pScgdDRrm3oIU3rsAL5QuDbF1qSg1wR5.jpg" },
  { id: 3, label: "Pipe Fix", url: "https://thumbs.dreamstime.com/b/plumber-fixing-sink-bathroom-portrait-male-50533352.jpg" },
  { id: 4, label: "Switchboard", url: "https://sukwariya.com/wp-content/uploads/2022/08/switchboard_repair.webp" },
  { id: 5, label: "Leakage", url: "https://media.istockphoto.com/id/1516511531/photo/a-plumber-carefully-fixes-a-leak-in-a-sink-using-a-wrench.jpg?s=612x612&w=0&k=20&c=4WRY5lTezchQ5aLj9gXj0Gixq7Wq7b0tzvrCTt4jrrI=" },
  { id: 6, label: "Ventilation", url: "https://static.vecteezy.com/system/resources/thumbnails/077/179/889/small/man-wearing-gloves-inspecting-ceiling-ventilation-duct-maintenance-service-male-technician-examining-air-vent-system-hvac-repair-home-improvement-residential-cleaning-airflow-quality-check-photo.jpg" }
];

const KPICard = ({ title, value, icon: Icon, subtext, showChart, ratingBreakdown, isActiveJobs, isMessages,onClick }) => (
<div
  onClick={onClick}
  className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)] cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
>
    <div className="flex justify-between items-start mb-3">
      <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">{title}</p>
      <div className="p-2 bg-gray-50 rounded-xl text-indigo-600"><Icon size={20} /></div>
    </div>
    <div className="flex justify-between items-center">
      <h2 className="text-3xl font-extrabold text-gray-900">{value}</h2>
      {isActiveJobs && <div className="w-10 h-10 rounded-full border-4 border-gray-100 border-t-indigo-600 rotate-45"></div>}
      {isMessages && (
        <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white"></div>
        </div>
      )}
    </div>
    {(isActiveJobs || isMessages) && (
      <p className="text-xs text-gray-400 mt-3 font-medium leading-tight">
        {isActiveJobs ? "Tasks in progress now.\nMonitoring live updates." : "Customer queries pending.\nAction required today."}
      </p>
    )}
    {showChart && (
      <div className="h-10 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={miniChartData}><Line type="monotone" dataKey="v" stroke="#10b981" strokeWidth={2} dot={false} /></LineChart>
        </ResponsiveContainer>
      </div>
    )}
    {ratingBreakdown && (
      <div className="mt-4 space-y-1.5">
        {ratingData.map((r) => (
          <div key={r.star} className="flex items-center gap-2 text-xs">
            <span className="font-bold">{r.star}★</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400" style={{ width: `${(r.count / 15) * 100}%` }}></div>
            </div>
            <span className="w-6 text-right font-bold text-gray-400">{r.count}</span>
          </div>
        ))}
      </div>
    )}
    {!ratingBreakdown && !isActiveJobs && !isMessages && <p className="text-xs text-gray-400 mt-3 font-medium">{subtext}</p>}
    <div className="absolute right-4 bottom-4 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
  <ArrowRight size={20} className="text-indigo-600" />
</div>
  </div>
);

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back, Rahul!</h1>
        <div className="bg-white px-5 py-2.5 rounded-2xl border border-gray-200 flex items-center gap-4 shadow-sm">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-gray-600">Status: Online</span>
          <div className="w-10 h-5 rounded-full p-1 bg-indigo-600 flex items-center">
            <div className="w-3 h-3 bg-white rounded-full translate-x-5"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <KPICard title="Active Jobs" value="3" icon={Briefcase} isActiveJobs onClick={()=>navigate('/AssignedWorks')} />
        <KPICard title="Today's Earnings" value="₹1,250" icon={IndianRupee} subtext="Trend: +12% vs yesterday" onClick={()=>navigate('/Earnings')} showChart />
        <KPICard title="Customer Rating" value="4.9 / 5.0" icon={Star} onClick={()=>navigate('/Reviews')} ratingBreakdown />
        <KPICard title="Messages" value="3 New" icon={MessageSquare} onClick={()=>navigate('/Messages')} isMessages />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
          <h3 className="font-bold text-gray-800 text-lg mb-6">Earnings Breakdown</h3>
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value">
                    {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  {item.value}% {item.name}
                </div>
              ))}
            </div>
          </div>
          {/* RESTORED: Summary Stats below Pie Chart */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-sm">
            <div><p className="text-gray-400">Highest Monthly</p><p className="font-extrabold text-gray-900">₹12,000</p></div>
            <div><p className="text-gray-400">Avg. Job Value</p><p className="font-extrabold text-gray-900">₹400</p></div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
          <h3 className="font-bold text-gray-800 text-lg mb-0">Today's Schedule</h3>
          <p className="text-gray-800 text-sm font-bold">2nd October 2025</p>
          <div className="h-64 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
            {[
              { time: "10:00 AM - 11:30 AM", customer: "Anita Sharma", service: "AC Repair", status: "Pending arrival at customer site" },
              { time: "01:00 PM - 02:30 PM", customer: "Rahul Verma", service: "Electrical Wiring", status: "Part procurement in progress" },
              { time: "04:00 PM - 05:00 PM", customer: "Sneha Reddy", service: "Plumbing Leakage", status: "En route to location" }
            ].map((job, index) => (
              <div key={index} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">{job.time}</p>
                  <p className="text-xs text-gray-500 mt-1">Customer: {job.customer} | Service: {job.service}</p>
                  <p className="text-xs text-indigo-600 font-bold mt-1.5">{job.status}</p>
                </div>
                <div className="ml-6">
                  <button className="text-xs bg-blue-100 text-blue-700 px-5 py-2 rounded-xl font-bold">Accepted</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
  {/* Professional Current Active Service Card */}
  <div className="bg-indigo-900 p-6 rounded-3xl text-white shadow-lg flex flex-col md:flex-row justify-between md:items-center gap-6">
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-indigo-500/30 p-1.5 rounded-lg"><Zap size={16} className="text-indigo-300" /></div>
        <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest">Active Now</p>
        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
  IN PROGRESS
</span>
      </div>
      
      <h4 className="text-xl font-bold mb-1">AC Installation - Gachibowli</h4>
      <div className="flex items-center gap-4 text-indigo-200 text-sm mt-2">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} /> <span>Plot 42, Green Avenue</span>
        </div>
        <span className="text-indigo-700">•</span>
        <div className="flex items-center gap-1.5">
          <Clock size={16} /> <span>Started 45m ago</span>
        </div>
      </div>
    </div>

    {/* Customer Action Panel */}
    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl min-w-[180px]">
      <p className="text-indigo-300 text-[10px] uppercase font-bold mb-2">Customer</p>
      <p className="font-bold text-white text-lg">Anita Sharma</p>
      <div className="flex gap-2 mt-3">
        <button className="flex-1 bg-white text-indigo-900 text-[10px] font-bold py-2 rounded-lg hover:bg-indigo-50 transition">CALL</button>
        <button className="flex-1 bg-indigo-500 text-white text-[10px] font-bold py-2 rounded-lg hover:bg-indigo-400 transition">NAVIGATE</button>
      </div>
    </div>
  </div>

  {/* Monthly Goal Card */}
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
    <div className="flex justify-between items-center mb-4">
      <h4 className="font-bold text-gray-800">Monthly Goal</h4>
      <Target className="text-emerald-500" size={20} />
    </div>
    <div className="text-3xl font-extrabold text-gray-900 mb-2">₹45,000 <span className="text-sm text-gray-400 font-normal">/ ₹60,000</span></div>
    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-emerald-500 w-[75%]"></div>
    </div>
    <p className="text-xs text-gray-500 mt-2 font-bold">75% Achieved - Keep it up!</p>
    <p className="text-xs text-gray-500 font-bold mb-4">You are on track to exceed your goal!</p>
  </div>
</div>
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)] mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="font-bold text-gray-800 text-xl">Earnings Overview</h3>
            <p className="text-xs text-gray-400 font-medium">Performance tracking for the last 9 months</p>
          </div>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={historyData}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Area type="monotone" dataKey="earnings" stroke="#d4af37" fill="#d4af37" fillOpacity={0.15} strokeWidth={3} />
              <Area type="monotone" dataKey="fees" stroke="#4a6572" fill="#4a6572" fillOpacity={0.1} strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
          <h3 className="font-bold text-gray-800 mb-4">Operations & Growth</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1"><span>Job Completion</span><span>69.6%</span></div>
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 w-[69.6%]"></div></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[ { label: "Avg Response", val: "9.9m" }, { label: "Zones", val: "4 Active" }, { label: "Monthly Growth", val: "+18%" }, { label: "Efficiency", val: "High" } ].map((item, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-xl flex items-center gap-2">
                  <p className="text-[10px] text-gray-400 font-bold">{item.label}</p>
                  <span className="font-bold text-sm">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
           <h3 className="font-bold text-gray-800 text-lg mb-5 flex items-center gap-2">
             <Bell size={20} className="text-indigo-500" /> Notifications
           </h3>
           <div className="space-y-3">
             {notifications.map((n, index) => (
               <div key={n.id} className="group relative flex justify-between items-center bg-gray-50 p-2 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-200">
                 <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full ${index === 0 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                 <div className="pl-2">
                   <p className="text-sm font-bold text-gray-800">{n.text}</p>
                   <span className="text-[10px] text-gray-400 font-medium uppercase">{n.time}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Camera size={18}/> Recent work Photos</h3>
          <div className="grid grid-cols-3 gap-4">
            {workPhotos.map(p => (
              <div key={p.id} className="flex flex-col gap-2">
                <div className="aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                </div>
                 <p className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-wider truncate">
    {p.label}
  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}