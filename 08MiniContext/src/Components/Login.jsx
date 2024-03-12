import React, { useState, useContext, useTransition } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="enterusername"
      />
      {"  "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter Pssword"
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}
fkdfjbb
console.log("Hello World")

export default Login;
