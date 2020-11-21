import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({ userName: "", userEmail: "" });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmitObj = (e) => {
    e.preventDefault();
    console.log(inputs);

    setInputs({ userName: "", userEmail: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmitObj}>
        <label htmlFor="userName"> Name : </label>
        <input
          id="userName"
          placeholder="Enter your name"
          type="text"
          name="userName"
          value={inputs.userName}
          onChange={handleChange}
        />

        <label htmlFor="userEmail"> Email : </label>
        <input
          id="userEmail"
          placeholder="Enter your Email"
          type="text"
          name="userEmail"
          value={inputs.userEmail}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Form;
