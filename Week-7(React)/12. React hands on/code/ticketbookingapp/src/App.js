import React, { useState } from "react";
import "./App.css";

// Greeting Components
function GuestGreeting() {
  return <h1 className="message">Please sign up.</h1>;
}

function UserGreeting() {
  return <h1 className="message">Welcome back</h1>;
}

// Button Components
function LoginButton(props) {
  return <button className="action-button" onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button className="action-button" onClick={props.onClick}>Logout</button>;
}

// Conditional Greeting
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
