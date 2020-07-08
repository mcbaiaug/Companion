import React from "react";
import { useAuth } from "./auth-context";
import "./spinner.css";

function Spinner() {
  const { state } = useAuth();
  const { isLogging } = state;

  if (isLogging) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="dot1" />
          <div className="dot2" />
        </div>
      </div>
    );
  }

  return null;
}

export default Spinner;
