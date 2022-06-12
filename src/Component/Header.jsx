import { selectIsConnectedToRoom, useHMSStore } from "@100mslive/react-sdk";
import React from "react";
import Logo from "../Image/logo.png";

function Header() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);

  return (
    <>
      {!isConnected && (
        <header>
          <img className="logo" src={Logo} alt="logo" />
          <h2>Welcome To YR Video Conference</h2>
        </header>
      )}
    </>
  );
}

export default Header;
