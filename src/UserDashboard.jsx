import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  BarChart2,
  Settings,
  Bell,
  Lock,
  Shield,
  Palette,
  Maximize2,
  Minimize2,
  LogOut,
} from "lucide-react";

export default function UserDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: <User className="w-5 h-5" /> },
    { id: "analytics", label: "Analytics", icon: <BarChart2 className="w-5 h-5" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">👤 User Profile</h2>
            <p className="text-lg mb-6 text-gray-600">
              Welcome to your profile, <b>{user.name}</b>. Here you can view and manage your details.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-medium text-gray-800">Name</h3>
                <p className="text-gray-600 text-lg mt-1">{user.name}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p className="text-gray-600 text-lg mt-1">{user.email}</p>
              </div>
            </div>
          </motion.div>
        );

      case "analytics":
        return (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">📊 User Analytics</h2>
            <p className="text-lg text-gray-600 mb-6">
              Track your performance and engagement below.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-blue-100 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-blue-700">1.2k</p>
                <p className="text-lg text-blue-600">Profile Views</p>
              </div>
              <div className="bg-green-100 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-green-700">540</p>
                <p className="text-lg text-green-600">Interactions</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-purple-700">37%</p>
                <p className="text-lg text-purple-600">Engagement</p>
              </div>
            </div>
          </motion.div>
        );

      case "notifications":
        return (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">🔔 Notifications</h2>
            <ul className="space-y-4 text-lg">
              <li className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                <p className="text-gray-700">Password changed successfully.</p>
                <span className="text-sm text-gray-500">2 hrs ago</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                <p className="text-gray-700">New login detected from Chrome.</p>
                <span className="text-sm text-gray-500">1 day ago</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                <p className="text-gray-700">Weekly performance report is ready.</p>
                <span className="text-sm text-gray-500">3 days ago</span>
              </li>
            </ul>
          </motion.div>
        );

      case "settings":
        return (
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">⚙️ Settings</h2>
            <p className="text-lg mb-6 text-gray-600">
              Manage your preferences, privacy, and appearance below.
            </p>
            <div className="space-y-5 text-lg">
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Bell className="w-5 h-5" /> Enable Notifications
                </p>
                <input type="checkbox" className="w-5 h-5" defaultChecked />
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Palette className="w-5 h-5" /> Dark Mode
                </p>
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Lock className="w-5 h-5" /> Change Password
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 text-lg font-medium">
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Shield className="w-5 h-5" /> Privacy Settings
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 text-lg font-medium">
                  Manage
                </button>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
                <p className="text-gray-700">Language Preference</p>
                <select className="border rounded p-2 text-gray-700 text-lg">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`${darkMode
        ? "bg-gray-900 text-white"
        : "bg-gradient-to-br from-indigo-50 to-indigo-100 text-gray-900"
        } w-full h-screen flex items-center justify-center transition-colors duration-500`}
    >
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"} w-full h-full max-w-7xl rounded-none shadow-lg overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <header
          className={`${darkMode ? "bg-gray-700" : "bg-indigo-600"
            } text-white p-6 flex items-center justify-between`}
        >
          <h1 className="text-3xl font-bold tracking-wide">User Dashboard</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-base"
            >
              {fullscreen ? (
                <>
                  <Minimize2 className="w-5 h-5" /> Exit Fullscreen
                </>
              ) : (
                <>
                  <Maximize2 className="w-5 h-5" /> Fullscreen
                </>
              )}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white text-base"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </header>

        {/* Tabs */}
        <nav
          className={`${darkMode ? "bg-gray-700" : "bg-indigo-100"
            } flex justify-around border-b text-lg font-medium ${darkMode ? "border-gray-600" : "border-indigo-200"}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 transition-all duration-200 ${activeTab === tab.id
                  ? darkMode
                    ? "text-yellow-400 border-b-4 border-yellow-400 bg-gray-800"
                    : "text-indigo-700 border-b-4 border-indigo-600 bg-white"
                  : darkMode
                    ? "text-gray-300 hover:text-yellow-400"
                    : "text-gray-600 hover:text-indigo-700"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div
          className={`flex-1 overflow-y-auto p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
            }`}
        >
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}
