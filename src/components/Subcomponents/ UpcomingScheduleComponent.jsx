
import React from "react";
import SimpleAppointmentCard from "../SimpleAppointmentCard";
import upcomingScheduleData from "../../data/upcomingSchedule";
import { useEffect,useState } from "react";



const UpcomingSchedule = () => {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setSchedule(upcomingScheduleData);
    }, 500);
  }, []);


  return (
    <section className="schedule-section">
      <h3 className="section-title">The Upcoming Schedule</h3>

      {Object.entries(schedule).map(([day, appointments]) => (
        <div className="day-group" key={day}>
          <h1 className="day-title">{day}</h1>
          <div className="card-grid">
            {appointments.map((item, index) => (
              <SimpleAppointmentCard
                key={index}
                icon={item.icon}
                label={item.label}
                time={item.time}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingSchedule;
