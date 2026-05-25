import React, { useState } from "react";
import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  MapPin,
  Briefcase,
  Star,
  AlarmClock,
  User,
  Wallet,
  TrendingUp,
  Sparkles,
  Target,
  Activity,
} from "lucide-react";

function Schedule() {
  const todayWorks = [
    {
      client: "Rahul Sharma",
      service: "AC Repair",
      time: "09:00 AM",
      location: "Madhapur",
      status: "Completed",
    },
    {
      client: "Priya Reddy",
      service: "Washing Machine",
      time: "12:30 PM",
      location: "Kukatpally",
      status: "In Progress",
    },
    {
      client: "Kiran Kumar",
      service: "Electrical Fix",
      time: "04:00 PM",
      location: "Gachibowli",
      status: "Pending",
    },
  ];

  return (
<div className="space-y-5 min-h-screen w-full bg-white">  

      {/* HEADER — soft cream with yellow accents */}
      <div className="relative overflow-hidden bg-white rounded-[0px] p-6 shadow-[0_8px_30px_rgba(250,204,21,0.15)] border border-yellow-200">
        {/* decorative blobs */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col lg:flex-row justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3">
              <Sparkles size={14} /> TODAY'S OVERVIEW
            </div>
            <h1 className="text-4xl font-bold text-[#1a1a2e] mb-2">
              Work Schedule
            </h1>
            <p className="text-gray-600 text-sm max-w-2xl">
              Track schedules, works, earnings, and performance easily.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl px-5 py-3 min-w-[120px] border border-yellow-200">
              <p className="text-amber-700/70 text-xs font-semibold">Today</p>
              <h2 className="text-2xl font-bold text-amber-700">06</h2>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl px-5 py-3 min-w-[120px] border border-emerald-200">
              <p className="text-emerald-700/70 text-xs font-semibold">Completed</p>
              <h2 className="text-2xl font-bold text-emerald-600">04</h2>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl px-5 py-3 min-w-[120px] border border-rose-200">
              <p className="text-rose-700/70 text-xs font-semibold">Pending</p>
              <h2 className="text-2xl font-bold text-rose-500">02</h2>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK STATS — each card with unique accent stripe */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {[
          { label: "Tasks", value: "8", icon: CalendarDays, accent: "yellow", from: "from-yellow-400", to: "to-amber-300", bg: "bg-yellow-50", text: "text-yellow-600" },
          { label: "Completed", value: "21", icon: CheckCircle2, accent: "emerald", from: "from-emerald-400", to: "to-teal-300", bg: "bg-emerald-50", text: "text-emerald-600" },
          { label: "Pending", value: "5", icon: AlarmClock, accent: "rose", from: "from-rose-400", to: "to-pink-300", bg: "bg-rose-50", text: "text-rose-500" },
          { label: "Rating", value: "4.8", icon: Star, accent: "sky", from: "from-sky-400", to: "to-blue-300", bg: "bg-sky-50", text: "text-sky-600" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="relative bg-white rounded-3xl p-5 shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${s.from} ${s.to}`}></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                  <h1 className="text-3xl font-bold text-[#1a1a2e] mt-1">{s.value}</h1>
                  <p className={`text-xs font-semibold mt-1 ${s.text}`}>+12% this week</p>
                </div>
                <div className={`${s.bg} p-3 rounded-2xl`}>
                  <Icon className={s.text} size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* TODAY SCHEDULE — timeline style */}
      <div className="bg-[#fffaf0]/90 backdrop-blur-sm rounded-3xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2.5 rounded-xl shadow-md shadow-yellow-200">
            <Clock3 className="text-white" size={22} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a2e]">Today's Schedule</h2>
            <p className="text-gray-500 text-sm">Assigned works for today</p>
          </div>
        </div>

        <div className="relative space-y-4 before:content-[''] before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-yellow-200 before:via-amber-200 before:to-transparent">
          {todayWorks.map((work, index) => (
            <div
              key={index}
              className="relative pl-16 group"
            >
              <div className="absolute left-2 top-5 w-9 h-9 rounded-full bg-white border-4 border-yellow-300 shadow-md flex items-center justify-center">
                <Briefcase size={14} className="text-amber-600" />
              </div>

              <div className="bg-gradient-to-br from-white to-yellow-50/40 border border-yellow-100 rounded-2xl p-5 hover:shadow-lg hover:border-yellow-200 transition-all duration-300">
                <div className="flex flex-col xl:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a2e]">{work.service}</h3>
                    <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                      <User size={15} />
                      <span>{work.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                      <MapPin size={15} />
                      <span>{work.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5">
                      <Clock3 size={14} /> {work.time}
                    </div>
                    <div
                      className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                        work.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : work.status === "In Progress"
                          ? "bg-sky-100 text-sky-700"
                          : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      {work.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EARNINGS + PERFORMANCE */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

        {/* EARNINGS — soft mint card */}
        <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-[28px] p-6 border border-emerald-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-200">
              <Wallet className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[#1a1a2e]">Earnings Overview</h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Today", value: "₹2,450", color: "text-emerald-600", bg: "from-emerald-100 to-emerald-50", border: "border-emerald-200" },
              { label: "Week", value: "₹12,800", color: "text-sky-600", bg: "from-sky-100 to-sky-50", border: "border-sky-200" },
              { label: "Pending", value: "₹1,200", color: "text-rose-500", bg: "from-rose-100 to-rose-50", border: "border-rose-200" },
            ].map((e, i) => (
              <div key={i} className={`bg-gradient-to-br ${e.bg} rounded-2xl py-5 px-3 text-center border ${e.border}`}>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">{e.label}</p>
                <h3 className={`text-2xl font-bold ${e.color} mt-2`}>{e.value}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* PERFORMANCE — soft lavender */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-[28px] p-6 border border-indigo-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center shadow-md shadow-indigo-200">
              <TrendingUp className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[#1a1a2e]">Performance Metrics</h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "92%", label: "Completion", color: "#10b981" },
              { value: "96%", label: "Satisfaction", color: "#f59e0b" },
              { value: "88%", label: "On-Time", color: "#6366f1" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 rotate-[-90deg]">
                    <circle cx="48" cy="48" r="38" stroke="#eef2ff" strokeWidth="8" fill="none" />
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      stroke={item.color}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="239"
                      strokeDashoffset="20"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#1a1a2e]">
                    {item.value}
                  </div>
                </div>
                <p className="mt-3 text-gray-600 font-medium text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM ACTIVITY */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-md shadow-yellow-200">
              <Activity className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a2e]">Team Activity</h2>
              <p className="text-gray-500 text-sm mt-0.5">Live technician updates</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Active Now
          </div>
        </div>

        <div className="space-y-4">
          {[
            { initials: "RK", name: "Rakesh Kumar", work: "AC Installation", status: "Completed", statusColor: "text-emerald-600", avatarFrom: "from-sky-100", avatarTo: "to-blue-200", avatarText: "text-sky-700", bar: "bg-emerald-400" },
            { initials: "SP", name: "Sai Prasad", work: "Plumbing Repair", status: "Ongoing", statusColor: "text-amber-600", avatarFrom: "from-purple-100", avatarTo: "to-pink-100", avatarText: "text-purple-700", bar: "bg-amber-400" },
          ].map((t, i) => (
            <div key={i} className="relative flex items-center justify-between bg-gradient-to-r from-yellow-50/40 to-white rounded-2xl p-4 border border-gray-100 overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${t.bar}`}></div>
              <div className="flex items-center gap-3 pl-2">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.avatarFrom} ${t.avatarTo} flex items-center justify-center font-bold ${t.avatarText}`}>
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e]">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.work}</p>
                </div>
              </div>
              <span className={`font-semibold text-sm ${t.statusColor}`}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOMER REVIEWS */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-md shadow-yellow-200">
              <Star className="text-white fill-white" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a2e]">Customer Reviews</h2>
              <p className="text-gray-500 text-sm mt-0.5">Latest customer feedback</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-gradient-to-br from-yellow-100 to-amber-100 px-4 py-2 rounded-xl border border-yellow-200">
            <Star className="text-yellow-500 fill-yellow-500" size={18} />
            <span className="font-bold text-yellow-700">4.9</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { text: "Excellent and fast service. Technician arrived on time and solved the issue quickly.", name: "Priya Sharma", bg: "from-yellow-50 to-amber-50", border: "border-yellow-100", avatar: "bg-yellow-200 text-yellow-700" },
            { text: "Professional support team and very smooth experience overall.", name: "Arjun Verma", bg: "from-sky-50 to-blue-50", border: "border-sky-100", avatar: "bg-sky-200 text-sky-700" },
          ].map((r, i) => (
            <div key={i} className={`bg-gradient-to-br ${r.bg} rounded-2xl p-5 border ${r.border} relative`}>
              <div className="text-5xl leading-none text-yellow-300 absolute top-2 right-4 font-serif">"</div>
              <p className="text-gray-700 leading-7 relative">
                {r.text}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${r.avatar} flex items-center justify-center font-bold text-xs`}>
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="font-bold text-[#1a1a2e]">{r.name}</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MONTHLY TARGET — light cream with yellow accents */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-7 shadow-[0_8px_30px_rgba(250,204,21,0.2)] border border-yellow-200">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-300/20 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-200/60 text-yellow-800 font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
              <Target size={14} /> Monthly Target
            </div>
            <h2 className="text-4xl font-bold mt-3 text-[#1a1a2e]">
              78% <span className="text-amber-600">Achieved</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl leading-7">
              Great progress this month. Complete 12 more jobs to unlock performance bonuses.
            </p>
          </div>

          <div className="flex items-center">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl px-8 py-6 border border-yellow-200 shadow-sm">
              <p className="text-gray-500 text-sm">Remaining Jobs</p>
              <h1 className="text-5xl font-extrabold text-amber-600 mt-2">12</h1>
            </div>
          </div>
        </div>

        <div className="relative mt-6">
          <div className="w-full h-4 bg-white/60 rounded-full overflow-hidden border border-yellow-200">
            <div className="w-[78%] h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-full shadow-md shadow-yellow-300/50 flex items-center justify-end pr-2">
              <span className="text-[10px] font-bold text-white">78%</span>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
            <span>0%</span>
            <span>Goal: 100%</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Schedule;