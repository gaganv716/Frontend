import axios from "axios";
import { useState } from "react";

export default function NewSignin({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await axios.post('/api/signin', { username, password });
      if (response.status === 200) {
        setAuth(true);
      }
    } catch (error) {
      console.error("Signin failed", error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
}