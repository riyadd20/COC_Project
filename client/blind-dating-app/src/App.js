import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import Chat from "./pages/Chat";
import Events from "./pages/Events/Events";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* {authToken &&  */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* {authToken &&  */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/events" element={<Events />} />

        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
