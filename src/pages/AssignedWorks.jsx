import React, { useState } from 'react';
import { Search, Filter, Phone, Navigation, Clock, Briefcase, Calendar, AlertCircle, MapPin } from 'lucide-react';

const AssignedWorks = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const stats = [
    { label: 'Total', value: '12', icon: Briefcase, color: 'text-indigo-600', bg: 'bg-indigo-500' },
    { label: 'Active', value: '3', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-500' },
    { label: 'Upcoming', value: '5', icon: Calendar, color: 'text-amber-600', bg: 'bg-amber-500' },
    { label: 'Pending', value: '4', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-500' },
  ];

  const jobs = [
    { id: 1, customer: "Anita Sharma", service: "AC Repair", status: "In Progress", time: "10:00 AM", loc: "Gachibowli", border: "border-l-emerald-500" },
    { id: 2, customer: "Rahul Verma", service: "Wiring", status: "Upcoming", time: "01:00 PM", loc: "Jubilee Hills", border: "border-l-amber-500" },
    { id: 3, customer: "Sneha Reddy", service: "Plumbing", status: "En Route", time: "04:00 PM", loc: "Madhapur", border: "border-l-indigo-500" },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesTab = activeTab === 'All' || job.status === activeTab;
    const matchesSearch = job.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6 bg-slate-100/50 min-h-screen font-sans">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Assigned Works</h1>
      
      {/* Stats Cards - Added Light Background Layer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="relative overflow-hidden bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            {/* Added Light Background Color Layer */}
            <div className={`absolute inset-0 ${stat.bg} opacity-[0.07]`} />
            
            <div className={`p-3 bg-white ${stat.color} rounded-xl shadow-sm z-10`}>
              <stat.icon size={22} />
            </div>
            <div className="z-10">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{stat.label}</p>
              <p className="font-extrabold text-lg text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Search & Filter */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
          <input 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all" 
            placeholder="Search customer or service..." 
          />
        </div>
        <button className="px-6 py-3.5 bg-white rounded-2xl border border-slate-200 text-slate-600 font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
          <Filter size={18}/> Filter
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {['All', 'Upcoming', 'In Progress', 'Completed'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} 
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? filteredJobs.map(job => (
          <div key={job.id} className={`bg-white p-6 rounded-3xl border-l-4 ${job.border} border border-slate-200 flex items-center justify-between shadow-sm hover:shadow-md transition-all`}>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-extrabold text-lg text-slate-900">{job.customer}</p>
                <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                  <span className="font-semibold text-slate-700">{job.service}</span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {job.time}</span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-indigo-600 font-medium"><MapPin size={14} /> {job.loc}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${job.status === 'In Progress' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}`}>
                {job.status}
              </span>
              <div className="flex gap-2">
                <button className="p-3 bg-slate-100 rounded-xl text-slate-500 hover:bg-slate-200 transition-colors"><Phone size={18}/></button>
                <button className="p-3 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"><Navigation size={18}/></button>
              </div>
            </div>
          </div>
        )) : <p className="text-center text-slate-400 py-10">No jobs found for this category.</p>}
      </div>
    </div>
  );
};

export default AssignedWorks;