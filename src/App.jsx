import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import HomeLayout from "./layouts/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
