import "./App.css";
import { DashboardLayout } from "./components/layout/dashboard-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardMain } from "./components/pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardMain />} />
          <Route path="dashboard" element={<DashboardMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
