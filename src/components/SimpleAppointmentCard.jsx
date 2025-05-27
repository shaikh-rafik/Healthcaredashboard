
import React from "react";

const SimpleAppointmentCard = ({ icon, label, time }) => {
    return (
      <div className="appointment-card">
        <div className="card-content">
          <div className="icon-box">
            <span className="icon">{icon}</span>
            <span>{label}</span>
          </div>
          <span className="time">{time}</span>
        </div>
      </div>
    );
  };

  export default  SimpleAppointmentCard;