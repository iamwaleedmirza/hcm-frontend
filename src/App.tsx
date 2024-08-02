import "./App.css";
import { DashboardLayout } from "./components/layout/dashboard-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardMain } from "./components/pages/dashboard";
import { DashboardProfile } from "./components/pages/dashboard/dashboardProfile";
import { AttendanceMain } from "./components/pages/attendance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardMain />} />
          <Route path="dashboard" element={<DashboardMain />} />
          <Route path="cards" element={<AttendanceMain />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
