 import HealthcareDashboard from "./components/HealthcareDashboard";
import DashBoardAside from "./components/Subcomponents/DashBoardAside";


function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <DashBoardAside />
      </aside>
      <main className="main-content">
        <HealthcareDashboard />
      </main>
    </div>
  );
}

export default App;
