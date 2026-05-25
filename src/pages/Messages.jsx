import { useState, useRef, useEffect } from "react";
import { 
  FaSearch, 
  FaPaperPlane, 
  FaPaperclip, 
  FaSmile, 
  FaPhoneAlt, 
  FaVideo, 
  FaLock,
  FaCheckDouble
} from "react-icons/fa";

// Expanded to 6 contacts
const initialContacts = [
  { id: 1, name: "Anjali Sharma", avatar: "https://randomuser.me/api/portraits/women/68.jpg", status: "Active", service: "AC Repair" },
  { id: 2, name: "Rohit Verma", avatar: "https://randomuser.me/api/portraits/men/45.jpg", status: "Completed", service: "Home Cleaning" },
  { id: 3, name: "Priya Patel", avatar: "https://randomuser.me/api/portraits/women/44.jpg", status: "Active", service: "Plumbing" },
  { id: 4, name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/32.jpg", status: "Active", service: "Painting" },
  { id: 5, name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/22.jpg", status: "Completed", service: "Electrical" },
  { id: 6, name: "Michael Chang", avatar: "https://randomuser.me/api/portraits/men/67.jpg", status: "Active", service: "Carpentry" },
];

function Messages() {
  // Defaulting to 1 so the 5-message history is visible immediately
  const [activeChatId, setActiveChatId] = useState(null); 
  const [newMessage, setNewMessage] = useState("");
  
  // Expanded chat history
  const [chatHistory, setChatHistory] = useState({
    1: [
      { text: "Hi, I'm facing issues with the AC cooling.", isMe: false, time: "10:30 AM" },
      { text: "Hello Anjali! I can help with that. What's the brand of the unit?", isMe: true, time: "10:32 AM" },
      { text: "It's a Voltas 1.5 ton. It started making a weird rattling noise last night.", isMe: false, time: "10:35 AM" },
      { text: "Noted. Sounds like a fan motor issue. I'll bring the necessary diagnostic tools and spare parts.", isMe: true, time: "10:40 AM" },
      { text: "Great. Please come early.", isMe: false, time: "10:45 AM" }
    ],
    2: [{ text: "Service was great. Thank you!", isMe: false, time: "Yesterday" }],
    3: [{ text: "Can we reschedule the plumbing check?", isMe: false, time: "09:00 AM" }],
    4: [{ text: "I've sent over the color samples.", isMe: true, time: "08:15 AM" }],
    5: [{ text: "The wiring looks secure now.", isMe: true, time: "Mon" }],
    6: [{ text: "Do you have the measurements for the cabinets?", isMe: false, time: "Tue" }],
  });

  const messagesEndRef = useRef(null);
  
  // Auto-scroll to the latest message
  useEffect(() => { 
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [chatHistory, activeChatId]);

  const activeContact = initialContacts.find(c => c.id === activeChatId);
  const currentMessages = chatHistory[activeChatId] || [];

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = { text: newMessage, isMe: true, time: currentTime };
    
    setChatHistory(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMsg]
    }));
    
    setNewMessage("");
  };

  const getLastMessage = (id) => {
    const msgs = chatHistory[id];
    return msgs && msgs.length > 0 ? msgs[msgs.length - 1] : { text: "No messages yet", time: "" };
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex overflow-hidden h-[calc(100vh-160px)] w-full">
      
      {/* SIDEBAR */}
      <div className="w-80 flex flex-col border-r border-gray-200 bg-gray-50/30 shrink-0">
        <div className="p-5 border-b border-gray-200 bg-white">
          <h1 className="text-2xl font-bold text-[#06132d]">Messages</h1>
          <div className="relative mt-4">
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-gray-100 text-sm rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-yellow-400 transition-all" 
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {initialContacts.map((c) => {
            const lastMsg = getLastMessage(c.id);
            return (
              <div 
                key={c.id} 
                onClick={() => setActiveChatId(c.id)} 
                className={`p-3 rounded-xl cursor-pointer transition-all duration-200 flex gap-3 items-center
                  ${activeChatId === c.id ? 'bg-yellow-50 border border-yellow-200 shadow-sm' : 'hover:bg-gray-100 border border-transparent'}`}
              >
                <div className="relative">
                  <img src={c.avatar} className="w-12 h-12 rounded-full object-cover" alt={c.name} />
                  {c.status === "Active" && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h2 className="text-sm font-bold text-gray-900 truncate">{c.name}</h2>
                    <span className="text-xs text-gray-500 font-medium whitespace-nowrap ml-2">{lastMsg.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{lastMsg.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-hidden">
        {activeContact ? (
          <>
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 bg-white flex justify-between items-center shrink-0 shadow-sm z-10">
              <div className="flex items-center gap-4">
                <img src={activeContact.avatar} className="w-10 h-10 rounded-full object-cover" alt="avatar" />
                <div>
                  <h2 className="font-bold text-gray-900 leading-tight">{activeContact.name}</h2>
                  <p className="text-xs text-gray-500 font-medium">
                    {activeContact.service} • <span className={activeContact.status === "Completed" ? "text-red-500" : "text-green-500"}>{activeContact.status}</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-5 text-gray-400">
                <FaPhoneAlt className="cursor-pointer hover:text-[#06132d] transition-colors" />
                <FaVideo className="cursor-pointer hover:text-[#06132d] transition-colors" />
              </div>
            </div>
            
            {/* Scrollable Message History */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {currentMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`relative px-4 py-2.5 shadow-sm text-sm max-w-[70%] flex flex-col
                    ${msg.isMe 
                      ? 'bg-[#06132d] text-white rounded-2xl rounded-br-sm' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-bl-sm'}`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <div className={`flex items-center gap-1 mt-1 text-[10px] ${msg.isMe ? 'text-gray-300 justify-end' : 'text-gray-400 justify-start'}`}>
                      <span>{msg.time}</span>
                      {msg.isMe && <FaCheckDouble className="text-blue-400 ml-1" />}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area or Locked State */}
            {activeContact.status === "Completed" ? (
              <div className="p-5 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-200/60 rounded-xl text-sm font-medium text-gray-600">
                  <FaLock className="text-gray-500" />
                  Service marked as Completed. This conversation is now closed.
                </div>
              </div>
            ) : (
              <div className="p-4 border-t border-gray-200 bg-white shrink-0">
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-transparent transition-all">
                  <FaPaperclip className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                  <input 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    type="text" 
                    className="flex-1 bg-transparent outline-none text-sm py-1.5" 
                    placeholder="Type a message..." 
                  />
                  <FaSmile className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors mr-2" />
                  <button 
                    onClick={handleSend}
                    disabled={!newMessage.trim()}
                    className={`p-2 rounded-full transition-colors ${newMessage.trim() ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    <FaPaperPlane className="ml-0.5" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <FaSmile className="text-3xl text-gray-300" />
            </div>
            <p className="text-sm font-medium text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;