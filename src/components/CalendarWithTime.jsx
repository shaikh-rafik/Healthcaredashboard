import React, { useState, useEffect } from "react";
import  mockCalendarData  from "../data/mockCalendarData";

function CalendarWithTime() {
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCalendarData(mockCalendarData);
    }, 500);
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map((item, index) => (
          <div key={index} className={`calendar-day ${item.date === 26 ? "active-day" : ""}`}>
            <div className="day-name">{item.day}</div>
            <div className="day-date">{item.date}</div>
            <div className="slots">
              {item.slots.map((time, i) => (
                <div
                  key={i}
                  className={`time-slot ${
                    item.date === 26 && time === "09:00"
                      ? "active-slot"
                      : time === "11:00"
                      ? "highlight-slot"
                      : time === "--"
                      ? "disabled-slot"
                      : ""
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarWithTime;
