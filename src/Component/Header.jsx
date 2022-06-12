import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import React from "react";
import Logo from "../Image/logo.png";

function Header() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  return (
    <header style={{ width: "10%" }}>
      <img style={{ width: "100%" }} className="logo" src={Logo} alt="logo" />
      {isConnected && (
        <button
          id="leave-btn"
          className="btn-danger"
          onClick={() => hmsActions.leave()}
        >
          Leave Room
        </button>
      )}
    </header>
  );
}

export default Header;
