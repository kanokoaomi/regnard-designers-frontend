import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import { ErrorToast } from "../../utils/errorToast";

const LogOut = () => {
  const dispatch = useDispatch();
  const onLogOutButton = () => {
    try {
      dispatch(logout());
    } catch {
      ErrorToast("Didn't log out, please try again.");
    }
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          margin: 0,
          cursor: "pointer",
        }}
        onClick={() => {
          onLogOutButton();
        }}
      >
        <p className="link">Log Out</p>
      </button>
    </div>
  );
};

export default LogOut;
