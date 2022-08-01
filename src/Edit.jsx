import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import details from "./array";



export default function Edit() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState();
  let history = useNavigate();
  const index = details
  .map((e) => {
    return e.Name ;
  })
  .indexOf(name);
  // getting an index of an entry with an id
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(details[index]);
    if(details.id === id ){
      details[index] ={
      Name: name,
      Password:password
    }
    }

  
  // {details[index].map((detail) => {
  //   if(detail.name === name){
  //     id: id;
  //     Name: name;
  //     Password: password;
  //   }
  // } )};
    // details[index] = {
    //   ...details[index],
    //   id: Number(id),
    //   Name: name,
    //   Password: password,
    // };
    // details[index] = { Name: name, Password: password,id:id,...details[index] };
    console.log(details[index]);
    history('/')

    

  };


  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("Name"));
    setPassword(localStorage.getItem("Password"));
  }, []);

  return (
    <form>
      <label>Username</label>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={(e) => handleUpdate(e)}>Update</button>
    </form>
  );
}
