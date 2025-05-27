import React from "react";
import DashboardHeader from "./Subcomponents/DashboardHeader";
import DashBoardOverview from "./Subcomponents/DashboardOverview";
import DashBoarActivebar from "./Subcomponents/DashBoardActiveBar";
import Appointments from "./Subcomponents/AppointmentComponent";
import UpcomingSchedule from "./Subcomponents/ UpcomingScheduleComponent";
import ProfileActions from "./Subcomponents/ProfileActions";
// import './HealthcareDashboard.css';

function HealthcareDashboard() {
  return (
    <section className="dashboard-layout">
      <div className="dashboard-left">
        <div className="header-overview">
          <DashboardHeader />
          <DashBoardOverview />
        </div>
        <div className="active-bar">
          <DashBoarActivebar />
        </div>
      </div>
      <div className="dashboard-right">
          <ProfileActions/>
          <Appointments />
          <UpcomingSchedule /> 
      </div>
    </section>
  );
}

export default HealthcareDashboard;
