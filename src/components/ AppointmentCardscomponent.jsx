import React from "react";

const AppointmentCards=({ iconSrc, label, data, color, para })=> {
    return (
      <div className={`Appointment-status ${color}`}>
        <div className="Appointment-label">
          <img src={iconSrc} alt={`${label} icon`} className="health-icon" />
          <h3>{label}</h3>
        </div>
        <h4 className="Appointment-date" style={{ color }}>
          {data}
        </h4>
        <p className="Appointment-Para">{para}</p>
      </div>
    );

  }

  export default AppointmentCards;