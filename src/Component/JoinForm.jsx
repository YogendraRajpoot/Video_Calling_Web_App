import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinForm() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };
  // const endPoint =
  //   "https://prod-in.100ms.live/hmsapi/https:/videocallingapp.app.100ms.live/";

  // const getToken = async (user_id) => {
  //   const response = await fetch(`${endPoint}api/token`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user_id,
  //       role: "host", //host, teacher, guest, student
  //       type: "app",
  //       room_id: "62a506c1b873787aa2709136",
  //     }),
  //   });
  //   const { token } = await response.json();
  //   return token;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className="input-container">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Auth token"
        />
      </div>
      <button className="btn-primary">Join</button>
    </form>
  );
}

export default JoinForm;
