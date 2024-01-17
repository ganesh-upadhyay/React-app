/*import { useState } from "react";*/

import "./App.css";

function App() {
  /*const [count, setCount] = useState(0);*/
  const handleSubmit = (event: {
    preventDefult: () => void;
    target: {
      name: { value: any };
      contectnumber: { value: any };
      address: { value: any };
      emailid: { value: any };
      password: { value: any };
    };
  }) => {
    event.preventDefult();
    <></>;
    console.log(event.target.name.value);
    console.log(event.target.contectnumber.value);
    console.log(event.target.address.value);
    console.log(event.target.emailid.value);
    console.log(event.target.password.value);
  };
  return (
    <>
      <form>
        <label>
          Username:
          <input type="text" name="name" autoComplete="on" />
        </label>
        <br></br>

        <label>
          Phonenumber:
          <input type="number" name="contact number" autoComplete="on" />
        </label>

        <br></br>

        <label>
          Address:
          <input type="text" name="address" autoComplete="on" />
        </label>

        <br></br>

        <label>
          Emailid:
          <input type="text" name="emailid" autoComplete="on" />
        </label>

        <br></br>

        <label>
          password:
          <input type="text" name="password" autoComplete="on" />
        </label>

        <br></br>
        <button type="submit" style={{ background: "blue" }}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
