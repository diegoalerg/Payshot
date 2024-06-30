import React from "react";

//Router
import { useNavigate } from "react-router-dom";

const Receive = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Receive Page</h1>
      <p>This is the receive page.</p>
      <div id="home">
        <button id="home-button" onClick={handleHomeClick}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Receive;
