import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  function Login(details) {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not Match!");
      setError("Details do not Match!");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm LOGIN={Login} error={error} />
      )}
    </div>
  );
}

export default App;
