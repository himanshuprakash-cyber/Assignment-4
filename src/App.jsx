import React, { useState } from "react";
import LoginPage from "./LoginPage";
import UserDashboard from "./UserDashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <UserDashboard user={user} />
      )}
    </>
  );
}
