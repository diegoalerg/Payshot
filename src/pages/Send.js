import React from "react";

//Router
import { useNavigate } from "react-router-dom";

const Send = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Send Page</h1>
      <p>This is the send page.</p>
      <div id="home">
        <button id="home-button" onClick={handleHomeClick}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Send;
