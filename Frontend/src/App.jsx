import React, { useState } from 'react';
import axios from "axios";

const App = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/", {
      name, age
    })
    alert("data gya mongo me")
  };


  return (
    <>
      <form>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} /><br></br>
        <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)} /><br></br>
        <button onClick={submit}>Submit</button>
      </form>
    </>
  )
}

export default App;