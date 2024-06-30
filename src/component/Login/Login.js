import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import "./Login.css";
import { Remitance } from "../Remitance/Remitance";

export const Login = () => {
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div id="login-container">
      {authenticated ? (
        <>
          <p>Welcome, {user.id}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Login;
