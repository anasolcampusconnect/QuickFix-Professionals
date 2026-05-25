import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Validation Errors
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });

  // Credentials
  const VALID_EMAIL = "worker@quickfix.com";
  const VALID_PASSWORD = "Password@123";

  const handleLogin = (e) => {
    e.preventDefault();
    let valid = true;
    let emailErr = "";
    let passwordErr = "";

    if (!email) {
      emailErr = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailErr = "Please enter a valid email address";
      valid = false;
    }

    if (!password) {
      passwordErr = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passwordErr = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors({ email: emailErr, password: passwordErr, general: "" });

    if (valid) {
      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        navigate("/dashboard");
      } else {
        setErrors(prev => ({
          ...prev,
          general: "Invalid Email or Password! Try: worker@quickfix.com / Password@123"
        }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 md:p-8 antialiased font-sans select-none perspective-1200">
      
      {/* OUTER VISUAL FRAME: Thick Smooth White Border with Inner Guideline */}
      <div className="bg-white rounded-[2.8rem] shadow-[0_35px_85px_-20px_rgba(11,19,43,0.25)] w-full max-w-[1080px] flex flex-col md:flex-row overflow-hidden border-[12px] border-white min-h-[250px] relative">
        
        {/* Fine layout outer guideline matching the interface structure */}
        <div className="absolute inset-0 border border-[#ffbc00]/10 rounded-[2.2rem] pointer-events-none z-40"></div>

        {/* ========================================================
            LEFT SECTION: Exact Color Sync - Midnight Navy & Layered Silk Waves
           ======================================================== */}
        <div className="relative w-full md:w-[58%] p-8 md:p-14 flex flex-col justify-between min-h-[380px] md:min-h-full bg-[#0b132b] overflow-hidden transform-style-3d">
          
          {/* Subtle Architectural Skeletal Grid Mesh */}
          <div className="absolute inset-0 opacity-[0.06] z-10 pointer-events-none mix-blend-overlay">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          </div>

          {/* EXACT MATCH: Midnight Navy Deep Base Tone Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050a18] via-[#0b132b] to-[#1c2541] opacity-[0.98] z-0"></div>

          {/* LAYER 1: The Giant Fluid White Silk Cutout Mask */}
          <div className="absolute top-0 bottom-0 right-0 hidden md:block w-[240px] z-20 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M100,0 
                   C65,12 55,22 82,32 
                   C105,40 45,52 42,68 
                   C39,84 85,90 55,100 L100,100 Z" 
                fill="white" 
              />
            </svg>
          </div>

          {/* LAYER 2: Semi-Transparent Wave Shade Overlay - Matched to Dashboard theme translucency */}
          <div className="absolute top-0 bottom-0 right-[45px] hidden md:block w-[160px] z-10 pointer-events-none opacity-[0.12]">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M100,0 
                   C60,16 50,30 75,42 
                   C95,50 38,68 36,82 
                   C34,96 78,92 50,100 L100,100 Z" 
                fill="url(#premium-silk-gradient)" 
              />
              <defs>
                <linearGradient id="premium-silk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="60%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Elegant Thin Light Wave Swirls weaving in background */}
          <div className="absolute inset-0 z-10 opacity-[0.08] pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
              <path d="M-10,40 C25,15 45,85 110,35" stroke="white" strokeWidth="1" />
              <path d="M0,75 C40,45 20,95 105,65" stroke="white" strokeWidth="0.75" />
            </svg>
          </div>

          {/* Mobile responsive boundary flipped wave */}
          <div className="absolute left-0 right-0 bottom-0 block md:hidden h-24 z-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,100 C30,65 45,82 70,35 C80,15 90,20 100,0 L100,100 Z" fill="white" />
            </svg>
          </div>

          {/* Brand Identity Branding Header Area */}
          <div className="relative z-30">
            {/* EXACT MATCH: Solid Industrial Yellow Accent on FIX */}
            <h1 className="text-3xl md:text-[42px] font-black tracking-tight font-sans text-white drop-shadow-md">
              Quick<span className="text-[#ffbc00]">fix</span>
            </h1>
            <p className="text-gray-300 mt-2 text-xs md:text-sm font-medium tracking-wide max-w-sm leading-relaxed">
              Bratute your hlaidibility and professional worker elements
            </p>
          </div>

          {/* ==========================================
              3D INTERACTIVE OBJECTS (Color Synced)
             ========================================== */}
          <div className="relative z-30 my-auto flex flex-col items-center justify-center min-h-[320px] hidden md:flex">
            
            {/* 3D Object 1: Floating Helmet synced to Dashboard Yellow */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [3, -3, 3] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-[45%] transform -translate-x-1/2 cursor-pointer filter drop-shadow-[0_20px_18px_rgba(0,0,0,0.5)]"
            >
              <div className="bg-[#ffbc00] rounded-full p-4 border-b-[6px] border-[#cc9600] flex items-center justify-center w-[72px] h-[58px] relative shadow-[inset_0_5px_6px_rgba(255,255,255,0.45)]">
                <div className="absolute -bottom-1 w-[86px] h-2.5 bg-[#ffbc00] rounded-full shadow-md"></div>
                <span className="text-white text-[11px] font-black z-10 border border-white/70 rounded-md px-1 bg-black/10">⚒</span>
              </div>
            </motion.div>

            {/* 3D Object 2: Medallion Gold Badge with Midnight Contrast */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotateY: 12, translateZ: 35 }}
              className="bg-gradient-to-b from-[#fff0cc] to-[#ffbc00] p-[7px] rounded-full shadow-[0_30px_50px_-12px_rgba(0,0,0,0.6)] border-[5px] border-white max-w-[200px] text-center z-20 cursor-pointer transform-style-3d relative"
            >
              <div className="bg-gradient-to-b from-[#fff9eb] to-[#d9a000] rounded-full p-3.5 flex flex-col items-center shadow-inner">
                {/* Circular Worker Avatar Box */}
                <div className="w-[84px] h-[84px] rounded-full border-4 border-white overflow-hidden bg-slate-100 shadow-md mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                    alt="Certified Electrician"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
                <p className="text-[11px] font-black text-[#0b132b] uppercase tracking-wide">Certified Electrician</p>
                <div className="text-[9px] text-[#402e05] mt-0.5 tracking-widest">★★★★★</div>
              </div>
            </motion.div>

            {/* 3D Object 3: Toolbox resting beneath */}
            <motion.div
              animate={{ y: [0, -9, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3.8, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-[48%] transform -translate-x-1/2 cursor-pointer filter drop-shadow-[0_16px_14px_rgba(0,0,0,0.5)]"
            >
              <div className="bg-[#e0a500] rounded-xl p-3 border-b-[6px] border-[#9c7300] w-[70px] h-[52px] flex flex-col justify-between relative shadow-lg">
                <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-9 h-3 bg-[#1c2541] rounded-t-md border-b border-black/20"></div>
                <div className="flex justify-around text-slate-200 text-xs font-bold pt-1">🛠️</div>
              </div>
            </motion.div>

          </div>

          <div className="relative z-30 hidden md:block text-white/20 text-[10px] font-bold tracking-wider">
            QuickFix System Portal Ecosystem v4.2
          </div>
        </div>

        {/* ========================================================
            RIGHT SECTION: Clean Crisp Account Login Canvas Panel
           ======================================================== */}
        <div className="w-full md:w-[42%] p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-white relative z-10">
          
          {/* Main Head Layout Title */}
          <div className="mb-8">
            <h2 className="text-[32px] font-black text-[#0b132b] tracking-tight font-sans">
              Login
            </h2>
          </div>

          {/* Interactive Form System */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Input Handler Element: Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 tracking-wide block ml-0.5">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`w-full p-3.5 bg-white border ${
                  errors.email ? "border-red-400 focus:ring-red-100" : "border-gray-300 focus:border-[#ffbc00] focus:ring-[#ffbc00]/10"
                } rounded-xl outline-none text-gray-800 text-sm font-medium transition-all focus:ring-4`}
              />
              {errors.email && <p className="text-red-500 text-[11px] font-medium mt-1">{errors.email}</p>}
            </div>

            {/* Input Handler Element: Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 tracking-wide block ml-0.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`w-full p-3.5 pr-12 bg-white border ${
                    errors.password ? "border-red-400 focus:ring-red-100" : "border-gray-300 focus:border-[#ffbc00] focus:ring-[#ffbc00]/10"
                  } rounded-xl outline-none text-gray-800 text-sm font-medium transition-all focus:ring-4`}
                />
                
                {/* Switch Password Visibility Component Trigger */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-[11px] font-medium mt-1">{errors.password}</p>}
            </div>

            {/* Runtime System Error Container */}
            {errors.general && (
              <p className="p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 font-medium">{errors.general}</p>
            )}

            {/* Solid Flat Amber Block Trigger Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-[#ffbc00] hover:bg-[#e0a500] text-[#0b132b] text-sm font-bold rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer Navigation References List */}
          <div className="mt-14 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-400 justify-center md:justify-start font-semibold tracking-wide">
            <a href="#terms" className="hover:text-[#ffbc00] transition-colors">Terms / Links</a>
            <a href="#cookie" className="hover:text-[#ffbc00] transition-colors">Cookie Policy</a>
            <a href="#privacy" className="hover:text-[#ffbc00] transition-colors">Privacy Policy</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;