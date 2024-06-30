import { usePrivy } from "@privy-io/react-auth";
import "./Remitance.css";
import { useState, useEffect } from "react";

//Router
import { useNavigate } from "react-router-dom";

//UUID used by Circle

import { v4 as uuidv4 } from "uuid";

export const Remitance = () => {
  const { ready, authenticated, user } = usePrivy();

  const navigate = useNavigate();

  const handleSendClick = () => {
    navigate("/send");
  };

  const handleReceiveClick = () => {
    navigate("/receive");
  };

  //UUID

  const [uuid, setUuid] = useState("");

  useEffect(() => {
    const newUuid = uuidv4();
    setUuid(newUuid);
  }, []);

  console.log(user);

  return (
    // {user.wallet.chainType}
    <div id="remitance-container">
      {authenticated === true ? (
        <>
          <span id="network">Chain: </span>
          <span id="account">Account: </span>
          <span id="balance">Balance</span>
          <div>
            <p>Your UUID: {uuid}</p>
          </div>
          <div id="send-receive">
            <button id="send-button" onClick={handleSendClick}>
              Send
            </button>
            <button id="receive-button" onClick={handleReceiveClick}>
              Receive
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>Welcome! Please sign in!</p>
          </div>
        </>
      )}
    </div>
  );
};
