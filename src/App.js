import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setData([...data, { name: name, email: email }]);

    setName("");
    setEmail("");
  }

  function handleOnChange(e) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        console.log("");
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name : </label>
        <input
          id="name"
          placeholder="Enter your name"
          name="name"
          type="text"
          value={name}
          onChange={handleOnChange}
        />

        <label htmlFor="email"> Email : </label>

        <input
          id="email"
          placeholder="Enter your Email"
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
        />
        <input type="submit" value="submit" />
      </form>

      <br/>
      <br/>
      <Form/>
    </div>
  );
}

export default App;
