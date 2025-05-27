import React from "react";
// import "./ProfileActions.css";

const ProfileActions = () => {
  return (
    <div className="profile-actions">
      <div className="avatar-box">
        <span role="img" aria-label="user" className="avatar-emoji">🧑‍🦱</span>
      </div>
      <div className="plus-box">
        <span className="plus-icon">+</span>
      </div>
    </div>
  );
};

export default ProfileActions;
