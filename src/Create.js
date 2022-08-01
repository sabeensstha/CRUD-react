import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import details from "./array";

const Create = () => {
    let history = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = name,
      b = password;
    let c = id + 1;
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", password);
    localStorage.setItem("Id", c);
    details.push({ id: c, Name: a, Password: b });
    setName("");
    setPassword("");
    history('/')
  };
  return (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
};

export default Create;
