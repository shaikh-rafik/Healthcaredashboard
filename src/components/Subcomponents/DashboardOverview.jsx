import React from "react";
import HealthStatus from "../HealthStatusComponet";
import  { useState, useEffect } from "react";
import healthStatusData from "../../data/healthStatus";


const DashBoardOverview=()=>{

    const [healthStatus, setHealthStatus] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        setHealthStatus(healthStatusData);
      }, 500);
    }, []);

    return (
        <>
            <section className="dashboard-overview">
                <div className="dashboadr-top">
                    <h1>Dashboard</h1>
                    <input className="dash-time" placeholder="this week" />
                </div>
                <div className="anatomy-section">
                    <div className="anatomy-image-wrapper">
                        {<img
                            src="./body.png"
                            alt="Anatomy"
                            className="anatomy-image"
                        />}
    
                    </div>
                    <div className="health-status-list">
        {healthStatus.map(({ iconSrc, label, date, color }) => (
          <HealthStatus
            key={label}
            iconSrc={iconSrc}
            label={label}
            date={date}
            color={color}
          />
        ))}
      </div>
                </div>
            </section>
        </>
    );
}

export default DashBoardOverview;


