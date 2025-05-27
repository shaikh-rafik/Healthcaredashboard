import React from "react";


const HealthStatus=({ iconSrc, label, date, color })=>{
    return (
        <div className="health-status">
            <div className="health-label">
                <img src={iconSrc} alt={`${label} icon`} className="health-icon" />
                <h3>{label}</h3>
            </div>
            <p className="health-date" style={{ color }}>
                Date: {date}
            </p>
            <div id="healthImg">
                <img src={"/loadingBar.png"} alt={`${label} icon`} className="health-icon" />
            </div>
        </div>
    );
}

export default HealthStatus;