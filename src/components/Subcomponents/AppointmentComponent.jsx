import AppointmentCards from "../ AppointmentCardscomponent";
import { appointmentsData } from "../../data/appointmentsData";
import CalendarWithTime from "../CalendarWithTime";
import { useEffect, useState } from "react";


const Appointments = () => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAppointments(appointmentsData);
    }, 500);
  }, []);

  return (
    <div className="appointments-wrapper">
      <CalendarWithTime/>
      <div className="cards-grid">
      {appointments.map(({ iconSrc, label, data, para, color }) => (
          <AppointmentCards
            key={label}
            iconSrc={iconSrc}
            label={label}
            data={data}
            para={para}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default Appointments;

