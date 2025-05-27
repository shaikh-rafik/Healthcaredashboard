import React from "react";
import { CalendarDays, MessageCircle, Settings,Phone,History,LayoutDashboard } from "lucide-react";


const DashBoarAside=()=>{
    return (
        <>
          <div className="sidebar-content">
            <div className="sidebar-top">
              <h1 className="sidebar-logo">
                Health<span className="dot">care</span>
              </h1>
              <nav className="sidebar-nav">
                <Section title="General">
                  <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                  <NavItem icon={<History size={20} />} label="History" />
                  <NavItem icon={<CalendarDays size={20} />} label="Calendar" />
                  <NavItem icon={<CalendarDays size={20} />} label="Appointments" />
                  <NavItem icon={<CalendarDays size={20} />} label="Statistics" />
                  <NavItem icon={<CalendarDays size={20} />} label="Tests" />
                </Section>
                <Section title="Tools">
                  <NavItem icon={<MessageCircle size={20} />} label="Chat" />
                  <NavItem icon={<Phone size={20} />} label="Support" />
                </Section>
              </nav>
            </div>
            <div>
            <NavItem icon={<Settings size={20} />} label="Setting" /> 
            </div>
          </div>
        </>
    );
}

export default DashBoarAside;


function Section({ title, children }) {
    return (
      <div className="sidebar-section">
        <h3 className="sidebar-section-title">{title}</h3>
        <div className="sidebar-section-items">{children}</div>
      </div>
  
    );
  }
  
  function NavItem({ icon, label, active }) {
    return (
      <div className={`nav-item ${active ? "active" : ""}`}>{icon}<span>{label}</span></div>
    );
  }
  
  
  