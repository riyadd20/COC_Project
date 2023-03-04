import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import Events from "./pages/Events/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {authToken &&  */}
        <Route path="/dashboard" element={<Dashboard />} />}
        {/* {authToken &&  */}
        <Route path="/onboarding" element={<OnBoarding />} />}
        <Route path="/events" element={<Events />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
