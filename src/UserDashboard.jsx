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
} from "lucide-react";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
    { id: "analytics", label: "Analytics", icon: <BarChart2 className="w-4 h-4" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="w-4 h-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
  ];

  // Fullscreen toggle
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
            className="p-4"
          >
            <h2 className="text-xl font-semibold mb-2">User Profile</h2>
            <p className="text-gray-600 mb-4">
              Welcome to your profile section, <b>Himanshu Prakash</b>. Manage your details below.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium text-gray-800">Name</h3>
                <p className="text-gray-600">Himanshu Prakash</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">himansh8u.prakash@mitwpu.edu.in</p>
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
            className="p-4"
          >
            <h2 className="text-xl font-semibold mb-2">User Analytics</h2>
            <p className="text-gray-600 mb-4">Track your performance and engagement below.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-700">1.2k</p>
                <p className="text-sm text-blue-600">Profile Views</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-700">540</p>
                <p className="text-sm text-green-600">Interactions</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-700">37%</p>
                <p className="text-sm text-purple-600">Engagement</p>
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
            className="p-4"
          >
            <h2 className="text-xl font-semibold mb-2">Notifications</h2>
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded-lg shadow flex justify-between items-center">
                <p className="text-gray-700">Password changed successfully.</p>
                <span className="text-xs text-gray-500">2 hrs ago</span>
              </li>
              <li className="bg-white p-3 rounded-lg shadow flex justify-between items-center">
                <p className="text-gray-700">New login detected from Chrome.</p>
                <span className="text-xs text-gray-500">1 day ago</span>
              </li>
              <li className="bg-white p-3 rounded-lg shadow flex justify-between items-center">
                <p className="text-gray-700">Weekly performance report is ready.</p>
                <span className="text-xs text-gray-500">3 days ago</span>
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
            className="p-4"
          >
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-600 mb-4">
              Manage your preferences, privacy, and theme options below.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Bell className="w-4 h-4" /> Enable Notifications
                </p>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Palette className="w-4 h-4" /> Dark Mode
                </p>
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Change Password
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm">Edit</button>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
                <p className="text-gray-700 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Privacy Settings
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm">Manage</button>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
                <p className="text-gray-700">Language Preference</p>
                <select className="border rounded p-1 text-gray-700">
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
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-indigo-50 to-indigo-100 text-gray-900"
        } w-full h-screen flex items-center justify-center transition-colors duration-500`}
    >
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white/90"
          } backdrop-blur-md w-full h-full max-w-7xl rounded-none shadow-lg overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <header
          className={`${darkMode ? "bg-gray-700" : "bg-indigo-600"
            } text-white p-5 flex items-center justify-between`}
        >
          <h1 className="text-2xl font-bold tracking-wide">User Dashboard</h1>
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm"
          >
            {fullscreen ? (
              <>
                <Minimize2 className="w-4 h-4" /> Exit Fullscreen
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4" /> Fullscreen
              </>
            )}
          </button>
        </header>

        {/* Tabs */}
        <nav
          className={`${darkMode ? "bg-gray-700" : "bg-indigo-100"
            } flex justify-around border-b ${darkMode ? "border-gray-600" : "border-indigo-200"}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors ${activeTab === tab.id
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
