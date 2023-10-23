import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import HomeLayout from "./layouts/home";
import DashboardLayout from "./layouts/dashboard";
import UserPage from "./pages/user";
import PrescriptionsPage from "./pages/prescription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="settings" element={<UserPage />} />
        <Route path="prescriptions" element={<PrescriptionsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
