import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 👈 Import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let response = null;

    if (email === "admin@gmail.com" && password === "123456") {
      response = { success: true, token: "admin-token", userType: "admin" };
    } else if (email === "user1@gmail.com" && password === "123456") {
      response = { success: true, token: "user1-token", userType: "user1" };
    } else if (email === "user2@gmail.com" && password === "123456") {
      response = { success: true, token: "user2-token", userType: "user2" };
    }

    if (!response) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("userType", response.userType);

    if (response.userType === "admin") navigate("/admin/home");
    else navigate("/user/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
