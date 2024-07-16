import "./App.css";
import { DashboardLayout } from "./components/layout/dashboard-layout";
import { DashboardProfile } from "./components/specific/dashboardProfile";
import { DasboardCards } from "./components/specific/dashboardCards";

function App() {
  return (
    <>
      {/* <DashboardLayout /> */}
      <DashboardProfile />
      <DasboardCards />
    </>
  );
}

export default App;
